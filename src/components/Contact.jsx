import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const hasGithub = Boolean(personalInfo.githubUrl && personalInfo.githubUrl.trim() !== "");
  const hasLinkedIn = Boolean(personalInfo.linkedinUrl && personalInfo.linkedinUrl.trim() !== "");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide an email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Please enter a subject line";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please write a message of at least 10 characters";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || "Collaboration Inquiry - Samrawit Abayneh"
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section className="contact-section section-shell" id="contact">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">07 / GET IN TOUCH</span>
        <h2>
          Have an idea or opportunity?
          <br />
          <span className="serif gold">Let's connect.</span>
        </h2>
        <p className="section-subheading">
          I'm actively seeking opportunities to contribute to real-world software
          projects, learn within collaborative engineering teams, and build reliable applications.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Left Column: Direct Info Card */}
        <motion.div
          className="contact-info-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-card-top">
            <span className="brand-mark">{personalInfo.monogram}</span>
            <div>
              <h3>{personalInfo.name}</h3>
              <p className="info-role">{personalInfo.role}</p>
            </div>
          </div>

          <p className="info-statement">
            Whether you have an inquiry about my internship experience, a question
            about my projects (Betnutri &amp; ContentGuard), or a software developer
            role to discuss, my inbox is always open.
          </p>

          <div className="contact-channels">
            <div className="channel-item">
              <div className="channel-icon">
                <Mail size={18} className="gold" />
              </div>
              <div className="channel-details">
                <span className="channel-label">EMAIL ADDRESS</span>
                <a href={`mailto:${personalInfo.email}`} className="channel-value">
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="channel-action-btn"
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={15} className="gold" /> : <Copy size={15} />}
              </button>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <MapPin size={18} className="gold" />
              </div>
              <div className="channel-details">
                <span className="channel-label">LOCATION</span>
                <span className="channel-value">{personalInfo.location}</span>
              </div>
            </div>

            <div className="channel-item">
              <div className="channel-icon">
                <Sparkles size={18} className="gold" />
              </div>
              <div className="channel-details">
                <span className="channel-label">AVAILABILITY</span>
                <span className="channel-value">{personalInfo.availability}</span>
              </div>
            </div>
          </div>

          <div className="info-social-row">
            <span className="social-row-title">PROFILES:</span>
            <div className="info-social-links">
              {hasGithub ? (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon size={16} /> GitHub
                </a>
              ) : (
                <span className="social-btn-hint" title="Configurable in portfolioData.js">
                  <GitHubIcon size={16} /> GitHub (Pending URL)
                </span>
              )}

              {hasLinkedIn ? (
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              ) : (
                <span className="social-btn-hint" title="Configurable in portfolioData.js">
                  <LinkedInIcon size={16} /> LinkedIn (Pending URL)
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Honest, Validated Form */}
        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-card-header">
            <h3>Send a Message</h3>
            <span className="form-note">Client-Validated Form</span>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">
                Your Name <span className="gold">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
                placeholder="e.g. Alex Chen"
                className={errors.name ? "input-error" : ""}
                required
              />
              {errors.name && (
                <span className="field-error-msg">
                  <AlertCircle size={13} /> {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">
                Your Email Address <span className="gold">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: null });
                }}
                placeholder="e.g. alex@company.com"
                className={errors.email ? "input-error" : ""}
                required
              />
              {errors.email && (
                <span className="field-error-msg">
                  <AlertCircle size={13} /> {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">
                Subject <span className="gold">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) setErrors({ ...errors, subject: null });
                }}
                placeholder="e.g. Junior Developer Role / Project Discussion"
                className={errors.subject ? "input-error" : ""}
                required
              />
              {errors.subject && (
                <span className="field-error-msg">
                  <AlertCircle size={13} /> {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                Message <span className="gold">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: null });
                }}
                placeholder="Share project details, opportunities, or questions..."
                className={errors.message ? "input-error" : ""}
                required
              />
              {errors.message && (
                <span className="field-error-msg">
                  <AlertCircle size={13} /> {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="button-primary submit-btn">
              Prepare Message <Send size={16} />
            </button>
          </form>

          {/* Submission Feedback & Honest Backend Explanation */}
          {submitted && (
            <motion.div
              className="form-honest-feedback"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="feedback-header">
                <CheckCircle2 size={18} className="gold" />
                <strong>Form Validated Successfully</strong>
              </div>
              <p>
                <strong>Delivery Notice:</strong> As this is a static frontend
                portfolio without an integrated server-side mailer (such as
                Formspree, EmailJS, or a custom API), your message has been
                validated and packaged below. Click the button to launch your email
                client with your details pre-populated:
              </p>
              <a
                href={mailtoLink}
                className="button-primary launch-email-btn"
                target="_blank"
                rel="noreferrer"
              >
                Launch Email Client <ArrowUpRight size={16} />
              </a>
              <div className="prefilled-preview">
                <span className="preview-label">PRE-FILLED RECIPIENT:</span>
                <code>{personalInfo.email}</code>
              </div>
            </motion.div>
          )}

          <div className="form-disclaimer">
            <AlertCircle size={13} className="gold" />
            <span>
              Direct email delivery requires a configured backend service. No messages are silently simulated or dropped.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
