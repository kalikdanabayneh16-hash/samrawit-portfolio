import { ArrowUp, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const hasGithub = Boolean(personalInfo.githubUrl && personalInfo.githubUrl.trim() !== "");
  const hasLinkedIn = Boolean(personalInfo.linkedinUrl && personalInfo.linkedinUrl.trim() !== "");

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#philosophy", label: "Perspective" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="site-footer-wrapper">
      <div className="section-shell footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="brand" href="#home" aria-label="Back to Top">
              <span className="brand-mark">{personalInfo.monogram}</span>
              <span className="brand-text">
                SAMRAWIT<span className="gold">.DEV</span>
              </span>
            </a>
            <p className="footer-tagline">
              Computer Science student at Hawassa University and aspiring software developer.
              Building digital solutions through thoughtful backend engineering and clean React architecture.
            </p>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <div className="footer-nav-grid">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-connect-col">
            <span className="footer-col-title">CONNECT</span>
            <div className="footer-social-list">
              {hasGithub ? (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <GitHubIcon size={14} /> GitHub
                </a>
              ) : (
                <a href="#contact" className="footer-social-link">
                  <GitHubIcon size={14} /> GitHub
                </a>
              )}

              {hasLinkedIn ? (
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                >
                  <LinkedInIcon size={14} /> LinkedIn
                </a>
              ) : (
                <a href="#contact" className="footer-social-link">
                  <LinkedInIcon size={14} /> LinkedIn
                </a>
              )}

              <a href={`mailto:${personalInfo.email}`} className="footer-social-link">
                <Terminal size={14} className="gold" /> Email Direct
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 {personalInfo.name}. Built with React &amp; Vite. Designed with intention.
          </span>
          <span className="footer-subtext">
            HAWASSA UNIVERSITY · COMPUTER SCIENCE
          </span>
          <a href="#home" className="back-to-top" aria-label="Scroll back to top">
            BACK TO TOP <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
