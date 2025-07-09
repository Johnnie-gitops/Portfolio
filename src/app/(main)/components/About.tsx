'use client'

import { motion } from 'framer-motion'
import { Cpu, Shield, Cloud, Music, Activity, BookOpen } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About <span className="text-blue-600 dark:text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and personal interests
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-8 z-10">
            <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
              I am a passionate IT professional with expertise in system administration, DevOps, and 
              infrastructure management. My journey in technology has equipped me with comprehensive 
              skills in troubleshooting complex systems, optimizing performance, and implementing 
              robust solutions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Focus Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-cyan-400 flex items-center gap-3">
                    <Cpu className="text-blue-500 dark:text-cyan-400" />
                    Technical Focus
                  </h3>
                  <ul className="space-y-4">
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Cpu size={18} className="text-blue-500 dark:text-cyan-400 mt-0.5" />
                      System Administration & Configuration
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Shield size={18} className="text-blue-500 dark:text-cyan-400 mt-0.5" />
                      Security & Firewall Management
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Cloud size={18} className="text-blue-500 dark:text-cyan-400 mt-0.5" />
                      Virtualization & Cloud Infrastructure
                    </motion.li>
                  </ul>
                </div>
              </motion.div>

              {/* Personal Interests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-emerald-400 flex items-center gap-3">
                    <Music className="text-green-500 dark:text-emerald-400" />
                    Personal Interests
                  </h3>
                  <ul className="space-y-4">
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Music size={18} className="text-green-500 dark:text-emerald-400 mt-0.5" />
                      Playing guitar and music composition
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <Activity size={18} className="text-green-500 dark:text-emerald-400 mt-0.5" />
                      Football and physical fitness
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <BookOpen size={18} className="text-green-500 dark:text-emerald-400 mt-0.5" />
                      Continuous learning and skill development
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}