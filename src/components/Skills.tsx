import React from 'react'
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

const skills = [
  'Python', 'Playwright', 'SQL', 'MongoDB'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 10
    }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <Parallax speed={-10}>
        <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-100 to-apple-gray-200 opacity-50" />
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <Parallax speed={10}>
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-center mb-12 text-apple-gray-900"
          >
            Tech Stack
          </motion.h2>
        </Parallax>
        <Parallax speed={10}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                variants={itemVariants}
                className="bg-apple-gray-100 text-apple-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-apple-gray-200 hover:shadow-md transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}

export default Skills