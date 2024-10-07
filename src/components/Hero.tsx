import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Parallax speed={-20}>
        <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-800 to-apple-gray-900 opacity-90" />
      </Parallax>
      <Parallax speed={-10} className="absolute right-0 bottom-0">
        <div className="w-96 h-96 bg-apple-gray-700 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2" />
      </Parallax>
      <div className="container mx-auto px-4 text-center relative z-10">
        <Parallax speed={-1}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-4 text-black
          "
          >
            Will Hopkins
          </motion.h1>
        </Parallax>
        <Parallax speed={4}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-apple-gray-300 mb-8"
          >
            Software Engineer
          </motion.p>
        </Parallax>
        <Parallax speed={5}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto text-apple-gray-400 mb-12 leading-relaxed"
          >
            I like big butts and I cannot lie.
          </motion.p>
        </Parallax>
        <Parallax speed={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex justify-center space-x-8"
          >
            {[
              { Icon: Github, href: 'https://github.com' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Mail, href: 'mailto:john@example.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
};

export default Hero;
