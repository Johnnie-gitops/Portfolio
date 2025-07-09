'use client'

import { motion } from 'framer-motion'

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
  const cardGradients = [
    'from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-800',
    'from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800',
    'from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800',
    'from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-800'
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`bg-gradient-to-br ${cardGradients[index % cardGradients.length]} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-cyan-400">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-medium text-dark dark:text-white">
                    {exp.company}
                  </h4>
                </div>
                <span className="text-gray-600 dark:text-gray-300 mt-2 md:mt-0 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2 pl-5">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={`resp-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="text-gray-700 dark:text-gray-300 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary dark:before:bg-cyan-400 pl-4"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {exp.skills && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Skills Applied:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={`skill-${i}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="inline-block bg-white/70 dark:bg-gray-800/70 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {exp.achievements && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2 pl-5">
                      {exp.achievements.map((item, i) => (
                        <motion.li
                          key={`achieve-${i}`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                          viewport={{ once: true }}
                          className="text-gray-700 dark:text-gray-300 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-green-500 dark:before:bg-emerald-400 pl-4"
                        >
                          {item}
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