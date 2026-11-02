import React from 'react';
import { ArrowRight, Mail, Award, BrainCircuit, Database, Code2, Eye, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { PROFILE, WHAT_I_DO } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
}

const ICONS = [BrainCircuit, Database, Code2, Eye];

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`relative overflow-hidden border-b py-14 sm:py-20 ${
        darkMode
          ? 'border-slate-800/80 bg-slate-950'
          : 'border-slate-200/80 bg-gradient-to-b from-teal-50/35 via-slate-50/50 to-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Clear Recruiter-Ready Introduction */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-semibold ${
                  darkMode
                    ? 'border-teal-500/30 bg-teal-500/10 text-teal-300'
                    : 'border-teal-600/20 bg-teal-50 text-teal-800'
                }`}
              >
                <Award className="h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                <span>Certified AI &amp; ML Developer — RAIN</span>
              </span>

              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-300'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <MapPin className="h-3 w-3 opacity-70" />
                <span>{PROFILE.location}</span>
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:leading-[1.13]">
              {PROFILE.fullName}
              <span className="mt-2 block text-2xl font-bold text-teal-600 sm:text-4xl dark:text-teal-400">
                {PROFILE.title}
              </span>
            </h1>

            <p
              className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {PROFILE.tagline} {PROFILE.summary}
            </p>

            {/* Primary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Social & Contact Strip */}
            <div
              className={`mt-8 flex flex-wrap items-center gap-6 border-t pt-6 text-xs font-medium sm:text-sm ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}
            >
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>github.com/korede90</span>
              </a>

              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
              >
                <Mail className="h-4 w-4" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean 2x2 "What I Build" Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHAT_I_DO.map((service, idx) => {
                const IconComponent = ICONS[idx % ICONS.length];
                return (
                  <div
                    key={service.title}
                    className={`rounded-2xl border p-5 transition-all ${
                      darkMode
                        ? 'border-slate-800 bg-slate-900/90 hover:border-slate-700'
                        : 'border-slate-200/90 bg-white shadow-xs hover:border-teal-600/30 hover:shadow-md'
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h2 className="mt-3.5 text-sm font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p
                      className={`mt-1.5 text-xs leading-relaxed ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
