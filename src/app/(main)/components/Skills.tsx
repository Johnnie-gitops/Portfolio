'use client'

import { motion } from 'framer-motion'
import { Code2, ServerCog, Network, type LucideIcon } from 'lucide-react'

interface SkillCategory {
  name: string;
  description: string;
  icon: LucideIcon;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Software",
    description: "Applications & development",
    icon: Code2,
    skills: [
      { name: "Microsoft Office", proficiency: 80 },
      { name: "Adobe Photoshop", proficiency: 35 },
      { name: "SQL Server", proficiency: 25 },
      { name: "HTML/CSS/PHP", proficiency: 40 },
      { name: "Node/React", proficiency: 65 },
    ]
  },
  {
    name: "Technical",
    description: "Systems & infrastructure",
    icon: ServerCog,
    skills: [
      { name: "Windows Server", proficiency: 40 },
      { name: "Linux Admin", proficiency: 82 },
      { name: "VMware", proficiency: 80 },
      { name: "Docker", proficiency: 75 },
      { name: "Firewalls", proficiency: 85 },
    ]
  },
  {
    name: "Networking",
    description: "Protocols & security",
    icon: Network,
    skills: [
      { name: "TCP/IP", proficiency: 50 },
      { name: "Load Balancing", proficiency: 85 },
      { name: "SSL", proficiency: 80 },
      { name: "IPv6", proficiency: 70 },
    ]
  }
]

const getLevel = (proficiency: number) => {
  if (proficiency >= 80) return { label: 'Expert', className: 'text-emerald-300 bg-emerald-400/10 ring-emerald-400/20' }
  if (proficiency >= 60) return { label: 'Advanced', className: 'text-cyan-300 bg-cyan-400/10 ring-cyan-400/20' }
  if (proficiency >= 40) return { label: 'Intermediate', className: 'text-sky-300 bg-sky-400/10 ring-sky-400/20' }
  return { label: 'Basic', className: 'text-gray-300 bg-white/5 ring-white/10' }
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Technical <span className="text-blue-600 dark:text-cyan-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional skills and competencies
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillsData.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, margin: "-50px" }}
                className="pro-card p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                  <span className="ml-auto font-mono text-xs text-gray-500">
                    {String(category.skills.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="my-5 h-px bg-white/5" />

                {/* Skills */}
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const level = getLevel(skill.proficiency)
                    return (
                      <li key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                          <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ring-1 ${level.className}`}>
                            {level.label}
                          </span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.15 + skillIndex * 0.06, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                          />
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            * Proficiency levels based on professional experience and self-assessment
          </p>
        </motion.div>
      </div>
    </section>
  )
}