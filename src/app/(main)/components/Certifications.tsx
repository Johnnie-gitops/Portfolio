"use client";

import { motion } from "framer-motion";
import { Server, Shield, Lock, Globe, BarChart2 } from "lucide-react"; // Removed unused Key import

interface Certification {
  title: string;
  date: string;
  location?: string;
  icon: React.ReactNode;
  organization?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "VMware HCI Core Fast Track vSphere8/vSAN8 OSA/ESA",
      organization: "ITIKZ",
      date: "November 2023",
      location: "Thailand",
      icon: <Server className="w-5 h-5" />,
    },
    {
      title: "FortiGate Firewall Basic & Administrator",
      organization: "Siam Networker",
      date: "February 2025",
      location: "Thailand",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      title: "FortiGate Firewall Advanced & Troubleshooting",
      organization: "Siam Networker",
      date: "February 2025",
      location: "Thailand",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: "IPv6 Security Tutorial",
      organization: "APNIC",
      date: "April 2025",
      location: "Lao PDR",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Mobile Data Collection and Visualization",
      organization: "KSV Academy",
      date: "May 2024",
      location: "Lao PDR",
      icon: <BarChart2 className="w-5 h-5" />,
    },
    // Uncomment if you want to include this certification
    // {
    //   title: "Lao Digital Week",
    //   organization: "IPv6 Security Tutorial",
    //   date: "May 2025",
    //   location: "Lao PDR",
    //   icon: <Key className="w-5 h-5" />,
    // },
  ];

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section
      id="certifications"
      className="py-16 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Professional{" "}
            <span className="text-blue-600 dark:text-cyan-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My validated technical qualifications and specialized training
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="cert-card group flex flex-col p-7"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200/80">
                  Certificate
                </span>
                <span className="font-mono text-[10px] tracking-widest text-gray-500">
                  No. {pad(index)}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-serif text-xl leading-snug text-white">
                {cert.title}
              </h3>

              {cert.organization && (
                <p className="mt-3 text-sm text-gray-400">
                  <span className="italic">Issued by</span>{" "}
                  <span className="font-medium text-gray-200">{cert.organization}</span>
                </p>
              )}

              {/* Divider */}
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200/25" />
                  <span className="h-1.5 w-1.5 rotate-45 border border-amber-200/50" />
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200/25" />
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-end justify-between gap-4">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
                    <dt className="uppercase tracking-wider text-[10px] text-gray-500">Date</dt>
                    <dt className="uppercase tracking-wider text-[10px] text-gray-500">
                      {cert.location ? "Location" : ""}
                    </dt>
                    <dd className="text-gray-200">{cert.date}</dd>
                    <dd className="text-gray-200">{cert.location}</dd>
                  </dl>

                  {/* Seal */}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-amber-200/40 text-amber-200 transition-colors group-hover:border-amber-200/80">
                    <span className="absolute inset-1 rounded-full border border-dashed border-amber-200/25" />
                    {cert.icon}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            * All certifications verified through official training programs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
