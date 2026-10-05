'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CheckCircle2, Terminal, Code2 } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      id: "EDU_01",
      degree: "Bachelor of Electronic Engineering",
      institution: "National University of Laos",
      year: "2015 — 2019",
      status: "GRADUATED",
      location: "Vientiane Capital, Lao PDR",
      description: "Rigorous curriculum emphasizing electronic circuits, digital logic architectures, signal processing, and microprocessor system control.",
      courses: [
        "Electronic Circuits", 
        "Digital Systems", 
        "Signal Processing",
        "Control Systems",
        "Microprocessors"
      ],
      achievements: [
        "Completed degree program in standard duration with strong lab proficiency",
        "Practical engineering experience in hardware circuit design and troubleshooting"
      ]
    },
    {
      id: "EDU_02",
      degree: "English for Profession",
      institution: "Romeo English Academy",
      year: "2018 — 2020",
      status: "COMPLETED",
      location: "Vientiane Capital, Lao PDR",
      description: "Advanced professional English curriculum specializing in technical writing, engineering presentations, and international team communication.",
      courses: [
        "Technical Writing", 
        "Professional Communication", 
        "Presentation Skills",
        "Business English"
      ],
      achievements: [
        "Elevated cross-border technical collaboration and documentation fluency",
        "Specialized vocabulary for IT infrastructure, system specs, and manuals"
      ]
    }
  ]

  return (
    <section id="education" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              ACADEMIC_RECORD // EDUCATION
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Education <span className="text-cyan-400">Background</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            My academic credentials, core technical competencies, and training
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ 
                duration: 0.45,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="pro-card p-6 sm:p-8 relative"
            >
              {/* Card Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/5">
                <div className="flex items-center gap-2.5 font-mono text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span className="text-cyan-300 font-semibold">{item.id}</span>
                  <span className="text-gray-500">{"//"}</span>
                  <span className="text-gray-400 uppercase tracking-wider">{item.status}</span>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-gray-300 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Title & Organization */}
              <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-300">
                      <span className="text-cyan-300 font-medium">{item.institution}</span>
                      <span className="text-gray-500 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5 pl-4 border-l-2 border-cyan-400/30 text-sm text-gray-300 leading-relaxed">
                {item.description}
              </div>

              {/* Detail Grid: Subjects & Achievements */}
              <div className="mt-6 pt-5 border-t border-white/5 grid gap-6 md:grid-cols-2">
                {/* Subjects */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                    Key Subjects Studied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-2.5 py-1 rounded border border-cyan-400/15 bg-cyan-400/5 text-cyan-200/90 hover:border-cyan-400/40 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Key Milestones
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}