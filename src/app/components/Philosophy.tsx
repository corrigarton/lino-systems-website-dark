import { motion } from "motion/react";

const principles = [
  {
    title: "Systems over services",
    body: "We don't bill hours. We build systems. The deliverable is software that runs your process — not a consultant that manages it for you.",
  },
  {
    title: "Operational simplicity",
    body: "Every system we build has fewer moving parts than the manual process it replaces. Complexity is a failure mode, not a sign of thoroughness.",
  },
  {
    title: "Infrastructure first",
    body: "Good tooling means the underlying infrastructure is solid before the UI is polished. Data pipelines, error handling, and audit logs come before aesthetics.",
  },
  {
    title: "Automation as leverage",
    body: "A workflow that runs itself frees the person who used to run it. That's the point. We measure success by what your team no longer has to do manually.",
  },
  {
    title: "No off-the-shelf",
    body: "Generic software solves generic problems. Your operational constraints are specific — pricing logic, approval hierarchies, data relationships. We build to spec.",
  },
  {
    title: "Legible design",
    body: "Every system we hand over should be understood by whoever maintains it next. Clean interfaces, clear data models, and documentation are non-negotiable.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        padding: "140px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#10b981",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            04 — Philosophy
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "end",
            }}
            className="philosophy-header"
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "-0.025em",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              How we think about engineering.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 440,
              }}
            >
              This is not traditional consulting. We don't produce strategy
              decks or implementation roadmaps. We produce software that works —
              scoped tightly, built quickly, maintained honestly.
            </p>
          </div>
        </motion.div>

        {/* Principles grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 16,
            overflow: "hidden",
          }}
          className="principles-grid"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                padding: "40px 36px",
                background: "rgba(255,255,255,0.02)",
                borderRight:
                  (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom:
                  i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                transition: "background 0.25s",
                cursor: "default",
              }}
              whileHover={{
                background: "rgba(255,255,255,0.04)",
                transition: { duration: 0.2 },
              }}
              className="principle-cell"
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: 20,
                  letterSpacing: "0.06em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "-0.015em",
                  margin: "0 0 12px",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-header { grid-template-columns: 1fr !important; }
          .principles-grid { grid-template-columns: 1fr !important; }
          .principle-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          }
          .principle-cell:last-child { border-bottom: none !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .principles-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .principle-cell:nth-child(2n) { border-right: none !important; }
          .principle-cell:nth-child(5), .principle-cell:nth-child(6) { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
