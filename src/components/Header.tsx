import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Code
            size={24}
            className={`${
              isScrolled ? 'text-apple-gray-900' : 'text-white'
            } transition-colors duration-300`}
          />
          <span
            className={`text-xl font-semibold ${
              isScrolled ? 'text-apple-gray-900' : 'text-white'
            } transition-colors duration-300`}
          >
            Will Hopkins
          </span>
        </motion.div>
        <nav>
          <ul className="flex space-x-8">
            {['Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isScrolled
                      ? 'text-apple-gray-600 hover:text-apple-gray-900'
                      : 'text-white hover:text-apple-gray-200'
                  } transition-colors duration-300`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
