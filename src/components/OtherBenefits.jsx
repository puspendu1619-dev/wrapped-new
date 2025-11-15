import React from 'react'

const OtherBenefits = () => {
  const benefits = [
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your financial data is encrypted and protected with industry-leading security measures'
    },
    {
      icon: '⚡',
      title: 'Real-Time Sync',
      description: 'All your cards and accounts sync automatically in real-time for instant updates'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Access your spending insights anywhere with our iOS and Android apps'
    },
    {
      icon: '🎨',
      title: 'Customizable Reports',
      description: 'Create personalized reports and visualizations tailored to your needs'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="flex flex-col gap-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-[44px] px-4 py-2 mb-6 shadow-sm">
              <span className="font-secondary text-sm text-purple-dark">Comprehensive AI Guide</span>
              <span className="bg-purple-dark/10 text-white px-2 py-0.5 rounded-[44px] text-sm font-secondary">New</span>
            </div>
            <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Some other Benefits</h2>
            <p className="font-primary text-base text-gray-text">
              From prototyping to production - develop without switching tabs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-primary text-lg font-semibold text-text-dark mb-2">{benefit.title}</h3>
                <p className="font-primary text-sm text-gray-text leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherBenefits

