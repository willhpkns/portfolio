import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shapes for Hero section */}
      <Parallax translateY={[-20, 20]} className="absolute right-12 top-1/4">
        <div className="w-96 h-96 bg-apple-gray-700 rounded-full opacity-20" />
      </Parallax>
      <Parallax translateY={[-15, 15]} className="absolute left-1/4 top-1/3">
        <div className="w-64 h-64 bg-apple-gray-600 rounded-full opacity-10" />
      </Parallax>
      <Parallax translateY={[-25, 25]} className="absolute right-1/4 top-2/3">
        <div className="w-48 h-48 bg-apple-gray-500 rounded-full opacity-15" />
      </Parallax>
      <Parallax translateY={[-10, 10]} className="absolute left-1/3 top-3/4">
        <div className="w-72 h-72 bg-apple-gray-400 rounded-full opacity-10" />
      </Parallax>

      {/* Shapes for Skills section */}
      <Parallax speed={-12} className="absolute left-1/5 top-full">
        <div className="w-56 h-56 bg-apple-gray-500 rounded-full opacity-15" />
      </Parallax>
      <Parallax speed={-7} className="absolute right-1/6 top-[125%]">
        <div className="w-80 h-80 bg-apple-gray-600 rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={-18} className="absolute left-2/3 top-[150%]">
        <div className="w-40 h-40 bg-apple-gray-700 rounded-full opacity-20" />
      </Parallax>
      <Parallax speed={-3} className="absolute right-1/3 top-[175%]">
        <div className="w-60 h-60 bg-apple-gray-400 rounded-full opacity-15" />
      </Parallax>
    </div>
  );
};

export default FloatingShapes;