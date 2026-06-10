import { motion } from "motion/react";
import { Search, Hammer, Shield } from "lucide-react";
import { useTheme } from "../context/theme";

const steps = [
  {
    number: "01", icon: Search, title: "Audit", duration: "1–2 days",
    headline: "We understand your operation first.",
    description: "Before we write a single line of code, we spend time understanding how your business works — where your data lives, what your team does manually, and where the real pain is. A lot of what businesses think they need turns out to be simpler than they expect.",
    details: ["Walk through your current tools and workflows", "Identify what's actually worth automating", "Map your data sources (POS, payroll, bank, etc.)", "Give you a clear scope and price — no surprises"],
  },
  {
    number: "02", icon: Hammer, title: "Build", duration: "1–6 weeks",
    headline: "You see it working within the first week.",
    description: "We build in short cycles. Within days of starting, you'll see a working version — not a mockup or a slide deck. We check in regularly and make sure the system matches how your team works in real life.",
    details: ["Working software in your hands within the first week", "Weekly check-ins — no disappearing for months", "Testing with your real data before launch", "Plain-English documentation handed over at the end"],
  },
  {
    number: "03", icon: Shield, title: "Support", duration: "30–90 days included",
    headline: "We don't disappear after launch.",
    description: "Every engagement includes post-launch support. Real systems surface edge cases — a supplier changes their format, a new employee joins, the business grows. Small adjustments during the support window cost you nothing.",
    details: ["Monitored error alerts — we know before you do", "Fast response to bugs or data issues", "Minor adjustments at no extra charge", "Clear handoff if you want to take it in-house"],
  },
];

export function Process() {
  const t = useTheme();
  return (
    <section id="process" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 72 }} className="process-header-mb">
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, marginBottom: 18, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            How it works
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, letterSpacing: "-0.025em", margin: 0, maxWidth: 460 }}>
            Straightforward from start to finish.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: t.text4, marginTop: 14, maxWidth: 480, lineHeight: 1.72 }}>
            No jargon, no long contracts, no open-ended timeline. Three stages — each with a clear purpose.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ display: "grid", gridTemplateColumns: "64px 1fr" }}
                className="process-row"
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                    <Icon size={17} color={t.accentText} />
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: 1, flex: 1, minHeight: 40, background: `linear-gradient(180deg, ${t.accentBorder} 0%, transparent 100%)`, marginTop: 8 }} />
                  )}
                </div>

                <div style={{ padding: "20px 0 52px 28px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: t.accentText, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 7, opacity: 0.7 }}>
                    {step.number} · {step.duration}
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 800, color: t.text, letterSpacing: "-0.02em", margin: "0 0 5px" }}>{step.title}</h3>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, color: t.text2, marginBottom: 10 }}>{step.headline}</div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }} className="process-inner">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: t.text3, lineHeight: 1.78, margin: 0 }}>{step.description}</p>
                    <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderTop: `2px solid ${t.accentDim}`, borderRadius: 12, padding: "16px 20px", backdropFilter: "blur(16px)", boxShadow: t.isDark ? "0 4px 16px rgba(0,0,0,0.3)" : "0 4px 16px rgba(212,168,200,0.06)" }}>
                      {step.details.map((d, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: j < step.details.length - 1 ? 10 : 0 }}>
                          <div style={{ width: 14, height: 14, borderRadius: "50%", background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                            <span style={{ fontSize: 8, color: t.accentText, fontWeight: 700 }}>✓</span>
                          </div>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: t.text3, lineHeight: 1.5 }}>{d}</span>
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
        @media(max-width:700px){.process-row{grid-template-columns:48px 1fr!important}.process-inner{grid-template-columns:1fr!important}}
        @media(max-width:640px){#process{padding:32px 20px 20px!important}.process-header-mb{margin-bottom:36px!important}}
      `}</style>
    </section>
  );
}
