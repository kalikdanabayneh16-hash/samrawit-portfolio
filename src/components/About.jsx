import { motion } from "framer-motion";
import { Database, Server, Cpu, CheckCircle2, BookOpen } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  const corePillars = [
    {
      icon: Server,
      title: "Backend Curiosity",
      desc: "Delving into server lifecycles, routing mechanics, middleware, and secure RESTful endpoint construction.",
    },
    {
      icon: Database,
      title: "Relational Modeling",
      desc: "Architecting normalized database schemas, establishing foreign-key constraints, and writing efficient queries in PostgreSQL.",
    },
    {
      icon: Cpu,
      title: "System Fundamentals",
      desc: "Grounded by Computer Science studies at Hawassa University, prioritizing time complexity and data structures.",
    },
  ];

  return (
    <section className="content-section section-shell" id="about">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
        <h2>
          Curious mind.
          <br />
          <span className="serif gold">Purposeful engineering.</span>
        </h2>
      </motion.div>

      <div className="about-editorial-grid">
        <div className="about-narrative">
          <p className="about-lead">{personalInfo.aboutLead}</p>

          <div className="about-paragraphs">
            <p>
              I am a final-year Computer Science student at{" "}
              <strong>Hawassa University</strong> with a drive to understand
              software from first principles. Rather than settling for superficial
              implementation, my interest has always been unpacking what happens
              under the hood: how HTTP requests travel through router middleware,
              how database query planners execute across tables, and how
              authentication tokens safeguard user sessions.
            </p>

            <p>
              My learning path bridges robust backend architecture with modern
              React frontends. Over the course of my coursework, self-directed
              projects, and software internship at Macrovian Technology, I have
              focused on <strong>REST API development</strong>,{" "}
              <strong>relational database design</strong>, and building
              structured administrative workflows that solve practical problems.
            </p>

            <p>
              When faced with bugs or complex features, my philosophy is to
              diagnose methodically: reading logs, verifying network payloads,
              and tracing logic to its root cause rather than copying quick
              snippets. I believe that engineering discipline, thoughtful
              database design, and continuous practice are the keystones to
              growing into an impactful software developer.
            </p>
          </div>

          <div className="about-principles">
            <div className="principle-item">
              <CheckCircle2 size={18} className="gold" />
              <span>Understand <em>why</em> solutions work before shipping them</span>
            </div>
            <div className="principle-item">
              <CheckCircle2 size={18} className="gold" />
              <span>Prioritize relational integrity and defensive API design</span>
            </div>
            <div className="principle-item">
              <CheckCircle2 size={18} className="gold" />
              <span>Continuously learn through hands-on, practical applications</span>
            </div>
          </div>
        </div>

        <div className="about-highlights-col">
          <div className="about-pillars-stack">
            {corePillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div className="pillar-card" key={pillar.title}>
                  <div className="pillar-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="pillar-info">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="academic-badge-card">
            <div className="academic-badge-top">
              <BookOpen size={18} className="gold" />
              <span className="badge-kicker">ACADEMIC PATH</span>
            </div>
            <h3>Hawassa University</h3>
            <p className="academic-dept">Department of Computer Science</p>
            <p className="academic-note">
              Final-year BSc candidate focusing on algorithms, database systems,
              operating systems, and software engineering principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
