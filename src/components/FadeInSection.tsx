import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;