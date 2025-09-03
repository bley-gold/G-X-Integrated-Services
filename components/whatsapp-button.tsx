"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "27723305637" // South African format without + or spaces
  const message = encodeURIComponent(
    "Hello! I'm interested in learning more about GX Integrated Services. Could you please provide more information about your project management, procurement, and real estate services?"
  )
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group block"
    >
      <Button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all duration-300 hover:scale-125 p-3 sm:p-4 border-2 border-green-400/50 hover:border-green-300 text-sm sm:text-base min-w-[48px] min-h-[48px] flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline ml-2">WhatsApp</span>
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
      <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
    </a>
  )
}