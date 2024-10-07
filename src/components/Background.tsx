import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <Parallax speed={-20}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50] to-[#34495E] opacity-90" />
      </Parallax>
      
      {/* Floating shapes with earthy tones */}
      <Parallax speed={-25} className="absolute right-0 top-0">
        <div className="w-96 h-96 bg-[#D7CCC8] rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3" />
      </Parallax>
      <Parallax speed={5} className="absolute left-10 top-1/4">
        <div className="w-64 h-64 bg-[#A1887F] rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={-12} className="absolute right-20 top-1/2">
        <div className="w-48 h-48 bg-[#8D6E63] rounded-full opacity-15" />
      </Parallax>
      <Parallax speed={8} className="absolute left-1/4 top-3/4">
        <div className="w-72 h-72 bg-[#795548] rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={-6} className="absolute left-5 top-[90%]">
        <div className="w-56 h-56 bg-[#6D4C41] rounded-full opacity-15" />
      </Parallax>
      <Parallax speed={10} className="absolute right-1/4 top-[110%]">
        <div className="w-80 h-80 bg-[#5D4037] rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={-15} className="absolute left-3/4 top-[130%]">
        <div className="w-40 h-40 bg-[#4E342E] rounded-full opacity-20" />
      </Parallax>
      <Parallax speed={7} className="absolute right-1/2 top-[150%]">
        <div className="w-60 h-60 bg-[#3E2723] rounded-full opacity-15" />
      </Parallax>
      
      {/* Additional balls */}
      <Parallax speed={-8} className="absolute left-1/6 top-[170%]">
        <div className="w-32 h-32 bg-[#BCAAA4] rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={13} className="absolute right-1/3 top-[190%]">
        <div className="w-44 h-44 bg-[#8D6E63] rounded-full opacity-15" />
      </Parallax>
      <Parallax speed={-18} className="absolute left-1/2 top-[210%]">
        <div className="w-52 h-52 bg-[#795548] rounded-full opacity-20" />
      </Parallax>
      <Parallax speed={9} className="absolute right-1/5 top-[230%]">
        <div className="w-36 h-36 bg-[#6D4C41] rounded-full opacity-10" />
      </Parallax>
      <Parallax speed={-22} className="absolute left-3/5 top-[250%]">
        <div className="w-48 h-48 bg-[#5D4037] rounded-full opacity-15" />
      </Parallax>
    </div>
  );
};

export default Background;