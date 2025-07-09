"use client";

import { motion } from "framer-motion";
import { Server, Shield, Lock, Globe, BarChart2, Key } from "lucide-react";

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
    // {
    //   title: "Lao Digital Week",
    //   organization: "IPv6 Security Tutorial",
    //   date: "May 2025",
    //   location: "Lao PDR",
    //   icon: <Key className="w-5 h-5" />,
    // },
  ];

  const getDateColor = (date: string) => {
    const currentDate = new Date();
    const certDate = new Date(date);
    const diffTime = currentDate.getTime() - certDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 180) return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400";
    if (diffDays < 365) return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400";
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  };

  return (
    <section
      id="certifications"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
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
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 dark:to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-5 z-10 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-cyan-400 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight">
                      {cert.title}
                    </h3>
                    {cert.organization && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {cert.organization}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Obtained
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDateColor(cert.date)}`}>
                      {cert.date}
                    </span>
                  </div>
                  
                  {cert.location && (
                    <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{cert.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
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