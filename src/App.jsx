import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SpendingAnalysis from './components/SpendingAnalysis'
import ClaritySection from './components/ClaritySection'
import Features from './components/Features'
import SubscriptionTracking from './components/SubscriptionTracking'
import SpendingCoach from './components/SpendingCoach'
import OtherBenefits from './components/OtherBenefits'
import Blog from './components/Blog'
import Resources from './components/Resources'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SpendingAnalysis />
      <ClaritySection />
      <Features />
      <SubscriptionTracking />
      <SpendingCoach />
      <OtherBenefits />
      <Blog />
      <Resources />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

