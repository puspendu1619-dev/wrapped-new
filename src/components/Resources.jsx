import React from 'react'

const Resources = () => {
  const resources = [
    {
      icon: '📚',
      title: 'Help Center',
      description: 'Find answers to common questions and learn how to use Wrapped',
      link: 'Visit Help Center →'
    },
    {
      icon: '📖',
      title: 'Guides',
      description: 'Step-by-step guides to help you make the most of Wrapped',
      link: 'View Guides →'
    },
    {
      icon: '❓',
      title: 'FAQs',
      description: 'Frequently asked questions about features and billing',
      link: 'Read FAQs →'
    },
    {
      icon: '💬',
      title: 'Contact',
      description: 'Get in touch with our support team for assistance',
      link: 'Contact Us →'
    }
  ]

  return (
    <section id="resources" className="py-16 lg:py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Resources</h2>
          <p className="font-primary text-base text-gray-text">Everything you need to get started and succeed</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">{resource.icon}</div>
              <h3 className="font-primary text-lg font-semibold text-text-dark mb-2">{resource.title}</h3>
              <p className="font-primary text-sm text-gray-text leading-relaxed mb-4">{resource.description}</p>
              <a href="#" className="font-secondary text-sm font-semibold text-purple-dark hover:text-purple-light transition-colors">
                {resource.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources

