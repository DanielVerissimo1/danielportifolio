"use client"
import type React from "react"

interface CertificateProps {
  ImgSertif: string
}

const Certificate: React.FC<CertificateProps> = ({ ImgSertif }) => {
  const isPDF = ImgSertif?.toLowerCase().endsWith(".pdf") || false

  return (
    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-purple-500/5 to-blue-500/5 hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 group">
      {/* Visualização direta do certificado */}
      <div className="w-full h-full bg-white/5 flex items-center justify-center relative overflow-hidden">
        {isPDF ? (
          <div className="relative w-full h-full">
            <iframe
              src={ImgSertif}
              className="w-full h-full border-none"
              title="PDF Certificate"
              scrolling="no"
              style={{
                overflow: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            />
          </div>
        ) : (
          <img
            src={ImgSertif || "/placeholder.svg?height=400&width=600&query=certificate"}
            alt="Certificate"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Overlay sutil para hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}

export default Certificate
