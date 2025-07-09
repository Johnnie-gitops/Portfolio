'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/solid'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-cyan-400 dark:to-cyan-600">
              PORTFOLIO
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.1 + index * 0.1
                  }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary dark:bg-cyan-400 group-hover:w-4/5 group-hover:transition-all group-hover:duration-300 group-hover:left-[10%]"></span>
                  </Link>
                </motion.div>
              ))}
              
              {/* CV Download Button */}
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="/docs/Mizter Johnny's CV Original.pdf" // Update with your actual CV path
                download="Mizter Johnny's CV Original.pdf"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 dark:from-cyan-500 dark:to-cyan-700 text-white text-sm font-medium rounded-lg flex items-center hover:opacity-90 transition-opacity shadow-md"
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {/* Mobile CV Button */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="/path-to-your-cv.pdf" // Update with your actual CV path
                download="Johnny_Outhathonglid_CV.pdf"
                className="mx-3 mt-4 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 dark:from-cyan-500 dark:to-cyan-700 text-white text-base font-medium rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}