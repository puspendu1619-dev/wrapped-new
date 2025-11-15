import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-[490px]">
            <h1 className="font-primary text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-text-dark mb-6">
              Take Control of Your Spending Experience
            </h1>
            <p className="font-primary text-base text-gray-text leading-relaxed mb-8">
              Wrapped.co gives you a unified view of your spending, subscriptions, and financial health with full control.
            </p>
            <div className="flex flex-col gap-4">
              <button className="font-secondary text-lg font-semibold text-white bg-gradient-to-b from-purple-light to-purple-dark px-12 py-3.5 rounded-xl shadow-[0px_2.15px_1.72px_rgba(0,0,0,0.12),0px_5.16px_4.13px_rgba(0,0,0,0.13),inset_0px_-1px_0px_rgba(76,56,122,1),inset_0px_0.78px_0px_rgba(255,255,255,0.3)] hover:shadow-xl hover:-translate-y-0.5 transition-all w-fit">
                Start For Free
              </button>
              <p className="font-secondary text-sm text-text-secondary">
                12,229 users joined last month
              </p>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-[44px] p-8 shadow-[0px_4px_105px_rgba(229,160,255,0.44),0px_4px_132px_rgba(0,0,0,0.06)] border border-purple-light/20">
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <span className="font-secondary text-sm text-text-secondary">April</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-primary text-2xl font-bold text-black">$953,200.00</span>
                  <span className="font-secondary text-sm font-semibold text-success">110%</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-primary text-xl font-semibold text-text-dark">Real-Time Spending Analysis</h3>
                <p className="font-primary text-sm text-gray-text leading-relaxed">
                  Track every dollar. Get insights by category, merchant, and time instantly.
                </p>
                <div className="flex gap-2">
                  <span className="bg-white border border-purple-light rounded-full px-3 py-1.5 text-xs font-secondary text-purple-dark">
                    Ai analysis
                  </span>
                  <span className="bg-white border border-purple-light rounded-full px-3 py-1.5 text-xs font-secondary text-purple-dark">
                    Chart Analysis
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex flex-col gap-1">
                    <span className="font-secondary text-xs text-text-secondary">Week</span>
                    <span className="font-primary text-lg font-bold text-black">$50,000</span>
                    <span className="font-secondary text-xs text-gray-text">5.12% of total</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

