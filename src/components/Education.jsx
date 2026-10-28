import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CheckCircle2, Award } from "lucide-react";
import { education } from "../data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Education() {
  return (
    <section className="content-section section-shell" id="education">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">05 / ACADEMIC BACKGROUND</span>
        <h2>
          Foundational rigor.
          <br />
          <span className="serif gold">Computer Science degree.</span>
        </h2>
        <p className="section-subheading">
          Academic foundation rooted in core computing principles, algorithmic
          thinking, database systems, and software engineering methodologies.
        </p>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="education-header">
          <div className="edu-icon-badge">
            <GraduationCap size={28} className="gold" />
          </div>
          <div className="edu-header-titles">
            <span className="edu-degree-tag">{education.program}</span>
            <h3 className="edu-institution">{education.institution}</h3>
            <p className="edu-department">{education.department}</p>
          </div>
          <div className="edu-status-pill">
            <span className="status-indicator-dot" aria-hidden="true" />
            <span>{education.academicStatus}</span>
          </div>
        </div>

        <div className="education-content-grid">
          <div className="edu-statement-col">
            <h4 className="edu-col-title">
              <Award size={15} className="gold" />
              Academic Perspective
            </h4>
            <p className="edu-statement-text">{education.statement}</p>

            <div className="academic-status-box">
              <span className="academic-status-label">CURRENT STATUS</span>
              <p>
                Enrolled as a <strong>final-year student</strong> in the Department
                of Computer Science, actively applying classroom concepts to
                real-world systems engineering and modern web technologies.
              </p>
            </div>
          </div>

          <div className="edu-coursework-col">
            <h4 className="edu-col-title">
              <BookOpen size={15} className="gold" />
              Core Computing &amp; Coursework Focus
            </h4>
            <p className="coursework-desc">
              Foundational subjects shaping my approach to clean system design and problem solving:
            </p>

            <ul className="coursework-list">
              {education.focusAreas.map((course) => (
                <li key={course}>
                  <CheckCircle2 size={14} className="gold" aria-hidden="true" />
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
