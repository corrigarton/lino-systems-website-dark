import { motion } from "motion/react";
import { BarChart3, Workflow, Brain, LayoutDashboard, ArrowRight } from "lucide-react";
import { useTheme } from "../context/theme";

const bundles = [
  {
    icon: BarChart3, title: "Reporting", price: "From $4,800",
    tagline: "Connect your data. See your business clearly.",
    description: "We pull your numbers from wherever they live — your POS, payroll, bank feed, or accounting software — and build a dashboard that updates itself. No more exporting spreadsheets on Sunday night.",
    deliverables: ["Audit of your current data sources", "Up to 4 dashboard views (revenue, labor, etc.)", "Automated daily or weekly report emails", "30-day support after launch"],
  },
  {
    icon: Workflow, title: "Automation", price: "From $6,400",
    tagline: "Stop doing things a computer could do instead.",
    description: "We identify the tasks your team does repeatedly and build software that runs those tasks automatically. Your team keeps their time.",
    deliverables: ["Process walkthrough to find automation opportunities", "Up to 6 automated workflow steps", "Error alerts so nothing falls through", "45-day support after launch"],
  },
  {
    icon: Brain, title: "AI Tools", price: "From $9,600",
    tagline: "Practical AI that solves a specific problem.",
    description: "Not hype — specific tools. We build AI that reads your documents (invoices, contracts, permits), pulls out the information you need, and sends it where it belongs.",
    deliverables: ["Use-case scoping — we only build what makes sense", "Trained on your actual documents", "Built-in human review for edge cases", "60-day support after launch"],
    featured: true,
  },
  {
    icon: LayoutDashboard, title: "Custom Apps", price: "From $12,000",
    tagline: "Software built exactly for how your business works.",
    description: "When no existing tool fits — job tracking, a client portal, an inventory system — we build it from scratch. Yours to own, built to last.",
    deliverables: ["Detailed requirements and flow mapping", "Full web application, mobile-friendly", "User roles and access control", "90-day support after launch"],
  },
];

export function Services() {
  const t = useTheme();
  return (
    <section id="services" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 56 }}>
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, marginBottom: 18, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Services & Pricing
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, letterSpacing: "-0.025em", margin: 0, maxWidth: 500 }}>
            Flat-scope engagements. You know what you're getting.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: t.text4, marginTop: 14, maxWidth: 540, lineHeight: 1.72 }}>
            Each engagement has a defined scope, a fixed deliverable, and a clear price. No open-ended retainers. You get software — not a consultant on the clock.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))", gap: 14 }}>
          {bundles.map((bundle, i) => {
            const Icon = bundle.icon;
            return (
              <motion.div key={bundle.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
                style={{
                  position: "relative", borderRadius: 16,
                  background: t.surface,
                  border: bundle.featured ? `1px solid ${t.accentBorder}` : `1px solid ${t.border}`,
                  borderTop: bundle.featured ? `2px solid ${t.accent}` : `2px solid ${t.accentDim}`,
                  padding: "28px 26px",
                  backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                  boxShadow: bundle.featured
                    ? (t.isDark ? "0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(212,168,200,0.14)")
                    : (t.isDark ? "0 4px 20px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.04)"),
                }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
              >
                {bundle.featured && (
                  <div style={{ position: "absolute", top: 14, right: 14, padding: "2px 10px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontSize: 10, color: t.accentText, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Popular</div>
                )}

                <div style={{ width: 38, height: 38, borderRadius: 9, background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={16} color={t.accentText} />
                </div>

                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 19, fontWeight: 800, color: t.text, letterSpacing: "-0.015em", margin: "0 0 4px" }}>{bundle.title}</h3>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: t.text5, marginBottom: 12 }}>{bundle.price}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: t.text2, margin: "0 0 8px", fontStyle: "italic" }}>{bundle.tagline}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: t.text3, lineHeight: 1.72, margin: "0 0 20px" }}>{bundle.description}</p>

                <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  {bundle.deliverables.map((d, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <span style={{ fontSize: 8, color: t.accentText, fontWeight: 700 }}>✓</span>
                      </div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: t.text3, lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>

                <a href="mailto:corrina@lino.systems"
                  style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: t.accentText, fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "gap 0.18s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "9px"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "5px"; }}>
                  Talk to us about this <ArrowRight size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:640px){#services{padding:32px 20px 36px!important}}`}</style>
    </section>
  );
}
