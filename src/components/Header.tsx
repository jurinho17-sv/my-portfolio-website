'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#003262] shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#FDB515] transition-colors">
            Ju Ho Kim
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-[#FDB515] transition-colors">Home</Link>
            <Link href="/blog" className="text-white hover:text-[#FDB515] transition-colors">Blog</Link>
            <Link href="/projects" className="text-white hover:text-[#FDB515] transition-colors">Projects</Link>
            <Link href="/about" className="text-white hover:text-[#FDB515] transition-colors">About</Link>
            <Link href="/resume" className="text-white hover:text-[#FDB515] transition-colors">Resume</Link>
            <Link href="/contact" className="text-white hover:text-[#FDB515] transition-colors">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#FDB515] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#003262] border-t border-[#FDB515]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">Home</Link>
              <Link href="/blog" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">Blog</Link>
              <Link href="/projects" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">Projects</Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">About</Link>
              <Link href="/resume" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">Resume</Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-[#FDB515] transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
