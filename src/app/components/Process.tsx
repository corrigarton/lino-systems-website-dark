import { motion } from "motion/react";
import { Search, Hammer, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    color: "#3b82f6",
    colorDim: "rgba(59,130,246,0.1)",
    colorBorder: "rgba(59,130,246,0.2)",
    duration: "1–2 days",
    description:
      "We map your current processes, data sources, and tooling before any scoping decisions. The audit surfaces what's worth automating and what isn't.",
    details: [
      "Stakeholder interviews",
      "Data source inventory",
      "Integration feasibility check",
      "Scope and effort estimate",
    ],
  },
  {
    number: "02",
    icon: Hammer,
    title: "Build",
    color: "#06b6d4",
    colorDim: "rgba(6,182,212,0.1)",
    colorBorder: "rgba(6,182,212,0.2)",
    duration: "1–6 weeks",
    description:
      "Iterative delivery in short cycles. You see working software within the first week — not wireframes or slide decks. Feedback loops are tight.",
    details: [
      "Weekly delivery checkpoints",
      "Staging environment from day one",
      "End-user testing each sprint",
      "Documentation as we build",
    ],
  },
  {
    number: "03",
    icon: Shield,
    title: "Support",
    color: "#8b5cf6",
    colorDim: "rgba(139,92,246,0.1)",
    colorBorder: "rgba(139,92,246,0.2)",
    duration: "30–90 days",
    description:
      "Post-launch support is included in every engagement. Systems evolve — edge cases emerge, data schemas change, new integrations are needed.",
    details: [
      "Monitored error alerting",
      "Priority bug response",
      "Minor feature adjustments",
      "Handoff documentation",
    ],
  },
];

export function Process() {
  return (
    <section id="process" style={{ padding: "140px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              color: "#8b5cf6",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            03 — Process
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 420,
            }}
          >
            How it works.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              marginTop: 16,
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Three stages. Predictable delivery. No engagement that stretches
            on indefinitely.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 0,
                  position: "relative",
                }}
                className="process-row"
              >
                {/* Left: number + line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 32,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: step.colorDim,
                      border: `1px solid ${step.colorBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <Icon size={18} color={step.color} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        flex: 1,
                        minHeight: 40,
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                        marginTop: 8,
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div
                  style={{
                    padding: "28px 0 48px 32px",
                    borderLeft: "1px solid rgba(255,255,255,0.04)",
                    marginLeft: -1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 260 }}>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: step.color,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {step.number} · {step.duration}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "clamp(22px, 3vw, 32px)",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.95)",
                          letterSpacing: "-0.02em",
                          margin: "0 0 14px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 15,
                          color: "rgba(255,255,255,0.45)",
                          lineHeight: 1.75,
                          margin: 0,
                          maxWidth: 480,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Detail list */}
                    <div
                      style={{
                        minWidth: 220,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 12,
                        padding: "20px 24px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {step.details.map((d, j) => (
                        <div
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            marginBottom: j < step.details.length - 1 ? 12 : 0,
                          }}
                        >
                          <div
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: step.color,
                              marginTop: 7,
                              flexShrink: 0,
                              opacity: 0.8,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 13,
                              color: "rgba(255,255,255,0.5)",
                              lineHeight: 1.5,
                            }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .process-row { grid-template-columns: 48px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
