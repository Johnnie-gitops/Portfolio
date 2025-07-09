'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, BookOpenIcon, TrophyIcon, MapPinIcon } from '@heroicons/react/24/outline'

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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background from institutions in Vientiane Capital, Lao PDR.
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 dark:bg-cyan-400/10 p-3 rounded-lg">
                    <AcademicCapIcon className="h-8 w-8 text-primary dark:text-cyan-400" />
                  </div>
                  <div className="ml-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h3>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <p className="text-primary dark:text-cyan-400 font-medium">
                        {item.institution}
                      </p>
                    </div>
                    <div className="mt-1 flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      {item.location}
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>

                    {item.courses && item.courses.length > 0 && (
                      <div className="mt-6">
                        <h4 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          <BookOpenIcon className="h-4 w-4 mr-2" />
                          Key Subjects & Skills
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.achievements && item.achievements.length > 0 && (
                      <div className="mt-6">
                        <h4 className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          <TrophyIcon className="h-4 w-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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