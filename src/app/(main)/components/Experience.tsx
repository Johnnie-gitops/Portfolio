'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Terminal, CheckCircle2, Cpu } from 'lucide-react'

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  skills: string[];
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "LOG_01",
    title: "Consultant",
    company: "SB Lab 856 Co., Ltd",
    period: "2020 – Present",
    isCurrent: true,
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
    id: "LOG_02",
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
    id: "LOG_03",
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
    id: "LOG_04",
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
    <section id="experience" className="py-16 bg-transparent">
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
              CAREER_LOG // WORK_EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Professional track record in systems administration, engineering, and infrastructure
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 md:border-cyan-500/20 ml-2 md:ml-4 pl-6 md:pl-8 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Timeline Node */}
              <div 
                className={`absolute -left-[31px] md:-left-[39px] top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${
                  exp.isCurrent 
                    ? "border-emerald-400 bg-gray-950 shadow-[0_0_12px_rgba(52,211,153,0.8)]" 
                    : "border-cyan-400/60 bg-gray-950"
                }`}
              >
                {exp.isCurrent && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>

              {/* Experience Card */}
              <article className="pro-card p-6 sm:p-8">
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/5">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="text-cyan-300 font-semibold">{exp.id}</span>
                    <span className="text-gray-500">{"//"}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>

                  {exp.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/25">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE_ROLE
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-gray-500 uppercase">
                      VERIFIED_RECORD
                    </span>
                  )}
                </div>

                {/* Job Title & Company */}
                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-medium text-cyan-300">{exp.company}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-cyan-400" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <ChevronRight className="h-4 w-4 text-cyan-400/70 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills & Achievements split */}
                <div className="mt-6 pt-5 border-t border-white/5 grid gap-6 md:grid-cols-2">
                  {/* Skills Applied */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="font-mono text-xs px-2.5 py-1 rounded border border-white/10 bg-white/[0.02] text-gray-300 hover:border-cyan-400/30 hover:text-cyan-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Impact & Milestones
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}