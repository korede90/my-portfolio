import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface FooterProps {
  darkMode: boolean;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`py-10 ${
        darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-50 text-slate-600'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {PROFILE.fullName}
            </p>
            <p className="mt-0.5 text-xs">{PROFILE.title}</p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            >
              <GitHubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Mail className="h-4 w-4" />
              <span>{PROFILE.email}</span>
            </a>
          </div>
        </div>

        <div
          className={`mt-6 flex flex-col justify-between gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center ${
            darkMode ? 'border-slate-800/80' : 'border-slate-200/80'
          }`}
        >
          <p>
            &copy; {CURRENT_YEAR} {PROFILE.fullName}. All rights reserved.
          </p>
          <p>Certified AI &amp; ML Developer — RAIN</p>
        </div>
      </div>
    </footer>
  );
};
