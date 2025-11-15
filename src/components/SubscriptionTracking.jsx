import React from 'react'

const SubscriptionTracking = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="flex flex-col gap-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-[44px] px-4 py-2 mb-6 shadow-sm">
              <span className="font-secondary text-sm text-purple-dark">Comprehensive AI Guide</span>
              <span className="bg-purple-dark/10 text-white px-2 py-0.5 rounded-[44px] text-sm font-secondary">New</span>
            </div>
            <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Subscription and Tracking</h2>
            <p className="font-primary text-base text-gray-text">
              From prototyping to production - develop without switching tabs
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-[44px] p-8 shadow-[0px_4px_105px_rgba(229,160,255,0.44),0px_4px_132px_rgba(0,0,0,0.06)] border border-purple-light/20 max-w-[800px] w-full">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div className="font-primary text-2xl font-semibold text-text-dark">Your Spending Dashboard</div>
                <div className="font-secondary text-sm text-text-secondary">April 2024</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-light rounded-xl p-4 text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <span className="text-3xl">💳</span>
                    <span className="font-secondary text-sm text-text-secondary">Credit Cards</span>
                  </div>
                  <div className="font-primary text-2xl font-bold text-text-dark">$45,230</div>
                </div>
                <div className="bg-gray-light rounded-xl p-4 text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <span className="text-3xl">📱</span>
                    <span className="font-secondary text-sm text-text-secondary">Subscriptions</span>
                  </div>
                  <div className="font-primary text-2xl font-bold text-text-dark">$1,200</div>
                </div>
                <div className="bg-gray-light rounded-xl p-4 text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <span className="text-3xl">🛒</span>
                    <span className="font-secondary text-sm text-text-secondary">Purchases</span>
                  </div>
                  <div className="font-primary text-2xl font-bold text-text-dark">$8,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionTracking

