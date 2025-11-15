import React from 'react'

const SpendingAnalysis = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-light/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-[500px]">
            <h2 className="font-primary text-5xl font-semibold text-text-dark mb-6 leading-tight">
              <span className="block text-4xl">Real-Time</span>
              <span className="block text-5xl">Spending Analysis</span>
            </h2>
            <p className="font-primary text-base text-gray-text leading-relaxed mb-8">
              Track every dollar. Get insights by category, merchant, and time instantly.
            </p>
            <div className="flex gap-4 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-purple-light rounded-full bg-white font-secondary text-sm text-purple-dark">
                <span className="text-base">⭐</span>
                <span className="font-medium">Ai analysis</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-purple-light rounded-full bg-white font-secondary text-sm text-purple-dark">
                <span className="text-base">📊</span>
                <span className="font-medium">Chart Analysis</span>
              </span>
            </div>
          </div>

          {/* Visual Cards */}
          <div className="relative flex justify-center items-center min-h-[400px]">
            <div className="relative w-full max-w-[600px]">
              {/* Top Card (Week) */}
              <div className="relative bg-gray-light rounded-2xl p-6 mb-4 shadow-lg -translate-x-5 max-w-[350px] z-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-secondary text-sm text-text-secondary font-medium">Week</span>
                  <span className="text-xs text-text-secondary">▼</span>
                </div>
                <div className="font-primary text-3xl font-bold text-black mb-1">$50,000</div>
                <div className="font-secondary text-xs text-gray-text mb-3">5.12% of total</div>
                <div className="w-full h-20 mt-3">
                  <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#E684F8', stopOpacity:0.3}} />
                        <stop offset="100%" style={{stopColor:'#E684F8', stopOpacity:0}} />
                      </linearGradient>
                    </defs>
                    <path d="M 0,50 Q 30,40 50,35 T 100,30 T 150,25 T 200,20" 
                          stroke="#8611FE" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                    <path d="M 0,50 Q 30,40 50,35 T 100,30 T 150,25 T 200,20 L 200,60 L 0,60 Z" 
                          fill="url(#gradient1)"/>
                    <circle cx="50" cy="35" r="3" fill="#8611FE"/>
                    <circle cx="150" cy="25" r="3" fill="#8611FE"/>
                  </svg>
                </div>
              </div>

              {/* Bottom Card (April) */}
              <div className="relative bg-white rounded-[44px] p-8 shadow-[0px_4px_105px_rgba(229,160,255,0.44),0px_4px_132px_rgba(0,0,0,0.06)] border border-purple-light/20 translate-x-10 max-w-[500px] z-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">📅</span>
                  <span className="font-secondary text-sm text-text-secondary font-medium">April</span>
                </div>
                <div className="font-primary text-4xl font-bold text-black mb-1">$953,200.00</div>
                <div className="flex items-center gap-1 mb-6">
                  <span className="font-secondary text-sm font-semibold text-success">110%</span>
                  <span className="text-sm text-success">↑</span>
                </div>
                <div className="w-full h-36 mt-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:'#E684F8', stopOpacity:0.4}} />
                        <stop offset="100%" style={{stopColor:'#E684F8', stopOpacity:0}} />
                      </linearGradient>
                    </defs>
                    <path d="M 0,100 Q 60,80 100,70 T 200,50 T 300,30 T 400,20" 
                          stroke="#8611FE" 
                          strokeWidth="4" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                    <path d="M 0,100 Q 60,80 100,70 T 200,50 T 300,30 T 400,20 L 400,120 L 0,120 Z" 
                          fill="url(#gradient2)"/>
                    <line x1="200" y1="50" x2="200" y2="120" 
                          stroke="#8611FE" 
                          strokeWidth="2" 
                          strokeDasharray="4,4" 
                          opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpendingAnalysis

