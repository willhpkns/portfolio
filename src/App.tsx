import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import { motion } from 'framer-motion'

function App() {
  return (
    <ParallaxProvider>
      <motion.div 
        className="min-h-[400vh] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Background />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </motion.div>
    </ParallaxProvider>
  )
}

export default App