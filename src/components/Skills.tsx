import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`border-b py-16 sm:py-20 ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
            Skills &amp; Technologies
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
            Technical Toolkit
          </h2>
          <p
            className={`mt-2 text-sm leading-relaxed sm:text-base ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Core languages, machine learning libraries, and web frameworks I use to build and
            deploy projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl border p-6 ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/70'
                  : 'border-slate-200/90 bg-slate-50/50 shadow-2xs'
              }`}
            >
              <h3 className="text-base font-bold tracking-tight sm:text-lg">
                {group.title}
              </h3>
              <p
                className={`mt-1 text-xs sm:text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {group.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold sm:text-sm ${
                      darkMode
                        ? 'border-slate-800 bg-slate-950 text-slate-200'
                        : 'border-slate-200/90 bg-white text-slate-800 shadow-2xs'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
