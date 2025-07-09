'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I am a passionate IT professional with expertise in system administration, DevOps, and 
            infrastructure management. My journey in technology has equipped me with comprehensive 
            skills in troubleshooting complex systems, optimizing performance, and implementing 
            robust solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-cyan-400">
                Technical Focus
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500 dark:text-cyan-400">🔧</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    System Administration & Configuration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500 dark:text-cyan-400">🛡️</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Security & Firewall Management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-500 dark:text-cyan-400">☁️</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Virtualization & Cloud Infrastructure
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary dark:text-cyan-400">
                Personal Interests
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 dark:text-emerald-400">🎸</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Playing guitar and music composition
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 dark:text-emerald-400">⚽</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Football and physical fitness
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-500 dark:text-emerald-400">🌱</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Continuous learning and skill development
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}