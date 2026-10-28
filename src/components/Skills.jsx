import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Code2, Database, Terminal, Check } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

const categoryIcons = {
  backend: Server,
  frontend: Code2,
  databases: Database,
  tools: Terminal,
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section className="content-section section-shell" id="skills">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">02 / TECHNICAL COMPETENCIES</span>
        <h2>
          Structured stack.
          <br />
          <span className="serif gold">Verified technologies.</span>
        </h2>
        <p className="section-subheading">
          A focused technical toolkit grounded in practical project history,
          academic training, and software development internships—presented
          without arbitrary percentages or invented metrics.
        </p>
      </motion.div>

      {/* Category filter pills for easy exploration */}
      <div className="skills-filter-row" role="tablist" aria-label="Filter skill categories">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          className={`skills-pill ${activeCategory === "all" ? "pill-active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All Areas ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
        </button>
        {skillCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            className={`skills-pill ${activeCategory === category.id ? "pill-active" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {displayedCategories.map((category, index) => {
          const IconComponent = categoryIcons[category.id] || Server;

          return (
            <motion.div
              className="skill-category-card"
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon-wrap">
                  <IconComponent size={22} className="gold" />
                </div>
                <div>
                  <span className="skill-count-tag">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                  <h3>{category.title}</h3>
                </div>
              </div>

              <p className="skill-category-desc">{category.description}</p>

              <div className="skill-tags-list">
                {category.skills.map((skill) => (
                  <span className="skill-tag-chip" key={skill}>
                    <Check size={12} className="gold" aria-hidden="true" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="skills-assurance-banner">
        <div className="assurance-dot" aria-hidden="true" />
        <p>
          <strong>Engineering Assurance:</strong> Every technology listed is
          part of my active academic coursework, software internship at
          Macrovian Technology, or hands-on development projects.
        </p>
      </div>
    </section>
  );
}
