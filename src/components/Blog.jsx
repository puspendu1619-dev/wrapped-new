import React from 'react'

const Blog = () => {
  const blogPosts = [
    {
      date: 'April 2024',
      title: 'Comprehensive AI Guide',
      excerpt: 'Learn how AI is transforming personal finance management'
    },
    {
      date: 'March 2024',
      title: 'Subscription Tracking Tips',
      excerpt: 'Discover how to manage and optimize your subscriptions'
    },
    {
      date: 'February 2024',
      title: 'Financial Health Insights',
      excerpt: 'Understanding your spending patterns for better financial health'
    }
  ]

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl font-semibold text-text-dark mb-4">Blog</h2>
          <p className="font-primary text-base text-gray-text">Stay updated with the latest insights and tips</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer">
              <div className="w-full h-48 bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end"></div>
              <div className="p-6">
                <span className="font-secondary text-xs text-text-secondary uppercase tracking-wider">{post.date}</span>
                <h3 className="font-primary text-xl font-semibold text-text-dark my-2">{post.title}</h3>
                <p className="font-primary text-sm text-gray-text leading-relaxed">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

