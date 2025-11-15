import React from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-0">
            <span className="font-logo text-3xl bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end bg-clip-text text-transparent">
              W
            </span>
            <span className="font-primary font-bold text-3xl text-text-dark tracking-tight">
              rapped.Co
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
              Home
            </a>
            <a href="#features" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
              Features
            </a>
            <a href="#pricing" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
              Pricing
            </a>
            <a href="#blog" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
              Blog
            </a>
            <a href="#resources" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
              Resources
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="font-secondary text-[15px] text-text-secondary bg-transparent border border-transparent px-5 py-2.5 rounded-lg hover:bg-gray-light hover:text-black transition-all">
              Sign In
            </button>
            <button className="font-secondary text-[15px] font-semibold text-white bg-gradient-to-b from-purple-light to-purple-dark px-5 py-2.5 rounded-lg shadow-lg shadow-purple-dark/30 hover:shadow-xl hover:shadow-purple-dark/40 hover:-translate-y-0.5 transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

