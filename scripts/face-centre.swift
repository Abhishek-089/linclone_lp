// Prints each image's face box and centre as fractions of its width and height
// (top-left origin), using macOS Vision. The centre is the `face` argument of
// castPortrait() in src/lib/personas.ts.
//
//   swift scripts/face-centre.swift public/cast/*.webp
import AppKit
import Foundation
import Vision

for path in CommandLine.arguments.dropFirst() {
    guard let img = NSImage(contentsOfFile: path),
          let cg = img.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
        print("\(path): unreadable")
        continue
    }
    let req = VNDetectFaceRectanglesRequest()
    try? VNImageRequestHandler(cgImage: cg, options: [:]).perform([req])
    let faces = (req.results ?? []).map { r -> String in
        let b = r.boundingBox
        return String(format: "x %.3f–%.3f  y %.3f–%.3f  centre (%.3f, %.3f)", b.minX, b.maxX, 1 - b.maxY, 1 - b.minY, b.midX, 1 - b.midY)
    }
    print("\((path as NSString).lastPathComponent) \(cg.width)x\(cg.height): \(faces.count) face(s) \(faces.joined(separator: " | "))")
}
