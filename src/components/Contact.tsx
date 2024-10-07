import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to a server
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-12 text-apple-gray-900"
        >
          Contact Me
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-apple-gray-700 font-medium mb-2">Name</label>
            <motion.input 
              type="text" 
              id="name" 
              name="name" 
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-apple-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple-gray-500 transition-all duration-300" 
              required 
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-apple-gray-700 font-medium mb-2">Email</label>
            <motion.input 
              type="email" 
              id="email" 
              name="email" 
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-apple-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple-gray-500 transition-all duration-300" 
              required 
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-apple-gray-700 font-medium mb-2">Message</label>
            <motion.textarea 
              id="message" 
              name="message" 
              rows={4} 
              value={formState.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-apple-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-apple-gray-500 transition-all duration-300" 
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-apple-gray-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-apple-gray-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact