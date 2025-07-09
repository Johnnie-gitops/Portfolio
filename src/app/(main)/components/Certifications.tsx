'use client'

import { motion } from 'framer-motion'
import { Server, Shield, Lock, Globe, BarChart2, Key } from 'lucide-react'

interface Certification {
  title: string;
  date: string;
  location?: string;
  icon?: React.ReactNode;
}

export default function Certifications() {
  const certifications = [
    {
      title: "VMware HCI Core Fast Track (vSphere8_vSAN8 OSA_ESA)",
      date: "November 2023",
      location: "Thailand",
      icon: <Server className="text-blue-500 dark:text-cyan-400" />
    },
    {
      title: "FortiGate Firewall Basic and Administrator",
      date: "February 2025",
      location: "Thailand",
      icon: <Shield className="text-blue-500 dark:text-cyan-400" />
    },
    {
      title: "Advanced FortiGate Firewall",
      date: "February 2025",
      location: "Thailand",
      icon: <Lock className="text-blue-500 dark:text-cyan-400" />
    },
    {
      title: "IPv6 - Security Tutorial",
      date: "April 2025",
      location: "Lao PDR",
      icon: <Globe className="text-blue-500 dark:text-cyan-400" />
    },
    {
      title: "The Course in Mobile Data Collection and Visualization",
      date: "May 2024",
      icon: <BarChart2 className="text-blue-500 dark:text-cyan-400" />
    },
    {
      title: "Lao Digital Week 2025 - IPv6 Security Tutorial",
      date: "May 2025",
      location: "Lao PDR",
      icon: <Key className="text-blue-500 dark:text-cyan-400" />
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Professional <span className="text-blue-600 dark:text-cyan-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My validated technical qualifications and training
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-gray-700">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span>{cert.date}</span>
                      {cert.location && (
                        <>
                          <span>•</span>
                          <span>{cert.location}</span>
                        </>
                      )}
                    </div>
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