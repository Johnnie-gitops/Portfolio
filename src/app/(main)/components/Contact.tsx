'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { ArrowUpRight, Clock, MessageCircle } from 'lucide-react'

const contacts = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+856 20 8854 2894",
    href: "https://wa.me/8562088542894",
    external: true,
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+856 20 2980 4622",
    href: "tel:+8562029804622",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mizter.johnnie@gmail.com",
    href: "mailto:mizter.johnnie@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Vientiane Capital, Lao P.D.R",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: 'easeOut' as const },
  viewport: { once: true },
})

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Contact <span className="text-blue-600 dark:text-cyan-400">Information</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with me through these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Contact Details */}
          <motion.article {...fadeUp()} className="pro-card md:col-span-3">
            <header className="flex items-center justify-between px-6 pt-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Details</h3>
                <p className="text-xs text-gray-400">Direct channels to reach me</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available
              </span>
            </header>

            <ul className="mt-4 divide-y divide-white/5">
              {contacts.map((contact) => {
                const Icon = contact.icon
                const body = (
                  <>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                        {contact.label}
                      </p>
                      <p className="truncate text-[15px] font-medium text-gray-100">{contact.value}</p>
                    </div>
                    {contact.href && (
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                    )}
                  </>
                )
                return (
                  <li key={contact.label}>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.03]"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 px-6 py-4">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.article>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {/* Reference */}
            <motion.article {...fadeUp(0.1)} className="pro-card p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                Professional Reference
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
                  KE
                </div>
                <div>
                  <h4 className="font-semibold text-white">Khamla ENG</h4>
                  <p className="text-xs text-gray-400">Reference Contact</p>
                </div>
              </div>
              <div className="my-5 h-px bg-white/5" />
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+8562055859899" className="flex items-center gap-3 text-gray-300 transition-colors hover:text-cyan-300">
                    <FaPhone className="h-3.5 w-3.5 text-gray-500" />
                    +856 20 5585 9899
                  </a>
                </li>
                <li>
                  <a href="mailto:khamlanote5@gmail.com" className="flex items-center gap-3 text-gray-300 transition-colors hover:text-cyan-300">
                    <FaEnvelope className="h-3.5 w-3.5 text-gray-500" />
                    khamlanote5@gmail.com
                  </a>
                </li>
              </ul>
            </motion.article>

            {/* Availability */}
            <motion.article {...fadeUp(0.2)} className="pro-card p-6">
              <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                Availability
              </p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Preferred channel</p>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-sm font-medium text-gray-100">Response time</p>
                    <p className="text-xs text-gray-400">Typically within 24 hours</p>
                  </div>
                </li>
              </ul>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}