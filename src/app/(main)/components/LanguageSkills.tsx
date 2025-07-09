"use client";

import { motion } from "framer-motion";

interface Language {
  name: string;
  level: string;
  proficiency: number;
  icon: string;
}

const languages: Language[] = [
  {
    name: "Lao",
    level: "Native",
    proficiency: 100,
    icon: "🇱🇦",
  },
  {
    name: "English",
    level: "Basic",
    proficiency: 40,
    icon: "🇬🇧",
  },
  {
    name: "Thai",
    level: "Conversational",
    proficiency: 80,
    icon: "🇹🇭",
  },
];

export default function LanguageSkills() {
  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 80) return "bg-emerald-500";
    if (proficiency >= 60) return "bg-blue-500";
    if (proficiency >= 40) return "bg-amber-500";
    return "bg-gray-400";
  };

  return (
    <section
      id="languages"
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Language{" "}
            <span className="text-blue-600 dark:text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The languages I communicate in, from daily conversations to
            professional settings
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 150,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50 dark:to-gray-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-6 z-10">
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-4xl mt-1">{language.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {language.name}
                    </h3>
                    <span className="inline-block px-2 py-1 mt-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-cyan-400">
                      {language.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Proficiency level
                    </span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                      {language.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.proficiency}%` }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3,
                        type: "spring",
                        damping: 10,
                      }}
                      className={`h-2.5 rounded-full ${getProficiencyColor(
                        language.proficiency
                      )}`}
                    />
                  </div>
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
            * Proficiency levels based on self-assessment and practical usage
          </p>
        </motion.div>
      </div>
    </section>
  );
}
