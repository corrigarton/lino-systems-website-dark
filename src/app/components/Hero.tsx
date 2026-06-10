import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/theme";

/* ── Desktop budget card ── */
function BudgetReport() {
  const t = useTheme();
  const items = [
    { label: "Materials",      budget: 18000, actual: 14200 },
    { label: "Labor",          budget: 16000, actual: 13800 },
    { label: "Subcontractors", budget: 8000,  actual: 3200  },
  ];
  const totalBudget = 42000;
  const totalActual = 31200;
  const pct = Math.round((totalActual / totalBudget) * 100);

  return (
    <div style={{ background: t.surfaceStrong, border: `1px solid ${t.border}`, borderRadius: 16, boxShadow: t.isDark ? "0 8px 40px rgba(0,0,0,0.5)" : "0 8px 40px rgba(0,0,0,0.08)", padding: "18px 20px", width: 220, backdropFilter: "blur(20px)", transition: "background 0.3s" }}>
      <div style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, color: t.text, letterSpacing: "-0.01em" }}>Poipu Kitchen Remodel</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 600, color: "#16a34a", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)", borderRadius: 100, padding: "1px 6px" }}>On Budget</span>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text5, fontWeight: 500 }}>Updated automatically · right now</div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text4, fontWeight: 500 }}>Total spent</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: t.text3, fontWeight: 500 }}>${totalActual.toLocaleString()} / ${totalBudget.toLocaleString()}</span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: t.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, borderRadius: 3, background: t.gradientBtn }} />
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text5, marginTop: 3, textAlign: "right" }}>{pct}% of budget used</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => {
          const w = Math.round((item.actual / item.budget) * 100);
          const over = item.actual > item.budget;
          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text3, fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: over ? "#dc2626" : t.text3 }}>${item.actual.toLocaleString()}</span>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: t.isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.min(w, 100)}%`, borderRadius: 2, background: over ? "#fca5a5" : t.accentBorder }} />
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: `1px solid ${t.border}`, fontFamily: "'Inter', sans-serif", fontSize: 8.5, color: t.text5, textAlign: "center" }}>No spreadsheet needed — it's always up to date</div>
    </div>
  );
}

/* ── Mobile budget card — no fixed width, compact ── */
function BudgetReportMobile() {
  const t = useTheme();
  const items = [
    { label: "Materials",      budget: 18000, actual: 14200 },
    { label: "Labor",          budget: 16000, actual: 13800 },
    { label: "Subcontractors", budget: 8000,  actual: 3200  },
  ];
  const totalBudget = 42000;
  const totalActual = 31200;
  const pct = Math.round((totalActual / totalBudget) * 100);

  return (
    <div style={{ background: t.surfaceStrong, border: `1px solid ${t.border}`, borderRadius: 14, boxShadow: t.isDark ? "0 8px 32px rgba(0,0,0,0.55)" : "0 6px 28px rgba(0,0,0,0.09)", padding: "13px 15px", transition: "background 0.3s", width: "100%", boxSizing: "border-box" }}>
      <div style={{ marginBottom: 9 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 2 }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: t.text, letterSpacing: "-0.01em" }}>Poipu Kitchen Remodel</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, fontWeight: 600, color: "#16a34a", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.18)", borderRadius: 100, padding: "1px 7px", whiteSpace: "nowrap" }}>On Budget</span>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text5, fontWeight: 500 }}>Updated automatically · right now</div>
      </div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: t.text4, fontWeight: 500 }}>Total spent</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: t.text3, fontWeight: 500 }}>${totalActual.toLocaleString()} / ${totalBudget.toLocaleString()}</span>
        </div>
        <div style={{ height: 7, borderRadius: 4, background: t.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, borderRadius: 4, background: t.gradientBtn }} />
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text5, marginTop: 2, textAlign: "right" }}>{pct}% of budget used</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px 10px" }}>
        {items.map((item, i) => {
          const w = Math.round((item.actual / item.budget) * 100);
          const over = item.actual > item.budget;
          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text3, fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: over ? "#dc2626" : t.text3 }}>${(item.actual / 1000).toFixed(0)}k</span>
              </div>
              <div style={{ height: 5, borderRadius: 2, background: t.isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.min(w, 100)}%`, borderRadius: 2, background: over ? "#fca5a5" : t.accentBorder }} />
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 9, paddingTop: 8, borderTop: `1px solid ${t.border}`, fontFamily: "'Inter', sans-serif", fontSize: 9, color: t.text5, textAlign: "center" }}>No spreadsheet needed — always up to date</div>
    </div>
  );
}

/* ── Desktop diagram ── */
function ConnectedDiagram() {
  const t = useTheme();
  const sources = [
    { id: "qb",  label: "QuickBooks",      sub: "Accounting",       cy: 52  },
    { id: "pay", label: "Payroll",          sub: "Time & Labor",     cy: 140 },
    { id: "bk",  label: "Bank Feed",        sub: "Transactions",     cy: 228 },
    { id: "po",  label: "Purchase Orders",  sub: "Materials & Subs", cy: 316 },
    { id: "co",  label: "Change Orders",    sub: "Scope Changes",    cy: 404 },
  ];
  const cx = 490;
  const cy = 228;

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 760 }}>
      <svg viewBox="0 0 760 456" width="100%" style={{ overflow: "visible" }}>
        <defs>
          {sources.map((s) => {
            const sx = 164;
            const pathD = `M ${sx} ${s.cy} C ${sx + 140} ${s.cy}, ${cx - 140} ${cy}, ${cx} ${cy}`;
            return <path key={`def-${s.id}`} id={`path-${s.id}`} d={pathD} fill="none" />;
          })}
        </defs>
        {sources.map((s, i) => {
          const sx = 164;
          const pathD = `M ${sx} ${s.cy} C ${sx + 140} ${s.cy}, ${cx - 140} ${cy}, ${cx} ${cy}`;
          return (
            <g key={s.id}>
              <path d={pathD} fill="none" stroke={t.accentDim} strokeWidth={3} />
              <path d={pathD} fill="none" stroke={t.accentBorder} strokeWidth={1.5} strokeDasharray="5 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-18" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
              </path>
              <circle r={4} fill={t.accent} opacity={0.85}>
                <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                  <mpath href={`#path-${s.id}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
        {sources.map((s) => (
          <g key={`node-${s.id}`}>
            <rect x={8} y={s.cy - 26} width={148} height={52} rx={10} fill={t.isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.94)"} stroke={t.border} strokeWidth={1} style={{ filter: t.isDark ? "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" : "drop-shadow(0 2px 8px rgba(0,0,0,0.05))" }} />
            <text x={82} y={s.cy - 5} textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize={12} fontWeight={700} fill={t.text}>{s.label}</text>
            <text x={82} y={s.cy + 12} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize={10} fontWeight={500} fill={t.text4}>{s.sub}</text>
          </g>
        ))}
        <circle cx={cx} cy={cy} r={6} fill={t.accentDim} stroke={t.accent} strokeWidth={1.5}>
          <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r={3} fill={t.accent} />
      </svg>
      <div style={{ position: "absolute", top: "50%", left: `${(cx / 760) * 100}%`, transform: "translate(14px, -50%)" }}>
        <BudgetReport />
      </div>
    </div>
  );
}

/* ── Mobile diagram: 3 nodes top, report center, 2 nodes bottom ── */
function ConnectedDiagramMobile() {
  const t = useTheme();

  // All coordinates for a 340-wide viewBox
  // Top 3 nodes: width=104 height=50, spaced evenly
  const W = 340;
  const nodeH = 50;
  const nodeW_top = 104;
  const nodeW_bot = 152;

  // Top nodes: y=0, centers at bottom = nodeH
  const topNodes = [
    { id: "qb",  label: "QuickBooks",   sub: "Accounting",   x: 2,   cx: 54  },
    { id: "pay", label: "Payroll",       sub: "Time & Labor", x: 118, cx: 170 },
    { id: "bk",  label: "Bank Feed",     sub: "Transactions", x: 234, cx: 286 },
  ];

  // Report card: y=92, height=210
  const cardY = 92;
  const cardH = 210;
  const cardX = 6;
  const cardW = W - 12;
  const cardCY = cardY + cardH / 2; // = 197

  // Bottom nodes: y = cardY + cardH + 52
  const botY = cardY + cardH + 52; // = 354
  const botNodes = [
    { id: "po", label: "Purchase Orders", sub: "Materials", x: 8,   cx: 84  },
    { id: "co", label: "Change Orders",   sub: "Scope Chg", x: 180, cx: 256 },
  ];

  const viewH = botY + nodeH + 8; // = 412

  // Paths: all converge on top-center of card (cardX+cardW/2, cardY) or bottom-center
  const cardTop = { x: W / 2, y: cardY };
  const cardBot = { x: W / 2, y: cardY + cardH };

  const paths = [
    // top nodes → top of card
    { id: "qb",  d: `M ${topNodes[0].cx} ${nodeH} C ${topNodes[0].cx} ${cardY - 20} ${cardTop.x} ${cardY - 20} ${cardTop.x} ${cardTop.y}`, dur: 2.4, delay: 0 },
    { id: "pay", d: `M ${topNodes[1].cx} ${nodeH} L ${cardTop.x} ${cardTop.y}`,                                                               dur: 2.4, delay: 0 },
    { id: "bk",  d: `M ${topNodes[2].cx} ${nodeH} C ${topNodes[2].cx} ${cardY - 20} ${cardTop.x} ${cardY - 20} ${cardTop.x} ${cardTop.y}`,  dur: 2.4, delay: 0 },
    // bottom nodes → bottom of card
    { id: "po",  d: `M ${botNodes[0].cx} ${botY} C ${botNodes[0].cx} ${cardBot.y + 20} ${cardBot.x} ${cardBot.y + 20} ${cardBot.x} ${cardBot.y}`, dur: 2.4, delay: 0 },
    { id: "co",  d: `M ${botNodes[1].cx} ${botY} C ${botNodes[1].cx} ${cardBot.y + 20} ${cardBot.x} ${cardBot.y + 20} ${cardBot.x} ${cardBot.y}`, dur: 2.4, delay: 0 },
  ];

  const nodeFill = t.isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.95)";
  const nodeFilter = t.isDark ? "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" : "drop-shadow(0 2px 8px rgba(0,0,0,0.07))";

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <svg
        viewBox={`0 0 ${W} ${viewH}`}
        width="100%"
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          {paths.map(p => <path key={`md-${p.id}`} id={`mp-${p.id}`} d={p.d} fill="none" />)}
        </defs>

        {/* Animated paths */}
        {paths.map((p, i) => (
          <g key={p.id}>
            <path d={p.d} fill="none" stroke={t.accentDim} strokeWidth={4} />
            <path d={p.d} fill="none" stroke={t.accentBorder} strokeWidth={1.5} strokeDasharray="6 4">
              <animate attributeName="stroke-dashoffset" from="0" to="-20" dur={`${p.dur}s`} repeatCount="indefinite" />
            </path>
            <circle r={5} fill={t.accent} opacity={0.9}>
              <animateMotion dur={`${p.dur}s`} repeatCount="indefinite" begin="0s">
                <mpath href={`#mp-${p.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        {/* Top 3 nodes */}
        {topNodes.map(s => (
          <g key={`mn-${s.id}`}>
            <rect x={s.x} y={0} width={nodeW_top} height={nodeH} rx={10} fill={nodeFill} stroke={t.border} strokeWidth={1} style={{ filter: nodeFilter }} />
            <text x={s.cx} y={20} textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize={12} fontWeight={700} fill={t.text}>{s.label}</text>
            <text x={s.cx} y={36} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize={10} fontWeight={500} fill={t.text4}>{s.sub}</text>
          </g>
        ))}

        {/* Bottom 2 nodes */}
        {botNodes.map(s => (
          <g key={`mn-${s.id}`}>
            <rect x={s.x} y={botY} width={nodeW_bot} height={nodeH} rx={10} fill={nodeFill} stroke={t.border} strokeWidth={1} style={{ filter: nodeFilter }} />
            <text x={s.cx} y={botY + 20} textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize={12} fontWeight={700} fill={t.text}>{s.label}</text>
            <text x={s.cx} y={botY + 36} textAnchor="middle" fontFamily="'Inter', sans-serif" fontSize={10} fontWeight={500} fill={t.text4}>{s.sub}</text>
          </g>
        ))}

        {/* Report card via foreignObject */}
        <foreignObject x={cardX} y={cardY} width={cardW} height={cardH}>
          {/* @ts-ignore — xmlns required for foreignObject HTML content */}
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: "100%", height: "100%" }}>
            <BudgetReportMobile />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}

export function Hero() {
  const t = useTheme();

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 20 }}>
      {/* Radial glow */}
      <div style={{ position: "absolute", inset: 0, background: t.isDark ? "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(212,168,200,0.13) 0%, rgba(184,164,216,0.07) 45%, transparent 70%)" : "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(212,168,200,0.12) 0%, rgba(184,164,216,0.06) 45%, transparent 70%)", pointerEvents: "none" }} />

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.isDark ? "rgba(212,168,200,0.05)" : "rgba(200,80,160,0.035)"} 1px, transparent 1px), linear-gradient(90deg, ${t.isDark ? "rgba(212,168,200,0.05)" : "rgba(200,80,160,0.035)"} 1px, transparent 1px)`, backgroundSize: "52px 52px", maskImage: "radial-gradient(ellipse 70% 50% at 50% 25%, black 10%, transparent 100%)", pointerEvents: "none" }} />

      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 14px 5px 10px", borderRadius: 100, background: t.isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.82)", border: `1px solid ${t.accentBorder}`, boxShadow: "0 2px 12px rgba(212,168,200,0.1)", backdropFilter: "blur(12px)", marginBottom: 36, position: "relative" }}>
        <span style={{ fontSize: 14 }}>🌺</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: t.accentText }}>Built for Kauai businesses</span>
      </motion.div>

      {/* Headline */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }} style={{ textAlign: "center", maxWidth: 780, padding: "0 32px", position: "relative" }}>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(42px, 6.5vw, 80px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.035em", color: t.text, margin: 0 }}>
          All your business data.{" "}
          <span style={{ background: t.gradientText, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>One clear picture.</span>
        </h1>
      </motion.div>

      {/* Subtext */}
      <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.8vw, 18px)", color: t.text3, lineHeight: 1.78, maxWidth: 540, textAlign: "center", margin: "24px 0 0", padding: "0 32px", fontWeight: 400, position: "relative" }}>
        Your sales are in one app, payroll in another, inventory in a spreadsheet. We connect them — and build tools that save your team hours every week.
      </motion.p>

      {/* Value props */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }} style={{ display: "flex", gap: 8, marginTop: 22, flexWrap: "wrap", justifyContent: "center", padding: "0 32px", position: "relative" }}>
        {["No more manual reports", "Stop copy-pasting between apps", "See your numbers in real time"].map((tag, i) => (
          <div key={i} style={{ padding: "5px 13px", borderRadius: 100, background: t.isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.75)", border: `1px solid ${t.border}`, fontSize: 12, fontWeight: 500, color: t.text3, fontFamily: "'Inter', sans-serif" }}>✓ {tag}</div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32 }} style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap", justifyContent: "center", padding: "0 32px", position: "relative" }}>
        <a href="mailto:corrina@lino.systems" style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 26px", borderRadius: 10, background: t.isDark ? t.surface : "#111111", color: t.isDark ? t.text : "white", border: t.isDark ? `1px solid ${t.border}` : "none", fontSize: 14, fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "opacity 0.15s, transform 0.18s", letterSpacing: "-0.01em" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.82"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}>
          Talk to us — it's free <ArrowRight size={15} />
        </a>
        <a href="#systems" style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 26px", borderRadius: 10, background: t.isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.78)", border: `1px solid ${t.border}`, color: t.text3, fontSize: 14, fontWeight: 500, fontFamily: "'Inter', sans-serif", textDecoration: "none", transition: "all 0.15s", backdropFilter: "blur(8px)", letterSpacing: "-0.01em" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = t.isDark ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.95)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = t.isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.78)"; }}>
          See what we build
        </a>
      </motion.div>

      {/* Diagram panel */}
      <motion.div
        initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.42 }}
        style={{ marginTop: 84, marginBottom: 0, marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: 900, padding: "0 24px", position: "relative", boxSizing: "border-box" }}
        className="hero-diagram-outer"
      >
        <div style={{
          borderRadius: 24,
          border: `1px solid ${t.border}`,
          borderTop: `1px solid ${t.accentBorder}`,
          background: t.isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.78)",
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          boxShadow: t.isDark
            ? "0 8px 48px rgba(0,0,0,0.38), 0 1px 0 rgba(255,255,255,0.05) inset"
            : "0 8px 48px rgba(212,168,200,0.12), 0 1px 0 rgba(255,255,255,0.95) inset",
          padding: "20px 24px 24px",
        }}>
          {/* Panel header bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Traffic light dots */}
              <div style={{ display: "flex", gap: 5 }}>
                {["rgba(255,95,86,0.55)", "rgba(255,189,68,0.55)", "rgba(39,201,63,0.55)"].map((c, i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                ))}
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: t.text4, letterSpacing: "-0.01em" }}>
                North Shore Builders <span style={{ color: t.text5 }}>· data flow</span>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 100, background: "rgba(22,163,74,0.07)", border: "1px solid rgba(22,163,74,0.18)" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#16a34a", animation: "pgn 1.8s ease-in-out infinite" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "#16a34a" }}>Live sync</span>
            </div>
          </div>

          {/* Diagrams */}
          <div className="hero-diagram-desktop">
            <ConnectedDiagram />
          </div>
          <div className="hero-diagram-mobile" style={{ display: "none" }}>
            <ConnectedDiagramMobile />
          </div>

          {/* Panel footer */}
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${t.border}`, textAlign: "center" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: t.text5 }}>Your apps, finally talking to each other.</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes pgn { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.6)} }
        .hero-diagram-mobile { display: none !important; }
        .hero-diagram-desktop { display: block; }
        @media (max-width: 600px) {
          .hero-diagram-mobile { display: block !important; }
          .hero-diagram-desktop { display: none !important; }
          .hero-diagram-outer { padding: 0 16px !important; }
        }
      `}</style>
    </section>
  );
}
