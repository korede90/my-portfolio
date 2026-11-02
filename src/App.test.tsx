import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('Korede Oyebamiji Portfolio', () => {
  it('renders identity, professional title, and RAIN certification accurately', () => {
    render(<App />);
    expect(screen.getAllByText(/Korede Oyebamiji/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/AI & Machine Learning Developer/i).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/Robotics and Artificial Intelligence Nigeria \(RAIN\)/i).length
    ).toBeGreaterThan(0);
  });

  it('renders all four mandatory featured projects with verified details', () => {
    render(<App />);
    expect(screen.getAllByText('Naija Price AI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Financial Fraud Detection').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Face Attendance System').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Flight Price Prediction').length).toBeGreaterThan(0);
  });

  it('includes verified GitHub repository links for Face Attendance and Flight Price Prediction', () => {
    render(<App />);
    const allLinks = screen.getAllByRole('link');
    const hrefs = allLinks.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/korede90/face-attendance');
    expect(hrefs).toContain('https://github.com/korede90/Flight-price-prediction');
    expect(hrefs).toContain('https://github.com/korede90');
  });

  it('includes functional mailto and LinkedIn links', () => {
    render(<App />);
    const allLinks = screen.getAllByRole('link');
    const hrefs = allLinks.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('mailto:koredeoyebamiji68@gmail.com');
    expect(hrefs).toContain('https://www.linkedin.com/in/korede-oyebamiji-aa3a22295/');
  });

  it('completely excludes any Twitter/X links, handles, or references', () => {
    const { container } = render(<App />);
    const html = container.innerHTML.toLowerCase();
    expect(html).not.toContain('twitter.com');
    expect(html).not.toContain('x.com/');
    expect(html).not.toContain('hoyebamiji');
  });

  it('opens and closes the project details modal when clicked', () => {
    render(<App />);
    const detailButtons = screen.getAllByRole('button', {
      name: /View Project Details/i,
    });
    expect(detailButtons.length).toBe(4);

    fireEvent.click(detailButtons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/1\. The Problem/i)).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /Close project details modal/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('toggles the mobile navigation menu cleanly', () => {
    render(<App />);
    const toggleBtn = screen.getByRole('button', { name: /Open navigation menu/i });
    fireEvent.click(toggleBtn);
    expect(screen.getByRole('navigation', { name: /Mobile Navigation/i })).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /Close navigation menu/i });
    fireEvent.click(closeBtn);
    expect(
      screen.queryByRole('navigation', { name: /Mobile Navigation/i })
    ).not.toBeInTheDocument();
  });
});
