"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Made logo clickable to go home */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center">
              <span
                className={`text-2xl font-bold transition-all duration-300 group-hover:scale-110 ${isScrolled ? "text-gx-navy" : "text-white"}`}
              >
                G
              </span>
              <span className="text-2xl font-bold text-gx-teal transition-all duration-300 group-hover:scale-110">
                X
              </span>
            </div>
            <span className={`font-medium transition-colors ${isScrolled ? "text-gx-navy" : "text-white"}`}>
              Integrated Services
            </span>
          </Link>

          {/* Desktop Menu - Removed Home button */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`font-medium transition-all duration-300 hover:text-gx-teal hover:scale-105 ${
                isActive("/about") ? "text-gx-teal" : isScrolled ? "text-gx-navy" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`font-medium transition-all duration-300 hover:text-gx-teal hover:scale-105 ${
                isActive("/services") ? "text-gx-teal" : isScrolled ? "text-gx-navy" : "text-white"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-all duration-300 hover:text-gx-teal hover:scale-105 ${
                isActive("/contact") ? "text-gx-teal" : isScrolled ? "text-gx-navy" : "text-white"
              }`}
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-gx-teal hover:bg-gx-teal/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 transition-transform duration-300 ${isScrolled ? "text-gx-navy" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-transform duration-300 ${isScrolled ? "text-gx-navy" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu - Removed Home button from mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 space-y-4">
              <Link
                href="/about"
                className={`block w-full text-left px-4 py-2 font-medium transition-colors hover:text-gx-teal ${
                  isActive("/about") ? "text-gx-teal" : "text-gx-navy"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block w-full text-left px-4 py-2 font-medium transition-colors hover:text-gx-teal ${
                  isActive("/services") ? "text-gx-teal" : "text-gx-navy"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`block w-full text-left px-4 py-2 font-medium transition-colors hover:text-gx-teal ${
                  isActive("/contact") ? "text-gx-teal" : "text-gx-navy"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4">
                <Link href="/contact">
                  <Button
                    className="w-full bg-gx-teal hover:bg-gx-teal/90 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
