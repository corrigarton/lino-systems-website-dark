import { motion } from "motion/react";
import { useState } from "react";
import { BarChart3, Workflow, Brain, LayoutDashboard, TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import { useTheme } from "../context/theme";

const systems = [
  {
    id: "reporting", icon: BarChart3, tag: "Reporting & Dashboards",
    title: "One dashboard for everything",
    plain: "Right now, your sales numbers are in your POS, your labor costs are in a payroll app, and your expenses are in QuickBooks. To see the full picture, you're exporting spreadsheets on Sunday night. We build a single dashboard that pulls it all together, automatically, in real time.",
    bullets: ["Connects your POS, payroll, bank, and accounting software", "Updates itself. No more manual exports.", "See profit, labor cost, and sales side by side", "Shareable reports for managers, owners, or investors"],
  },
  {
    id: "automation", icon: Workflow, tag: "Workflow Automation",
    title: "Stop doing the same thing twice",
    plain: "If your team does the same task every week (sending invoices, entering data from one system into another, chasing approvals over text or email), that's something a computer can do instead. We map your repetitive processes and build software that runs them without anyone touching it.",
    bullets: ["Invoices sent automatically when a job closes", "New customer info synced across your tools instantly", "Approval requests routed to the right person", "Alerts when something needs your attention"],
  },
  {
    id: "ai", icon: Brain, tag: "AI Tools",
    title: "Let AI handle your paperwork",
    plain: "AI isn't just for big tech companies. We build practical AI tools for real business problems: reading contracts and pulling out key terms, sorting piles of invoices, answering customer questions from your own documents.",
    bullets: ["Extract key data from invoices, permits, or contracts", "Summarize long documents in plain language", "Answer staff or customer questions from your internal docs", "Flag inconsistencies or missing info automatically"],
  },
  {
    id: "apps", icon: LayoutDashboard, tag: "Custom Applications",
    title: "Software built for how you work",
    plain: "Sometimes you need software that doesn't exist yet, because your business has a specific process that no off-the-shelf tool handles well. We build custom web applications: job tracking portals, client-facing request forms, internal approval systems, inventory tools.",
    bullets: ["Job or project tracking boards for your team", "Client portals for estimates, approvals, or updates", "Inventory and supply management tools", "Replaces the spreadsheet your team has outgrown"],
  },
];

function ReportingPreview() {
  const t = useTheme();
  const bars = [55, 72, 60, 88, 68, 82, 94, 65, 78, 60, 90, 74];
  const glass = { background: t.surface, border: `1px solid ${t.border}`, backdropFilter: "blur(12px)" as const };
  return (
    <div style={{ padding: "20px 20px 14px" }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[{ label: "Revenue MTD", value: "$94,200", up: true }, { label: "Labor Cost", value: "28.4%", up: false }, { label: "Net Margin", value: "22.1%", up: true }].map((kpi, i) => (
          <div key={i} style={{ flex: 1, ...glass, borderRadius: 8, padding: "8px 10px" }}>
            <div style={{ fontSize: 10, color: t.text4, fontFamily: "'Inter', sans-serif", marginBottom: 3 }}>{kpi.label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: t.text, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{kpi.value}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}>
              <TrendingUp size={9} color={kpi.up ? "#16a34a" : "#dc2626"} style={{ transform: kpi.up ? "none" : "scaleY(-1)" }} />
              <span style={{ fontSize: 9, color: kpi.up ? "#16a34a" : "#dc2626", fontFamily: "'JetBrains Mono', monospace" }}>{kpi.up ? "+4.2%" : "+1.1%"}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 64 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 10 ? t.gradientBtn : (t.isDark ? "rgba(212,168,200,0.18)" : "rgba(212,168,200,0.28)") }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontSize: 9, color: t.text5, fontFamily: "'JetBrains Mono', monospace" }}>Jan</span>
        <span style={{ fontSize: 9, color: t.text5, fontFamily: "'JetBrains Mono', monospace" }}>Dec</span>
      </div>
    </div>
  );
}

function AutomationPreview() {
  const t = useTheme();
  const flows = [
    { name: "Job closed → Invoice sent", running: true, count: "142 this month" },
    { name: "New client → Welcome email", running: false, count: "38 this month" },
    { name: "Timesheet → Payroll sync", running: false, count: "Daily" },
    { name: "Low stock → Purchase alert", running: true, count: "As needed" },
  ];
  const glass = { background: t.surface, border: `1px solid ${t.border}`, backdropFilter: "blur(12px)" as const };
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ fontSize: 11, color: t.text4, fontFamily: "'Inter', sans-serif", fontWeight: 500, marginBottom: 4 }}>Active automations</div>
      {flows.map((f, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", ...glass, borderRadius: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: f.running ? t.accent : "#16a34a", flexShrink: 0, animation: f.running ? "pu 2s infinite" : "none" }} />
            <span style={{ fontSize: 12, color: t.text2, fontFamily: "'Inter', sans-serif" }}>{f.name}</span>
          </div>
          <span style={{ fontSize: 10, color: t.text5, fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", marginLeft: 8 }}>{f.count}</span>
        </div>
      ))}
      <style>{`@keyframes pu{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </div>
  );
}

function AIPreview() {
  const t = useTheme();
  const docs = [
    { name: "Invoice_HawaiiSupply.pdf", type: "Invoice", conf: 99 },
    { name: "Contract_Renovation_Kauai.pdf", type: "Contract", conf: 94 },
    { name: "Permit_Hanalei_2025.pdf", type: "Permit", conf: 97 },
  ];
  const glass = { background: t.surface, border: `1px solid ${t.border}`, backdropFilter: "blur(12px)" as const };
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <Activity size={11} color={t.accentAlt} />
        <span style={{ fontSize: 11, color: t.text4, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Documents processed today</span>
      </div>
      {docs.map((doc, i) => (
        <div key={i} style={{ padding: "10px 12px", ...glass, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: t.text2, fontFamily: "'Inter', sans-serif", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.name}</span>
            <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 4, background: t.accentDim, color: t.accentText, fontFamily: "'JetBrains Mono', monospace" }}>{doc.type}</span>
          </div>
          <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ flex: 1, height: 2, borderRadius: 1, background: t.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
              <div style={{ width: `${doc.conf}%`, height: "100%", background: t.gradientBtn, borderRadius: 1 }} />
            </div>
            <span style={{ fontSize: 9, color: t.text5, fontFamily: "'JetBrains Mono', monospace" }}>{doc.conf}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortalPreview() {
  const t = useTheme();
  const items = [
    { ref: "JOB-0041", title: "Kitchen remodel · Princeville", status: "In Progress", pct: 65 },
    { ref: "JOB-0040", title: "Solar panel install · Lihue", status: "Awaiting permit", pct: 30 },
    { ref: "JOB-0039", title: "Deck build · Poipu", status: "Complete", pct: 100 },
  ];
  const glass = { background: t.surface, border: `1px solid ${t.border}`, backdropFilter: "blur(12px)" as const };
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ fontSize: 11, color: t.text4, fontFamily: "'Inter', sans-serif", fontWeight: 500, marginBottom: 4 }}>Active jobs</div>
      {items.map((item, i) => (
        <div key={i} style={{ padding: "10px 12px", ...glass, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <div>
              <div style={{ fontSize: 9, color: t.text5, fontFamily: "'JetBrains Mono', monospace", marginBottom: 2 }}>{item.ref}</div>
              <div style={{ fontSize: 12, color: t.text2, fontFamily: "'Inter', sans-serif" }}>{item.title}</div>
            </div>
            <span style={{ fontSize: 9, padding: "2px 8px", borderRadius: 4, background: item.pct === 100 ? "rgba(22,163,74,0.08)" : item.status === "In Progress" ? t.accentDim : "rgba(249,115,22,0.08)", color: item.pct === 100 ? "#16a34a" : item.status === "In Progress" ? t.accentText : "#f97316", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap", marginLeft: 6 }}>{item.status}</span>
          </div>
          <div style={{ height: 3, borderRadius: 2, background: t.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
            <div style={{ width: `${item.pct}%`, height: "100%", borderRadius: 2, background: item.pct === 100 ? "#16a34a" : t.gradientBtn }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const previews = [ReportingPreview, AutomationPreview, AIPreview, PortalPreview];

export function Systems() {
  const t = useTheme();
  const [active, setActive] = useState(0);
  const system = systems[active];
  const Icon = system.icon;
  const Preview = previews[active];

  return (
    <section id="systems" style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ marginBottom: 52 }}>
        <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, marginBottom: 18, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          What we build
        </div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: t.text, letterSpacing: "-0.025em", margin: 0, maxWidth: 560 }}>
          A few ways we help local businesses run better.
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: t.text4, marginTop: 14, maxWidth: 500, lineHeight: 1.72 }}>
          Click each to see how it works and what it would mean for a business like yours.
        </p>
      </motion.div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {systems.map((s, i) => {
          const SIcon = s.icon;
          const isActive = i === active;
          return (
            <button key={s.id} onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8,
                border: isActive ? `1px solid ${t.accentBorder}` : `1px solid ${t.border}`,
                background: isActive ? t.accentDim : t.isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.92)",
                color: isActive ? t.accentText : t.text4,
                fontSize: 13, fontWeight: 500, fontFamily: "'Inter', sans-serif",
                cursor: "pointer", transition: "all 0.18s", backdropFilter: "blur(8px)",
              }}>
              <SIcon size={13} />
              {s.tag.split(" ")[0]}
            </button>
          );
        })}
      </div>

      {/* Card */}
      <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}
        style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr",
          borderRadius: 18, overflow: "hidden",
          border: `1px solid ${t.border}`,
          boxShadow: t.isDark ? "0 12px 48px rgba(0,0,0,0.5)" : "0 12px 48px rgba(212,168,200,0.18), 0 2px 8px rgba(0,0,0,0.06)",
          background: t.surface,
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          minHeight: 400,
        }}
        className="systems-card"
      >
        <div style={{ padding: "44px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: `1px solid ${t.border}` }}>
          <div>
            <div style={{ width: 40, height: 40, borderRadius: 9, background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <Icon size={18} color={t.accentText} />
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{system.tag}</div>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 800, color: t.text, letterSpacing: "-0.02em", margin: "0 0 14px" }}>{system.title}</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: t.text3, lineHeight: 1.8, margin: "0 0 22px" }}>{system.plain}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {system.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                  <div style={{ width: 15, height: 15, borderRadius: "50%", background: t.accentDim, border: `1px solid ${t.accentBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: 8, color: t.accentText, fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: t.text3, lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="mailto:corrina@lino.systems"
            style={{ marginTop: 30, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: t.accentText, fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "gap 0.18s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "9px"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "5px"; }}>
            Ask us about this <ArrowUpRight size={13} />
          </a>
        </div>

        <div style={{ background: t.isDark ? "rgba(255,255,255,0.025)" : "rgba(212,168,200,0.06)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Preview />
        </div>
      </motion.div>

      <style>{`@media(max-width:768px){.systems-card{grid-template-columns:1fr!important}} @media(max-width:640px){#systems{padding:64px 20px 20px!important}}`}</style>
    </section>
  );
}
