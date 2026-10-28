import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import { experience } from "../data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section className="content-section section-shell" id="experience">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">04 / PRACTICAL EXPERIENCE</span>
        <h2>
          Engineering in practice.
          <br />
          <span className="serif gold">Industry internship.</span>
        </h2>
        <p className="section-subheading">
          Hands-on software development experience gained in an engineering team,
          focusing on backend API architecture, database integrity, and administrative workflows.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <motion.div
            className="experience-card"
            key={item.organization}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="experience-header-grid">
              <div className="experience-badge-block">
                <div className="exp-icon-box">
                  <Briefcase size={22} className="gold" />
                </div>
                <div>
                  <span className="exp-org-kicker">ORGANIZATION</span>
                  <h3 className="experience-org">{item.organization}</h3>
                </div>
              </div>

              <div className="experience-meta-tags">
                <span className="exp-meta-chip">
                  <Calendar size={13} className="gold" />
                  {item.period}
                </span>
                <span className="exp-meta-chip">
                  <MapPin size={13} className="gold" />
                  {item.location}
                </span>
              </div>
            </div>

            <div className="experience-role-line">
              <span className="role-title">{item.role}</span>
            </div>

            <p className="experience-summary">{item.summary}</p>

            <div className="experience-body-columns">
              <div className="exp-column">
                <h4 className="exp-subheading">
                  <Layers size={15} className="gold" />
                  Core Work Areas &amp; Technical Scope
                </h4>
                <ul className="exp-bullets">
                  {item.workAreas.map((area) => (
                    <li key={area}>
                      <span className="bullet-dot gold-bg" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-column">
                <h4 className="exp-subheading">
                  <CheckCircle2 size={15} className="gold" />
                  Engineering Responsibilities
                </h4>
                <ul className="exp-bullets">
                  {item.responsibilities.map((resp) => (
                    <li key={resp}>
                      <span className="bullet-dot gold-bg" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience-learning-callout">
              <div className="learning-callout-header">
                <ShieldCheck size={16} className="gold" />
                <span>KEY LEARNINGS &amp; PROFESSIONAL TAKEAWAYS</span>
              </div>
              <ul className="learning-list">
                {item.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
