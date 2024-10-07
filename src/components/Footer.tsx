import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-apple-gray-900 text-apple-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Crafted with <span className="text-red-500">&hearts;</span> using React and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer