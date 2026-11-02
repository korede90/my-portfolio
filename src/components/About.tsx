import React from 'react';
import { ABOUT_TEXT, PROFILE } from '../data/portfolioData';
import { Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`border-b py-16 sm:py-20 ${
        darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: About Me */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
              About Me
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
              Focused on Practical AI &amp; Software Solutions
            </h2>

            <div className="mt-5 space-y-4">
              {ABOUT_TEXT.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm leading-relaxed sm:text-base ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certification */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 sm:p-7 ${
                darkMode
                  ? 'border-slate-800 bg-slate-900'
                  : 'border-slate-200/90 bg-white shadow-xs'
              }`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400">
                <Award className="h-5 w-5" />
              </div>

              <p className="mt-4 text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
                Education &amp; Certification
              </p>

              <h3 className="mt-1.5 text-lg font-bold tracking-tight">
                {PROFILE.certification.title}
              </h3>

              <p
                className={`mt-1 text-sm font-semibold ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {PROFILE.certification.institution}
              </p>

              <p
                className={`mt-3 text-xs leading-relaxed sm:text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {PROFILE.certification.description}
              </p>

              <ul
                className={`mt-5 space-y-2.5 border-t pt-4 text-xs sm:text-sm ${
                  darkMode
                    ? 'border-slate-800 text-slate-300'
                    : 'border-slate-100 text-slate-600'
                }`}
              >
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                  <span>Python Programming &amp; Data Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                  <span>Supervised &amp; Unsupervised Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                  <span>Computer Vision &amp; Model Deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
