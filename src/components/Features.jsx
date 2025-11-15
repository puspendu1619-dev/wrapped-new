import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-[44px] px-4 py-2 mb-6 shadow-sm">
            <span className="font-secondary text-sm text-purple-dark">Comprehensive AI Guide</span>
            <span className="bg-purple-dark/10 text-white px-2 py-0.5 rounded-[44px] text-sm font-secondary">New</span>
          </div>
          <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Subscription and Tracking</h2>
          <p className="font-primary text-base text-gray-text max-w-2xl mx-auto">
            From prototyping to production - develop without switching tabs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="font-primary text-lg font-semibold text-text-dark mb-2">Unified Single Documents</h3>
            <p className="font-primary text-sm text-gray-text leading-relaxed">
              Wrapped securely syncs all your cards into one sleek dashboard, giving you a real-time overview of your balances, limits, and available credit
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-primary text-lg font-semibold text-text-dark mb-2">AI agents integration</h3>
            <p className="font-primary text-sm text-gray-text leading-relaxed">
              Intelligent AI agents help you understand your spending patterns and make smarter financial decisions
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-primary text-lg font-semibold text-text-dark mb-2">Real-Time Analysis</h3>
            <p className="font-primary text-sm text-gray-text leading-relaxed">
              Get instant insights into your spending habits with comprehensive analytics and visualizations
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {['Scattered', 'Organized', 'Overwhelmed', 'Wasteful', 'Automated', 'Efficient'].map((label, index) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-2 p-4 rounded-full min-w-[120px] transition-all ${
                ['Organized', 'Automated', 'Efficient'].includes(label)
                  ? 'bg-purple-light border-2 border-purple-dark text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <div className="text-3xl">
                {label === 'Scattered' && '😰'}
                {label === 'Organized' && '😊'}
                {label === 'Overwhelmed' && '😫'}
                {label === 'Wasteful' && '💸'}
                {label === 'Automated' && '🤖'}
                {label === 'Efficient' && '⚡'}
              </div>
              <span className="font-secondary text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

