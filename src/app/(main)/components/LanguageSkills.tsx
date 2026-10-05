"use client";

import { motion } from "framer-motion";
import "flag-icons/css/flag-icons.min.css";

interface Language {
  name: string;
  nativeName: string;
  level: string;
  proficiency: number;
  countryCode: string; // ISO 3166-1 alpha-2 for flag-icons
}

const languages: Language[] = [
  {
    name: "Lao",
    nativeName: "ພາສາລາວ",
    level: "Native",
    proficiency: 100,
    countryCode: "la",
  },
  {
    name: "Thai",
    nativeName: "ภาษาไทย",
    level: "Conversational",
    proficiency: 80,
    countryCode: "th",
  },
  {
    name: "English",
    nativeName: "English",
    level: "Basic",
    proficiency: 40,
    countryCode: "gb",
  },
];

const SEGMENTS = 5;

export default function LanguageSkills() {
  return (
    <section id="languages" className="py-16 bg-transparent">
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

        <div className="grid gap-6 md:grid-cols-3">
          {languages.map((language, index) => {
            const filled = Math.round((language.proficiency / 100) * SEGMENTS);
            return (
              <motion.article
                key={language.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="pro-card p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <span
                    className={`fi fi-${language.countryCode} fis !w-11 !h-11 rounded-lg ring-1 ring-white/10 shadow-md`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {language.name}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">{language.nativeName}</p>
                  </div>
                </div>

                <div className="my-5 h-px bg-white/5" />

                {/* Level */}
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                    Level
                  </span>
                  <span className="text-sm font-semibold text-cyan-300">{language.level}</span>
                </div>

                {/* Segmented meter */}
                <div
                  className="mt-3 grid gap-1.5"
                  style={{ gridTemplateColumns: `repeat(${SEGMENTS}, minmax(0, 1fr))` }}
                  role="meter"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={language.proficiency}
                  aria-label={`${language.name} proficiency`}
                >
                  {Array.from({ length: SEGMENTS }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                      className={`h-1.5 origin-left rounded-full ${
                        i < filled
                          ? "bg-gradient-to-r from-cyan-400 to-sky-500"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </motion.article>
            );
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
            * Proficiency levels based on self-assessment and practical usage
          </p>
        </motion.div>
      </div>
    </section>
  );
}
