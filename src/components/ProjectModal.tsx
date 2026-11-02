import React, { useEffect, useState } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  darkMode: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  darkMode,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] ?? {
    src: project.image,
    alt: project.imageAlt,
    caption: project.shortDescription,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Panel */}
      <div
        className={`relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${
          darkMode
            ? 'border-slate-800 bg-slate-900 text-slate-100'
            : 'border-slate-200 bg-white text-slate-900'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-start justify-between gap-4 border-b px-6 py-4 ${
            darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-100 bg-slate-50/70'
          }`}
        >
          <div>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
              Project {project.number} · {project.category}
            </span>
            <h2 id="modal-project-title" className="mt-0.5 text-xl font-bold sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details modal"
            className={`inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border transition-colors ${
              darkMode
                ? 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="space-y-6 overflow-y-auto p-6">
          {/* Preview Image & Gallery Switcher */}
          <div>
            {project.gallery.length > 1 && (
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Project Visuals ({activeImageIndex + 1} of {project.gallery.length})
                </span>
                <div className="flex gap-1.5">
                  {project.gallery.map((item, idx) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`cursor-pointer rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                        activeImageIndex === idx
                          ? 'bg-teal-600 text-white'
                          : darkMode
                            ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      View {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div
              className={`overflow-hidden rounded-xl border p-3 ${
                darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-80 w-full rounded-lg object-contain"
              />
              {currentImage.caption && (
                <p
                  className={`mt-2 text-center text-xs ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {currentImage.caption}
                </p>
              )}
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              className={`rounded-xl border p-4 ${
                darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50/70'
              }`}
            >
              <h3 className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
                1. The Problem
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {project.problem}
              </p>
            </div>

            <div
              className={`rounded-xl border p-4 ${
                darkMode ? 'border-slate-800 bg-slate-950/60' : 'border-slate-200 bg-slate-50/70'
              }`}
            >
              <h3 className="text-xs font-bold tracking-wider text-teal-600 uppercase dark:text-teal-400">
                2. What I Built
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold">Key Features</h3>
            <ul className="mt-3 space-y-2.5">
              {project.keyFeatures.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-bold">Technologies Used</h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-lg border px-3 py-1 text-xs font-semibold ${
                    darkMode
                      ? 'border-slate-700 bg-slate-800 text-slate-200'
                      : 'border-slate-200 bg-slate-100 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-between gap-3 border-t px-6 py-4 ${
            darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-100 bg-slate-50/70'
          }`}
        >
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-700 sm:text-sm"
          >
            <GitHubIcon className="h-4 w-4" />
            <span>{project.repoLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className={`cursor-pointer rounded-lg border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
              darkMode
                ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
