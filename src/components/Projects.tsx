import React, { useState } from 'react';
import { FEATURED_PROJECTS, ADDITIONAL_REPOS, PROFILE } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Eye, FolderGit2 } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

interface ProjectsProps {
  darkMode: boolean;
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_OPTIONS = [
  'All Projects',
  'Machine Learning',
  'FinTech & Risk',
  'Computer Vision',
] as const;

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onSelectProject }) => {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTER_OPTIONS)[number]>('All Projects');

  const visibleProjects =
    activeFilter === 'All Projects'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.filterTag === activeFilter);

  return (
    <section
      id="projects"
      className={`border-b py-16 sm:py-20 ${
        darkMode ? 'border-slate-800/80 bg-slate-900/40' : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Pills */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
              Featured Work
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
              Selected AI &amp; Machine Learning Projects
            </h2>
            <p
              className={`mt-2 text-sm leading-relaxed sm:text-base ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Real-world machine learning, forecasting, fraud detection, and computer vision
              applications built with Python.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter projects by category">
            {FILTER_OPTIONS.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab)}
                  className={`cursor-pointer rounded-lg px-3.5 py-2 text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-2xs'
                      : darkMode
                        ? 'border border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800'
                        : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean 2x2 Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className={`flex flex-col justify-between overflow-hidden rounded-2xl border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  : 'border-slate-200/90 bg-white shadow-xs hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Project Visual Preview */}
                <div
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                  aria-label={`View details for ${project.title}`}
                  className={`group relative h-56 w-full cursor-pointer overflow-hidden border-b p-3 ${
                    darkMode
                      ? 'border-slate-800 bg-slate-950'
                      : 'border-slate-100 bg-slate-100/70'
                  }`}
                >
                  <span
                    className={`absolute top-4 left-4 z-10 rounded-md px-2.5 py-1 text-xs font-bold shadow-xs ${
                      darkMode
                        ? 'bg-slate-900/90 text-teal-400 border border-slate-700'
                        : 'bg-white/95 text-teal-700 border border-slate-200'
                    }`}
                  >
                    {project.number}
                  </span>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span
                    className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold ${
                      darkMode
                        ? 'bg-teal-500/10 text-teal-300'
                        : 'bg-teal-50 text-teal-700'
                    }`}
                  >
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <ul className="mt-4 space-y-2">
                    {project.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-2 text-xs leading-relaxed sm:text-sm ${
                          darkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                          darkMode
                            ? 'border-slate-800 bg-slate-950 text-slate-300'
                            : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div
                className={`flex flex-wrap items-center gap-3 border-t px-6 py-4 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/50'
                    : 'border-slate-100 bg-slate-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:text-sm"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Project Details</span>
                </button>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 sm:text-sm ${
                    darkMode
                      ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <GitHubIcon className="h-4 w-4" />
                  <span>{project.repoLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Additional GitHub Repositories Strip */}
        <div
          className={`mt-12 rounded-2xl border p-6 sm:p-7 ${
            darkMode
              ? 'border-slate-800 bg-slate-900/70'
              : 'border-slate-200/90 bg-white shadow-2xs'
          }`}
        >
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <FolderGit2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <div>
                <h3 className="text-base font-bold tracking-tight">
                  More Open-Source Projects on GitHub
                </h3>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Additional computer vision, OCR, and NLP repositories on @korede90
                </p>
              </div>
            </div>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:underline dark:text-teal-400 sm:text-sm"
            >
              <span>View All Repositories</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADDITIONAL_REPOS.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between rounded-xl border p-4 transition-colors ${
                  darkMode
                    ? 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                    : 'border-slate-200/80 bg-slate-50/60 hover:border-teal-600/40 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
                  </div>
                  <p
                    className={`mt-1.5 text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {repo.description}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-200/70 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
