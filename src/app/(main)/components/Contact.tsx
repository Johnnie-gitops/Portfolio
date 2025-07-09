'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact <span className="text-blue-600 dark:text-cyan-400">Information</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with me through these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Contact Details
            </h3>
            
            {[
              {
                icon: <FaWhatsapp className="text-2xl text-green-500 dark:text-green-400" />,
                label: "WhatsApp",
                value: "+856 20 8854 2894",
                href: "https://wa.me/8562088542894",
                color: "hover:text-green-600 dark:hover:text-green-400"
              },
              {
                icon: <FaPhone className="text-2xl text-blue-500 dark:text-cyan-400" />,
                label: "Phone",
                value: "+856 20 2980 4622",
                href: "tel:+8562029804622",
                color: "hover:text-blue-600 dark:hover:text-cyan-400"
              },
              {
                icon: <FaEnvelope className="text-2xl text-blue-500 dark:text-cyan-400" />,
                label: "Email",
                value: "mizter.johnnie@gmail.com",
                href: "mailto:mizter.johnnie@gmail.com",
                color: "hover:text-blue-600 dark:hover:text-cyan-400"
              },
              {
                icon: <FaMapMarkerAlt className="text-2xl text-blue-500 dark:text-cyan-400" />,
                label: "Location",
                value: "Vientiane Capital, Lao P.D.R",
                color: ""
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {contact.label}
                    </p>
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-lg font-medium text-gray-700 dark:text-gray-300 transition ${contact.color}`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Reference Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Professional Reference
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center text-blue-500 dark:text-cyan-400 text-xl">
                    👤
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Khamla ENG</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Reference Contact</p>
                  </div>
                </div>
                <div className="space-y-3 pl-2">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaPhone className="text-blue-500 dark:text-cyan-400" />
                    <a href="tel:+8562055859899" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                      +856 20 5585 9899
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="text-blue-500 dark:text-cyan-400" />
                    <a href="mailto:khamlanote5@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition">
                      khamlanote5@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-gray-700 text-green-500 dark:text-green-400">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Preferred contact via WhatsApp
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-gray-700 text-amber-500 dark:text-amber-400">
                    <span className="text-xl">🕒</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}