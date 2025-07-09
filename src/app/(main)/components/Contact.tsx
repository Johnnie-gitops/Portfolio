'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Contact Information
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-cyan-400">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-lg shadow-sm"
                  >
                    <span className="mr-3 text-2xl text-green-500 dark:text-green-400">
                      <FaWhatsapp />
                    </span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                      <a 
                        href="https://wa.me/8562088542894" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                      >
                        +856 20 8854 2894
                      </a>
                    </div>
                  </motion.li>

                  {/* Other contact methods remain the same */}
                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-lg shadow-sm"
                  >
                    <span className="mr-3 text-2xl text-blue-500 dark:text-cyan-400">📞</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">+856 20 2980 4622</p>
                    </div>
                  </motion.li>

                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-lg shadow-sm"
                  >
                    <span className="mr-3 text-2xl text-blue-500 dark:text-cyan-400">✉️</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:mizter.johnnie@gmail.com" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition">
                        mizter.johnnie@gmail.com
                      </a>
                    </div>
                  </motion.li>

                  <motion.li 
                    whileHover={{ x: 5 }}
                    className="flex items-center p-3 bg-white/80 dark:bg-gray-900/50 rounded-lg shadow-sm"
                  >
                    <span className="mr-3 text-2xl text-blue-500 dark:text-cyan-400">📍</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Vientiane Capital, Lao P.D.R</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            {/* Reference Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-cyan-400">
                  Professional Reference
                </h3>
                <div className="p-5 bg-white/80 dark:bg-gray-900/50 rounded-xl shadow-sm">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Khamla ENG</h4>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <span className="mr-3 text-xl text-blue-500 dark:text-cyan-400">📞</span>
                      <a 
                        href="tel:+8562055859899" 
                        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition"
                      >
                        +856 20 5585 9899
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-xl text-blue-500 dark:text-cyan-400">✉️</span>
                      <a 
                        href="mailto:khamlanote5@gmail.com" 
                        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition"
                      >
                        khamlanote5@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-5 bg-white/80 dark:bg-gray-900/50 rounded-xl shadow-sm"
              >
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-3">Availability</h4>
                <div className="flex items-center">
                  <span className="mr-3 text-xl text-green-500 dark:text-emerald-400">
                    <FaWhatsapp />
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Preferred contact via WhatsApp
                  </p>
                </div>
                <div className="mt-3 flex items-center">
                  <span className="mr-3 text-xl text-green-500 dark:text-emerald-400">🕒</span>
                  <p className="text-gray-700 dark:text-gray-300">
                    Typically responds within 24 hours
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}