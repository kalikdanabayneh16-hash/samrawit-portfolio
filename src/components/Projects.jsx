import { motion } from "framer-motion";
import {
  Layers3,
  Server,
  Code2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Database,
  ExternalLink,
} from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "../data/portfolioData";

const projectIcons = {
  betnutri: Layers3,
  contentguard: Server,
  portfolio: Code2,
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section className="content-section work-section" id="projects">
      <div className="section-shell">
        <motion.div
          className="work-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <div>
            <span className="section-kicker">03 / SELECTED WORK</span>
            <h2>
              Ideas into
              <br />
              <span className="serif gold">real software.</span>
            </h2>
          </div>
          <p>
            Detailed project breakdowns illustrating backend API development,
            integrity monitoring, database integration, and component engineering.
          </p>
        </motion.div>

        <div className="detailed-projects-stack">
          {projects.map((project, index) => {
            const ProjectIcon = projectIcons[project.id] || Layers3;
            const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");
            const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== "");

            return (
              <motion.article
                className={`project-detailed-card project-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
              >
                {/* Header row */}
                <div className="project-detail-header">
                  <div className="project-detail-left">
                    <span className="project-number">{project.number} / PROJECT</span>
                    <span className={`status-badge status-${project.statusType}`}>
                      {project.statusBadge}
                    </span>
                  </div>
                  <div className="project-category-tag">
                    <ProjectIcon size={16} className="gold" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="project-card-body-grid">
                  <div className="project-card-main-col">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-role-line">
                      <strong>Focus:</strong> {project.roleDescription}
                    </p>
                    <p className="project-summary-text">{project.summary}</p>

                    <div className="project-context-box">
                      <ShieldCheck size={16} className="gold" />
                      <p>{project.contributionNote}</p>
                    </div>

                    {/* Features list: ContentGuard separates implemented vs planned */}
                    {project.id === "contentguard" ? (
                      <div className="features-bifurcated">
                        <div className="features-group">
                          <h4 className="features-heading implemented-heading">
                            <CheckCircle2 size={15} className="gold" />
                            Implemented Features (Verified in Code)
                          </h4>
                          <ul className="project-feature-list">
                            {project.implementedFeatures.map((feat) => (
                              <li key={feat}>
                                <span className="bullet-dot gold-bg" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="features-group planned-group">
                          <h4 className="features-heading planned-heading">
                            <Clock size={15} />
                            Planned &amp; In-Progress Milestones
                          </h4>
                          <ul className="project-feature-list planned-list">
                            {project.plannedFeatures.map((feat) => (
                              <li key={feat}>
                                <span className="bullet-dot planned-dot" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="features-group">
                        <h4 className="features-heading">
                          <CheckCircle2 size={15} className="gold" />
                          Key Architectural Features &amp; Contributions
                        </h4>
                        <ul className="project-feature-list">
                          {project.features.map((feat) => (
                            <li key={feat}>
                              <span className="bullet-dot gold-bg" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technology tags */}
                    <div className="project-tech-stack">
                      <span className="tech-stack-label">STACK:</span>
                      <div className="project-tags">
                        {project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>

                    {/* Links row - strictly hides optional links until user supplies real URLs */}
                    <div className="project-links-row">
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button-primary project-link-btn"
                        >
                          <GitHubIcon size={15} /> View Repository
                        </a>
                      )}
                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="button-secondary project-link-btn"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      {!hasGithub && !hasLive && (
                        <span className="links-supplying-note">
                          <Database size={13} className="gold" />
                          Repository &amp; demo links available upon request / configuration
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Architectural Graphic Card */}
                  <div className="project-card-visual-col" aria-hidden="true">
                    <div className="architecture-diagram-shell">
                      <div className="diagram-topline">
                        <span className="diagram-title">SYSTEM ARCHITECTURE</span>
                        <span className="diagram-badge">{project.title}</span>
                      </div>

                      {project.id === "betnutri" && (
                        <div className="diagram-flow flow-betnutri">
                          <div className="diagram-node node-client">
                            <span className="node-label">ADMIN INTERFACE</span>
                            <strong>React Portal</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Sanctum Token / HTTPS</span>
                          </div>
                          <div className="diagram-node node-api">
                            <span className="node-label">REST API &amp; RBAC</span>
                            <strong>Laravel 10 Core</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Relational Queries</span>
                          </div>
                          <div className="diagram-node node-db">
                            <span className="node-label">STORAGE</span>
                            <strong>PostgreSQL DB</strong>
                          </div>
                        </div>
                      )}

                      {project.id === "contentguard" && (
                        <div className="diagram-flow flow-contentguard">
                          <div className="diagram-node node-client">
                            <span className="node-label">CANDIDATE EXAM</span>
                            <strong>React Interface</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Tab &amp; Focus Events</span>
                          </div>
                          <div className="diagram-node node-api">
                            <span className="node-label">EVENT INGESTION</span>
                            <strong>Node / Express API</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Violation Logs</span>
                          </div>
                          <div className="diagram-node node-db">
                            <span className="node-label">LOG STORE</span>
                            <strong>MongoDB Storage</strong>
                          </div>
                        </div>
                      )}

                      {project.id === "portfolio" && (
                        <div className="diagram-flow flow-portfolio">
                          <div className="diagram-node node-client">
                            <span className="node-label">DATA TOKENS</span>
                            <strong>Modular Config</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Clean State &amp; UI</span>
                          </div>
                          <div className="diagram-node node-api">
                            <span className="node-label">COMPONENT TREE</span>
                            <strong>React 19 &amp; Vite</strong>
                          </div>
                          <div className="diagram-connector">
                            <span className="conn-line" />
                            <span className="conn-tag">Design System</span>
                          </div>
                          <div className="diagram-node node-db">
                            <span className="node-label">AESTHETIC</span>
                            <strong>Dark Charcoal &amp; Gold</strong>
                          </div>
                        </div>
                      )}

                      <div className="diagram-footer">
                        <span>ENGINEERED WITH DISCIPLINE</span>
                        <span>SAMRAWIT ABAYNEH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
