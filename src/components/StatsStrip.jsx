import { stats } from "../data/portfolioData";

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Key Milestones & Focus">
      <div className="stats-inner">
        {stats.map((stat) => (
          <div className="stat" key={stat.value}>
            <div className="stat-content">
              <span className="stat-value">{stat.value}</span>
              <div className="stat-text">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sublabel">{stat.sublabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
