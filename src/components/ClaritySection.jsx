import React from 'react'

const ClaritySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-primary text-4xl font-semibold text-text-dark mb-6 leading-tight">
              Clarity Focused<br />Insight Driven
            </h2>
            <p className="font-primary text-base text-gray-text leading-relaxed mb-6">
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
          </div>

          {/* Visual Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-[44px] p-6 shadow-[0px_4px_105px_rgba(229,160,255,0.44),0px_4px_132px_rgba(0,0,0,0.06)] border border-purple-light/20 max-w-[400px] w-full">
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-base">📅</span>
                  <span className="font-secondary text-sm text-text-secondary">April</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-primary text-2xl font-bold text-black">$953,200.00</span>
                  <span className="font-secondary text-sm font-semibold text-success">110%</span>
                </div>
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
    </section>
  )
}

export default ClaritySection

