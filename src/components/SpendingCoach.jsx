import React from 'react'

const SpendingCoach = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="flex flex-col gap-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-[44px] px-4 py-2 mb-6 shadow-sm">
              <span className="font-secondary text-sm text-purple-dark">Comprehensive AI Guide</span>
              <span className="bg-purple-dark/10 text-white px-2 py-0.5 rounded-[44px] text-sm font-secondary">New</span>
            </div>
            <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Your Spending Coach</h2>
            <p className="font-primary text-base text-gray-text">
              High-quality dashboard mockup with highlights and Functions
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-[44px] p-8 shadow-[0px_4px_105px_rgba(229,160,255,0.44),0px_4px_132px_rgba(0,0,0,0.06)] border border-purple-light/20 max-w-[900px] w-full">
              <div className="flex items-center gap-6 mb-6 pb-4 border-b border-gray-200">
                <div className="text-6xl w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-light to-purple-dark rounded-full">
                  🤖
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-primary text-2xl font-semibold text-text-dark">AI Spending Coach</h3>
                  <p className="font-secondary text-sm text-text-secondary">Your Personal Finance Assistant</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 bg-gray-light rounded-xl">
                  <span className="text-2xl">💡</span>
                  <span className="font-primary text-base text-text-dark">You're spending 15% more on dining this month</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-light rounded-xl">
                  <span className="text-2xl">📊</span>
                  <span className="font-primary text-base text-text-dark">Your subscription costs have increased by $200</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-light rounded-xl">
                  <span className="text-2xl">🎯</span>
                  <span className="font-primary text-base text-text-dark">You're on track to save $500 this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpendingCoach

