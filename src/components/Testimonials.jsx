import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kehinde Clement',
      handle: '@Clement',
      text: '"This completely changed how we approach sales. We used to rely on cold emails and hope for the best."',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Jason Okafor',
      handle: '@Clement',
      text: '"Wrapped.co gave me complete control over my spending. I finally understand where my money goes."',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'Chioma Adeyemi',
      handle: '@Clement',
      text: '"I had no idea I was paying for 7 different subscriptions I didn\'t use. Wrapped found and cancel them"',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Emily Kim',
      handle: '@Clement',
      text: '"I used to wait until the end of the month to check my statements. Now I get live updates and alerts when anything unusual happens"',
      gradient: 'from-pink-300 to-yellow-300'
    },
    {
      name: 'Liam Thompson',
      handle: '@Clement',
      text: '"Managing multiple business cards was a mess. Wrapped simplified everything—no more Excel sheets or guessing."',
      gradient: 'from-teal-400 to-purple-600'
    },
    {
      name: 'Carlos Ramirez',
      handle: '@Clement',
      text: '"The AI insights are incredible. It\'s like having a financial advisor that knows exactly what I need."',
      gradient: 'from-cyan-200 to-pink-200'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-[44px] px-4 py-2 mb-6 shadow-sm">
            <span className="font-secondary text-sm text-purple-dark">4.9/5.0 Star Rating</span>
            <span className="bg-purple-dark/10 text-white px-2 py-0.5 rounded-[44px] text-sm font-secondary">4.9 ⭐</span>
          </div>
          <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Tested and Reviewed</h2>
          <p className="font-primary text-base text-gray-text">
            See how Wrapped is helping people take control of their finances
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex-shrink-0`}></div>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-primary text-base font-semibold text-black">{testimonial.name}</h4>
                  <p className="font-secondary text-sm text-text-secondary">{testimonial.handle}</p>
                </div>
              </div>
              <p className="font-primary text-sm text-gray-text leading-relaxed italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

