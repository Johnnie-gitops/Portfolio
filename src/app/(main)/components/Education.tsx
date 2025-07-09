'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Trophy, MapPin } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Electronic Engineering",
      institution: "National University of Laos",
      year: "2015 - 2019",
      location: "Vientiane Capital, Lao PDR",
      description: "Comprehensive program covering electronic systems design, circuit theory, and engineering principles.",
      courses: [
        "Electronic Circuits", 
        "Digital Systems", 
        "Signal Processing",
        "Control Systems",
        "Microprocessors"
      ],
      achievements: [
        "Completed degree in standard duration",
        "Practical project experience in electronics design"
      ]
    },
    {
      id: 2,
      degree: "English for Profession",
      institution: "Romeo English Academy",
      year: "2018 - 2020",
      location: "Vientiane Capital, Lao PDR",
      description: "Specialized English language training focused on professional communication and technical vocabulary.",
      courses: [
        "Technical Writing", 
        "Professional Communication", 
        "Presentation Skills",
        "Business English"
      ],
      achievements: [
        "Improved professional communication skills",
        "Enhanced technical documentation abilities"
      ]
    }
  ]

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Education <span className="text-blue-600 dark:text-cyan-400">Background</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8 z-10">
                <div className="flex items-start gap-5 mb-5">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-cyan-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
                      <p className="text-lg font-medium text-blue-600 dark:text-cyan-400">{item.institution}</p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="text-blue-500 dark:text-cyan-400" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    <span className="inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {item.year}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-3">
                      <BookOpen size={18} className="text-blue-500 dark:text-cyan-400" />
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {item.courses.map((course, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="inline-block bg-blue-50 dark:bg-gray-700 px-4 py-1.5 rounded-full text-sm font-medium text-blue-700 dark:text-cyan-400"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-3">
                      <Trophy size={18} className="text-green-500 dark:text-emerald-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-green-500 dark:text-emerald-400 mt-1.5">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}