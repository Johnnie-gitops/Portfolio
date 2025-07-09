'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profileImage from './../../../../public/images/profile.jpg'

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 flex flex-col items-center justify-center text-left bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 120,
              damping: 12
            }}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg flex-shrink-0"
          >
            <Image
              src={profileImage}
              alt="Johnny Outhathonglid Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Johnny</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                Systems Administrator & <span className="text-blue-600 dark:text-blue-400">DevOps</span> Engineer
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                IT professional specializing in cloud infrastructure, system automation, and scalable solutions. 
                With years of experience in troubleshooting and system administration, I still approach each 
                challenge with the same passion as when I started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Vientiane Capital, Lao PDR
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Available for new opportunities
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Contact Me</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }} 
                  href="#experience" 
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  <span>View Experience</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}