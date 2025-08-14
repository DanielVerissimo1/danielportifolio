"use client"

import type React from "react"
import { useState } from "react"
import { X, Maximize2 } from "lucide-react"

interface CertificateProps {
  ImgSertif: string
}

const Certificate: React.FC<CertificateProps> = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const imageSource = ImgSertif || "/formal-certificate.png"

  return (
    <div className="w-full">
      {/* Thumbnail Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl group cursor-pointer">
        {/* Certificate Image with Initial Filter */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/10 z-10"></div>
          <img
            src={imageSource || "/placeholder.svg"}
            alt="Certificate"
            className="w-full h-64 block object-contain contrast-110 brightness-90 saturate-110 transition-all duration-300 group-hover:contrast-105 group-hover:brightness-100 group-hover:saturate-110"
            onClick={handleOpen}
          />
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-20"
          onClick={handleOpen}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <Maximize2 size={40} className="mx-auto mb-2 drop-shadow-md" />
              <h6 className="text-lg font-semibold drop-shadow-md">View Certificate</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999]  bg-black/95 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center p-8">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 text-white bg-black/60 hover:bg-black/80 z-10 p-3 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X size={28} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={imageSource || "/placeholder.svg"}
                alt="Certificate Full View"
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-lg"
                style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              />
            </div>
          </div>

          <div className="absolute inset-0 -z-10" onClick={handleClose} />
        </div>
      )}
    </div>
  )
}

export default Certificate
