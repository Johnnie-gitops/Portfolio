'use client'

import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, CheckCircle, Code2, Cpu } from 'lucide-react'

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  skills?: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Consultant",
    company: "SB Lab 856 Co., Ltd",
    period: "2020 – Present",
    responsibilities: [
      "Conducted software functionality testing, product installation, performance evaluation, and usability testing",
      "Ensured system efficiency and reliability by analyzing system performance and load balancing",
      "Collaborated with cross-functional teams to identify and resolve technical issues"
    ],
    skills: ["Testing", "Performance Analysis", "Team Collaboration"],
    achievements: [
      "Improved system reliability by 30% through performance optimizations",
      "Reduced testing time by 25% through process improvements"
    ]
  },
  {
    title: "Systems Administrator | DevOps",
    company: "S-Tech Development Co., Ltd",
    period: "2023 – 2025",
    responsibilities: [
      "Managed system administration tasks while supporting project management responsibilities",
      "Led a team to test and implement new application updates efficiently",
      "Oversaw server hardware installations, OS deployments, and Windows Server & Active Directory administration",
      "Implemented backup solutions using industry-standard software to ensure data security and recovery",
      "Configured SSL certificates and managed load balancing setups"
    ],
    skills: ["System Administration", "DevOps", "Team Leadership", "Security"],
    achievements: [
      "Implemented backup system that reduced data recovery time by 40%",
      "Led migration to new server infrastructure with zero downtime"
    ]
  },
  {
    title: "Engineer",
    company: "S-Tech Development Co., Ltd",
    period: "2022 – 2023",
    responsibilities: [
      "Installed, configured, and managed open-source and licensed software while training teams",
      "Implemented antivirus solutions (Malwarebytes Cloud Console, Kaspersky, Bitdefender)",
      "Administered Nutanix HCI including virtualization and cloud management",
      "Worked with Docker for application containerization and server management"
    ],
    skills: ["Virtualization", "Containerization", "Security Solutions"],
    achievements: [
      "Reduced security incidents by 60% through new antivirus implementation",
      "Containerized 15+ applications improving deployment efficiency"
    ]
  },
  {
    title: "Junior Engineer",
    company: "S-Tech Development Co., Ltd",
    period: "2020 – 2022",
    responsibilities: [
      "Led helpdesk support and managed ticket-based issue resolution",
      "Gained expertise in Linux and Windows command-line operations for system customization",
      "Studied networking principles and configured switches and basic infrastructure"
    ],
    skills: ["Helpdesk Support", "Linux/Windows CLI", "Networking"],
    achievements: [
      "Improved ticket resolution time by 35% through process optimization",
      "Reduced system configuration errors by 50% through standardization"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-cyan-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-cyan-400">{exp.company}</h4>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                  <CalendarDays size={16} />
                  <span>{exp.period}</span>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <Cpu size={16} className="text-blue-500 dark:text-cyan-400" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={`resp-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-500 dark:text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                {exp.skills && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <Code2 size={16} className="text-blue-500 dark:text-cyan-400" />
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={`skill-${i}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="inline-block bg-blue-50 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-blue-700 dark:text-cyan-400"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {exp.achievements && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500 dark:text-emerald-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <motion.li
                          key={`achieve-${i}`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-green-500 dark:text-emerald-400 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}