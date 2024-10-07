import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A React Native mobile app for managing tasks and projects.',
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard using React and a third-party weather API.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com',
    live: 'https://example.com'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-apple-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-apple-gray-900"
        >
          Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-apple-gray-900">{project.title}</h3>
                <p className="text-apple-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-apple-gray-700 hover:text-apple-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-apple-gray-700 hover:text-apple-gray-900 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects