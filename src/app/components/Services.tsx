import { motion } from "motion/react";
import { BarChart3, Workflow, Brain, LayoutDashboard, ArrowRight } from "lucide-react";

const bundles = [
  {
    icon: BarChart3,
    title: "Reporting",
    price: "From $4,800",
    color: "#3b82f6",
    colorDim: "rgba(59,130,246,0.08)",
    colorBorder: "rgba(59,130,246,0.18)",
    description:
      "Connected dashboards and automated reports built on your live data sources. Replaces manual export-and-format cycles.",
    deliverables: [
      "Source data audit and schema mapping",
      "Up to 4 dashboard views",
      "Scheduled PDF/email delivery",
      "Drill-down filtering",
      "30-day support window",
    ],
  },
  {
    icon: Workflow,
    title: "Automation",
    price: "From $6,400",
    color: "#06b6d4",
    colorDim: "rgba(6,182,212,0.08)",
    colorBorder: "rgba(6,182,212,0.18)",
    description:
      "End-to-end workflow automation across your SaaS tools. Approvals, notifications, data routing, and document generation.",
    deliverables: [
      "Process discovery workshop",
      "Up to 6 workflow nodes",
      "Error handling and alerting",
      "Audit log per execution",
      "45-day support window",
    ],
  },
  {
    icon: Brain,
    title: "AI Systems",
    price: "From $9,600",
    color: "#8b5cf6",
    colorDim: "rgba(139,92,246,0.08)",
    colorBorder: "rgba(139,92,246,0.18)",
    description:
      "Production-ready AI tools trained on your documents and data. Classification, extraction, summarisation, and generation.",
    deliverables: [
      "Use-case scoping and data audit",
      "Fine-tuning or prompt engineering",
      "API integration + admin UI",
      "Human review fallback flows",
      "60-day support window",
    ],
    featured: true,
  },
  {
    icon: LayoutDashboard,
    title: "Custom Applications",
    price: "From $12,000",
    color: "#10b981",
    colorDim: "rgba(16,185,129,0.08)",
    colorBorder: "rgba(16,185,129,0.18)",
    description:
      "Internal tools, portals, and admin systems built to replace spreadsheets and email-driven workflows with structured software.",
    deliverables: [
      "Requirements and flow mapping",
      "Full-stack web application",
      "Role-based access control",
      "Data export and audit log",
      "90-day support window",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "140px 32px",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.03) 30%, rgba(6,182,212,0.03) 70%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#06b6d4",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            02 — Services
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 480,
            }}
          >
            Four engagement types.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
              marginTop: 16,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            Each bundle is scoped, priced, and delivered. No retainer bloat,
            no discovery-that-never-ends. You get a system, not a proposal.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {bundles.map((bundle, i) => {
            const Icon = bundle.icon;
            return (
              <motion.div
                key={bundle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  borderRadius: 16,
                  background: bundle.featured
                    ? `radial-gradient(ellipse at 50% 0%, ${bundle.colorDim} 0%, rgba(255,255,255,0.03) 60%)`
                    : "rgba(255,255,255,0.03)",
                  border: bundle.featured
                    ? `1px solid ${bundle.colorBorder}`
                    : "1px solid rgba(255,255,255,0.07)",
                  padding: "32px 28px",
                  backdropFilter: "blur(12px)",
                  transition: "border-color 0.25s, background 0.25s, transform 0.25s",
                  cursor: "default",
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                {bundle.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: bundle.colorDim,
                      border: `1px solid ${bundle.colorBorder}`,
                      borderTop: "none",
                      borderRadius: "0 0 8px 8px",
                      padding: "3px 14px",
                      fontSize: 10,
                      color: bundle.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Most complex
                  </div>
                )}

                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: bundle.colorDim,
                    border: `1px solid ${bundle.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={18} color={bundle.color} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.95)",
                    letterSpacing: "-0.015em",
                    margin: "0 0 8px",
                  }}
                >
                  {bundle.title}
                </h3>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: bundle.color,
                    marginBottom: 16,
                    letterSpacing: "0.02em",
                  }}
                >
                  {bundle.price}
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.7,
                    margin: "0 0 24px",
                  }}
                >
                  {bundle.description}
                </p>

                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {bundle.deliverables.map((d, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: bundle.color,
                          marginTop: 6,
                          flexShrink: 0,
                          opacity: 0.7,
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

                <a
                  href="mailto:hello@lino.systems"
                  style={{
                    marginTop: 28,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    color: bundle.color,
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "10px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.gap = "6px";
                  }}
                >
                  Enquire
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
