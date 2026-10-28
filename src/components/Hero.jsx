import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Sparkles, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const hasGithub = Boolean(personalInfo.githubUrl && personalInfo.githubUrl.trim() !== "");
  const hasLinkedIn = Boolean(personalInfo.linkedinUrl && personalInfo.linkedinUrl.trim() !== "");

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            <span>{personalInfo.tagline}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-name">{personalInfo.name}</span>
            <span className="hero-headline-sub">
              Building useful <br />
              software through <br />
              <span className="serif gold">thoughtful engineering.</span>
            </span>
          </h1>

          <p className="hero-description">{personalInfo.bio}</p>

          <div className="hero-opportunity-badge">
            <span className="badge-pulse" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </div>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore My Work <ArrowRight size={17} />
            </a>
            <a className="button-secondary" href="#about">
              About Me <ArrowDown size={16} />
            </a>
            <a className="button-secondary hero-contact-btn" href="#contact">
              Contact Me <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social Links Row - Shown cleanly; hides empty external links without fabricating URLs */}
          <div className="social-links">
            {hasGithub ? (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={16} /> GitHub
              </a>
            ) : (
              <a href="#contact" className="social-link-hint" title="GitHub link available upon request">
                <GitHubIcon size={16} /> GitHub <span className="social-tag">via Contact</span>
              </a>
            )}

            <span className="social-divider" aria-hidden="true" />

            {hasLinkedIn ? (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={16} /> LinkedIn
              </a>
            ) : (
              <a href="#contact" className="social-link-hint" title="LinkedIn link available upon request">
                <LinkedInIcon size={16} /> LinkedIn <span className="social-tag">via Contact</span>
              </a>
            )}

            <span className="social-divider" aria-hidden="true" />

            <span className="social-location">
              <Terminal size={14} className="gold" /> Hawassa University
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          aria-hidden="true"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="visual-topline">
            <span>PURPOSEFUL ENGINEERING</span>
            <Sparkles size={16} />
          </div>

          <div className="monogram">
            {personalInfo.monogram}
            <span>.</span>
          </div>

          <div className="visual-bottomline">
            <Code2 size={18} />
            <div>
              <span className="visual-label">CURRENT FOCUS</span>
              <strong>Backend Architecture · REST APIs · React</strong>
            </div>
          </div>

          <span className="floating-tag tag-top">{"<backend-engineer />"}</span>
          <span className="floating-tag tag-bottom">DATABASE & API DESIGN</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span>SCROLL TO DISCOVER</span>
        <span className="scroll-line" />
        <span>01 — 06</span>
      </motion.div>
    </section>
  );
}
