'use client'

import { motion } from 'framer-motion'
import { Cpu, Shield, Cloud, Music, Activity, BookOpen, Terminal, Sparkles } from 'lucide-react'

export default function About() {
  const technicalItems = [
    {
      icon: Cpu,
      title: "System Administration & Automation",
      desc: "Linux & Windows Server administration, bash/powershell scripting, configuration management",
    },
    {
      icon: Shield,
      title: "Security & Firewall Management",
      desc: "FortiGate firewall policy, SSL/TLS certificates, network segmentation, and hardening",
    },
    {
      icon: Cloud,
      title: "Virtualization & Cloud Infrastructure",
      desc: "VMware vSphere/vSAN, Nutanix HCI, Docker containerization, and high-availability clusters",
    },
  ]

  const personalItems = [
    {
      icon: Music,
      title: "Guitar & Music Composition",
      desc: "Playing guitar and composing melodies for creative balance and focus",
    },
    {
      icon: Activity,
      title: "Fitness & Football",
      desc: "Regular workouts and team football for endurance, discipline, and stamina",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      desc: "Exploring modern cloud architecture, DevOps pipelines, and emerging tech stacks",
    },
  ]

  return (
    <section id="about" className="py-16 bg-transparent">
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
              SYS.PROFILE // ABOUT
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            My professional journey, technical philosophy, and personal interests
          </p>
        </motion.div>

        {/* Top Bio Card (Digital Minimal Dossier) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pro-card p-6 sm:p-8 mb-8"
        >
          {/* Card Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                CORE_PROFILE.SYS
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                STATUS: ACTIVE
              </span>
              <span className="hidden sm:inline text-gray-500">|</span>
              <span className="hidden sm:inline text-gray-400">SYS_ADMIN & DEVOPS</span>
            </div>
          </div>

          {/* Bio statement */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-200">
              I am a passionate IT professional with hands-on expertise in{" "}
              <span className="text-cyan-300 font-medium">systems administration</span>,{" "}
              <span className="text-cyan-300 font-medium">DevOps</span>, and enterprise infrastructure management. 
              My journey has centered around resolving complex incidents, engineering resilient virtualized environments, 
              and optimizing network and server throughput.
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Approaching every challenge with an engineering-first mindset, I bridge the gap between reliable on-premise hardware 
              and automated cloud workflows.
            </p>
          </div>

          {/* Quick Metrics / Digital Spec Strip */}
          <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-mono text-xl font-bold text-cyan-400">5+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-mono">Years Exp</div>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-mono text-xl font-bold text-emerald-400">99.9%</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-mono">Target Uptime</div>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-mono text-xl font-bold text-cyan-400">15+</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-mono">Containers</div>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="font-mono text-xl font-bold text-amber-300">5</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-mono">Certifications</div>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Split: Technical Focus & Personal Interests */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Technical Focus Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="pro-card p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 ring-1 ring-cyan-400/20">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">Technical Focus</h3>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    {"// DOMAIN_01: INFRASTRUCTURE"}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-cyan-400/70">01</span>
            </div>

            {/* List */}
            <ul className="mt-5 space-y-4 flex-1">
              {technicalItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-400/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-cyan-500/10 text-cyan-300 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.article>

          {/* Personal Interests Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="pro-card p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">Personal Interests</h3>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                    {"// DOMAIN_02: LIFESTYLE"}
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs text-emerald-400/70">02</span>
            </div>

            {/* List */}
            <ul className="mt-5 space-y-4 flex-1">
              {personalItems.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-400/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-300 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                )
              })}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  )
}