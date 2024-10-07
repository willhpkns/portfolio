import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section className="relative min-h-[200vh] flex flex-col justify-start items-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 mt-[30vh]">
        <Parallax speed={2}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold mb-4 text-black"
          >
            Will Hopkins
          </motion.h1>
        </Parallax>
        <Parallax speed={4}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-[#E0C4B0] mb-8"
          >
            Software Engineer
          </motion.p>
        </Parallax>
        <Parallax speed={8}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto text-[#D2B48C] mb-12 leading-relaxed"
          >
            I like big butts and I cannot lie.
          </motion.p>
        </Parallax>
        <Parallax speed={8}>
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
                className="text-[#C19A6B] hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </Parallax>
      </div>

      <Parallax speed={-5} className="mt-[50vh] text-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="text-2xl text-[#E0C4B0]"
        >
          Scroll down to explore my work
        </motion.p>
      </Parallax>
    </section>
  );
};

export default Hero;
