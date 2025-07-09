'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Software & Programming",
    skills: [
      { name: "Microsoft Office Suite", proficiency: 80 },
      { name: "Adobe Photoshop", proficiency: 35 },
      { name: "Microsoft SQL Server", proficiency: 25 },
      { name: "HTML, CSS, PHP", proficiency: 40 },
      { name: "Node JS, Express and React", proficiency: 65 },
    ]
  },
  {
    name: "Technical Expertise",
    skills: [
      { name: "Windows Server & Active Directory", proficiency: 40 },
      { name: "Linux Administration", proficiency: 82 },
      { name: "VMware HCI Core & Virtualization", proficiency: 80 },
      { name: "Docker & Containerization", proficiency: 75 },
      { name: "Firewall Management", proficiency: 85 },
    ]
  },
  {
    name: "Networking",
    skills: [
      { name: "TCP/IP Networking", proficiency: 50 },
      { name: "Load Balancing", proficiency: 85 },
      { name: "SSL Configuration", proficiency: 80 },
      { name: "IPv6 Implementation", proficiency: 70 },
    ]
  },
  {
    name: "Languages",
    skills: [
      { name: "Lao (Native)", proficiency: 100 },
      { name: "English (Professional)", proficiency: 85 },
      { name: "Thai (Conversational)", proficiency: 60 },
    ]
  }
]

export default function Skills() {
  // Function to determine progress bar color based on proficiency
  const getProgressBarColor = (proficiency: number) => {
    if (proficiency >= 90) return 'bg-gradient-to-r from-green-400 to-emerald-600';  // Expert
    if (proficiency >= 70) return 'bg-gradient-to-r from-blue-400 to-cyan-600';      // Advanced
    if (proficiency >= 50) return 'bg-gradient-to-r from-yellow-400 to-amber-500';   // Intermediate
    if (proficiency >= 30) return 'bg-gradient-to-r from-orange-400 to-red-500';     // Beginner
    return 'bg-gradient-to-r from-red-400 to-pink-500';                              // Novice
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary dark:text-cyan-400 mb-6">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ 
                          duration: 1.5, 
                          type: "spring",
                          damping: 10,
                          stiffness: 100
                        }}
                        className={`h-3 rounded-full ${getProgressBarColor(skill.proficiency)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}