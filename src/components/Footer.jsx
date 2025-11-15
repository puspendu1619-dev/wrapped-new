import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Socials */}
          <div>
            <div className="flex items-center gap-0 mb-6">
              <span className="font-logo text-2xl bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end bg-clip-text text-transparent">
                W
              </span>
              <span className="font-primary font-bold text-2xl text-text-dark tracking-tight">
                rapped.Co
              </span>
            </div>
            <div className="mt-6">
              <h4 className="font-primary text-base font-bold text-black mb-4">Socials</h4>
              <div className="flex gap-4">
                <a href="#" className="text-2xl hover:scale-110 transition-transform">📱</a>
                <a href="#" className="text-2xl hover:scale-110 transition-transform">🐦</a>
                <a href="#" className="text-2xl hover:scale-110 transition-transform">💼</a>
                <a href="#" className="text-2xl hover:scale-110 transition-transform">📷</a>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-primary text-base font-bold text-black mb-4">Product</h4>
            <ul className="flex flex-col gap-5">
              {['Interface', 'Features', 'Pricing', 'Demo', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-primary text-base font-bold text-black mb-4">Company</h4>
            <ul className="flex flex-col gap-5">
              {['Our team', 'Our values', 'Careers', 'Blog', 'Press Kit'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-primary text-base font-bold text-black mb-4">Resources</h4>
            <ul className="flex flex-col gap-5">
              {['Blog', 'Help Center', 'Guides', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-primary text-base font-bold text-black mb-4">Legal</h4>
            <ul className="flex flex-col gap-5">
              {['Privacy Policy', 'Terms of Service', 'Data Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-secondary text-[15px] text-text-secondary hover:text-black transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <div className="flex justify-center items-center gap-2 font-secondary text-sm text-text-secondary">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-black transition-colors">Terms of Conditions</a>
            <span>·</span>
            <span>2025 EarnReach</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

