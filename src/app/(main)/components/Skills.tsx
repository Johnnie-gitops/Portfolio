'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    proficiency: number;
    icon: string;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Software",
    icon: "💻",
    skills: [
      { name: "Microsoft Office", proficiency: 80, icon: "📊" },
      { name: "Adobe Photoshop", proficiency: 35, icon: "🎨" },
      { name: "SQL Server", proficiency: 25, icon: "🗃️" },
      { name: "HTML/CSS/PHP", proficiency: 40, icon: "🌐" },
      { name: "Node/React", proficiency: 65, icon: "⚛️" },
    ]
  },
  {
    name: "Technical",
    icon: "🛠️",
    skills: [
      { name: "Windows Server", proficiency: 40, icon: "🪟" },
      { name: "Linux Admin", proficiency: 82, icon: "🐧" },
      { name: "VMware", proficiency: 80, icon: "🖥️" },
      { name: "Docker", proficiency: 75, icon: "🐳" },
      { name: "Firewalls", proficiency: 85, icon: "🛡️" },
    ]
  },
  {
    name: "Networking",
    icon: "🌐",
    skills: [
      { name: "TCP/IP", proficiency: 50, icon: "📡" },
      { name: "Load Balancing", proficiency: 85, icon: "⚖️" },
      { name: "SSL", proficiency: 80, icon: "🔒" },
      { name: "IPv6", proficiency: 70, icon: "6️⃣" },
    ]
  }
]

export default function Skills() {
  const getProgressColor = (proficiency: number) => {
    if (proficiency >= 80) return 'bg-emerald-500';
    if (proficiency >= 60) return 'bg-blue-500';
    if (proficiency >= 40) return 'bg-amber-500';
    return 'bg-gray-400';
  }

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
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

        <div className="grid gap-8 md:grid-cols-3">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5,
                delay: catIndex * 0.15,
                type: "spring",
                stiffness: 150
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-2xl mt-1">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.3,
                              type: "spring",
                              damping: 10
                            }}
                            className={`h-2.5 rounded-full ${getProgressColor(skill.proficiency)}`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            * Proficiency levels based on professional experience and self-assessment
          </p>
        </motion.div>
      </div>
    </section>
  )
}