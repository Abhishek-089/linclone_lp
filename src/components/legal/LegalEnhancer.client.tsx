'use client';

import { useEffect, useRef, useState } from 'react';
import { scrollToId } from '@/lib/motion/smooth-scroll';

/**
 * The one client island of a legal page. Everything works without it (plain
 * anchors, a closed mobile TOC, the inline back-to-top link); it only adds:
 * - scroll-spy: `aria-current` on the TOC link of the section under the header
 *   (one IntersectionObserver on the sections, no scroll handler)
 * - copy-link on the heading anchors (falls back to following the link)
 * - the floating back-to-top button once the hero is out of view
 * - in-page jumps (TOC, tiles, back-to-top) go through one smooth scroll and
 *   move focus to the target; Lenis alone also lets the native jump run, and
 *   the two race (the page could stop hundreds of px short)
 * - closes the mobile TOC before a jump; opens every <details> before printing
 */
export function LegalEnhancer({ copiedLabel }: { copiedLabel: string }) {
  const [toast, setToast] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-legal-root]');
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-legal-section]'));
    const tocLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-toc-link]'));
    const tocScroller = root.querySelector<HTMLElement>('[data-toc-scroll]');
    const mobileToc = root.querySelector<HTMLDetailsElement>('[data-toc-mobile]');
    const toTop = document.querySelector<HTMLElement>('[data-legal-totop]');
    const hero = root.querySelector<HTMLElement>('[data-legal-hero]');
    const cleanups: (() => void)[] = [];

    // ── scroll-spy ──
    let current = '';
    const setCurrent = (id: string) => {
      if (id === current) return;
      current = id;
      for (const a of tocLinks) {
        const on = a.hash === `#${id}`;
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
        // keep the active entry visible inside a tall desktop TOC (never scrolls the page)
        if (on && tocScroller && tocScroller.contains(a)) {
          const top = a.offsetTop - tocScroller.offsetTop;
          if (top < tocScroller.scrollTop || top > tocScroller.scrollTop + tocScroller.clientHeight - a.offsetHeight) {
            tocScroller.scrollTop = Math.max(0, top - tocScroller.clientHeight / 3);
          }
        }
      }
    };
    if (sections.length && typeof IntersectionObserver !== 'undefined') {
      const visible = new Set<Element>();
      const headerH = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 72;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) visible.add(e.target);
            else visible.delete(e.target);
          }
          // the first section (document order) crossing the reading line wins; between
          // sections the last one stays highlighted
          const hit = sections.find((s) => visible.has(s));
          if (hit) setCurrent(hit.id);
          else if (window.scrollY < (sections[0]?.offsetTop ?? 0) - window.innerHeight / 2) setCurrent('');
        },
        { rootMargin: `-${Math.round(headerH)}px 0px -66% 0px` },
      );
      sections.forEach((s) => io.observe(s));
      cleanups.push(() => io.disconnect());
    }

    // ── back-to-top: visible once the hero has left the viewport ──
    if (toTop && hero && typeof IntersectionObserver !== 'undefined') {
      const io = new IntersectionObserver(([e]) => toTop.toggleAttribute('data-show', !e.isIntersecting), { rootMargin: '0px 0px 0px 0px' });
      io.observe(hero);
      cleanups.push(() => io.disconnect());
    }

    // ── in-page jumps, copy-link anchors, mobile TOC ──
    const jump = (hash: string) => {
      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return false;
      history.pushState(null, '', hash);
      // the closing mobile TOC changes the layout above the target: measure next frame
      requestAnimationFrame(() => {
        scrollToId(id);
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
        el.focus({ preventScroll: true });
      });
      return true;
    };
    const onClick = async (ev: MouseEvent) => {
      if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      const anchor = (ev.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      if (anchor.closest('[data-toc-mobile]') && mobileToc) mobileToc.open = false;
      if (anchor.hasAttribute('data-copy-link')) {
        const url = `${location.origin}${location.pathname}${anchor.hash}`;
        if (!navigator.clipboard?.writeText) return; // follow the link instead
        ev.preventDefault();
        ev.stopPropagation(); // not a jump: keep Lenis from scrolling
        try {
          await navigator.clipboard.writeText(url);
          history.replaceState(null, '', anchor.hash);
          setToast(copiedLabel);
          clearTimeout(timer.current);
          timer.current = setTimeout(() => setToast(''), 1800);
        } catch {
          jump(anchor.hash);
        }
        return;
      }
      if (jump(anchor.hash)) {
        ev.preventDefault();
        ev.stopPropagation(); // Lenis listens on window: one scroll only
      }
    };
    document.addEventListener('click', onClick);
    cleanups.push(() => document.removeEventListener('click', onClick));

    // ── print: expand every accordion ──
    const opened: HTMLDetailsElement[] = [];
    const beforePrint = () => {
      root.querySelectorAll<HTMLDetailsElement>('details:not([open])').forEach((d) => {
        d.open = true;
        opened.push(d);
      });
    };
    const afterPrint = () => {
      opened.splice(0).forEach((d) => (d.open = false));
    };
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
    cleanups.push(() => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      clearTimeout(timer.current);
    };
  }, [copiedLabel]);

  return (
    <p className="legal-toast" role="status" aria-live="polite" data-show={toast ? '' : undefined}>
      {toast}
    </p>
  );
}
