import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function App() {
  return (
    <ParallaxProvider>
      <motion.div 
        className="min-h-screen bg-white text-apple-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </ParallaxProvider>
  )
}

export default App