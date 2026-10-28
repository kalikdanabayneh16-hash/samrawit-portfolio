import { motion } from "framer-motion";
import { Server, Database, ShieldCheck, Code2, Compass } from "lucide-react";
import { technicalInterests, personalStatement } from "../data/portfolioData";

const interestIcons = [Server, Database, ShieldCheck, Code2];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Philosophy() {
  return (
    <section className="content-section section-shell" id="philosophy">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <span className="section-kicker">06 / PERSPECTIVE &amp; PASSIONS</span>
        <h2>
          Inside out.
          <br />
          <span className="serif gold">Engineering philosophy.</span>
        </h2>
        <p className="section-subheading">
          Technical interests that guide my daily learning and the principles that shape how I build software.
        </p>
      </motion.div>

      {/* Engineering Philosophy Hero Quote Card */}
      <motion.div
        className="philosophy-quote-card"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="quote-badge">
          <Compass size={16} className="gold" />
          <span>DEVELOPER MANIFESTO</span>
        </div>
        <blockquote className="philosophy-quote">
          "{personalStatement.quote}"
        </blockquote>
        <p className="philosophy-approach">{personalStatement.approach}</p>
      </motion.div>

      {/* Technical Interests Grid */}
      <div className="interests-grid">
        {technicalInterests.map((interest, index) => {
          const IconComponent = interestIcons[index % interestIcons.length];

          return (
            <motion.div
              className="interest-card"
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="interest-icon-header">
                <div className="interest-icon-box">
                  <IconComponent size={20} className="gold" />
                </div>
                <span className="interest-index">0{index + 1}</span>
              </div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-desc">{interest.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
