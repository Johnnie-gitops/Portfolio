'use client'

import { motion } from 'framer-motion'

interface Certification {
  title: string;
  date: string;
  location?: string;
  icon?: string;
}

const certifications: Certification[] = [
  {
    title: "VMware HCI Core Fast Track (vSphere8_vSAN8 OSA_ESA)",
    date: "November 2023",
    location: "Thailand",
    icon: "🖥️"
  },
  {
    title: "FortiGate Firewall Basic and Administrator",
    date: "February 2025",
    location: "Thailand",
    icon: "🛡️"
  },
  {
    title: "Advanced FortiGate Firewall",
    date: "February 2025",
    location: "Thailand",
    icon: "🔐"
  },
  {
    title: "IPv6 - Security Tutorial",
    date: "April 2025",
    location: "Lao PDR",
    icon: "🌐"
  },
  {
    title: "The Course in Mobile Data Collection and Visualization",
    date: "May 2024",
    icon: "📊"
  },
  {
    title: "Lao Digital Week 2025 - IPv6 Security Tutorial",
    date: "May 2025",
    location: "Lao PDR",
    icon: "🔒"
  }
]

export default function Certifications() {
  const cardGradients = [
    'from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800',
    'from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800',
    'from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800',
    'from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800',
    'from-pink-50 to-rose-50 dark:from-gray-700 dark:to-gray-800',
    'from-teal-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800'
  ]

  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`bg-gradient-to-br ${cardGradients[index % cardGradients.length]} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
            >
              <div className="flex items-start gap-3">
                {cert.icon && (
                  <span className="text-2xl">{cert.icon}</span>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-primary dark:text-cyan-400 mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <span>{cert.date}</span>
                    {cert.location && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{cert.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-cyan-400/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}