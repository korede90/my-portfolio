import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className={`border-b py-16 sm:py-20 ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
              Get in Touch
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p
              className={`mt-3 text-sm leading-relaxed sm:text-base ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              I am open to full-time roles, internships, freelance projects, and technical
              collaborations in Python, data analysis, and machine learning. Reach out directly
              via email or LinkedIn.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              >
                <Mail className="h-4 w-4" />
                <span>Send an Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-teal-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Clean Contact Links */}
          <div className="space-y-3.5 lg:col-span-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className={`group flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:border-teal-500/50'
                  : 'border-slate-200/90 bg-slate-50/60 hover:border-teal-600/40 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <p className="truncate text-sm font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    {PROFILE.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60" />
            </a>

            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:border-teal-500/50'
                  : 'border-slate-200/90 bg-slate-50/60 hover:border-teal-600/40 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400">
                  <LinkedInIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    LinkedIn
                  </p>
                  <p className="truncate text-sm font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    linkedin.com/in/korede-oyebamiji-aa3a22295
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60" />
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:border-teal-500/50'
                  : 'border-slate-200/90 bg-slate-50/60 hover:border-teal-600/40 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400">
                  <GitHubIcon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    GitHub
                  </p>
                  <p className="truncate text-sm font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">
                    github.com/korede90
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
