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
    return 'bg-red-500';
  }

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional skills and competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-5 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-5 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl mt-1">{skill.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className={`h-2 rounded-full ${getProgressColor(skill.proficiency)}`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <span>📈</span> Skill Progression
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.flatMap(category => category.skills).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(skill.proficiency)}`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {skill.proficiency}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}