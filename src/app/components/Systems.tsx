import { motion } from "motion/react";
import { useState } from "react";
import {
  BarChart3,
  Workflow,
  Brain,
  LayoutDashboard,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  Activity,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const systems = [
  {
    id: "reporting",
    icon: BarChart3,
    title: "Executive Reporting Suite",
    description:
      "Real-time dashboards pulling from ERP, CRM, and operational databases. Unified KPI views built for decision-making, not data exploration.",
    tag: "Reporting & Analytics",
    color: "#3b82f6",
    colorDim: "rgba(59,130,246,0.1)",
    colorBorder: "rgba(59,130,246,0.2)",
    preview: <ReportingPreview />,
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Operations Automation Layer",
    description:
      "Multi-step workflows connecting your SaaS stack — approvals, notifications, data sync, and document generation running without manual intervention.",
    tag: "Workflow Automation",
    color: "#06b6d4",
    colorDim: "rgba(6,182,212,0.1)",
    colorBorder: "rgba(6,182,212,0.2)",
    preview: <AutomationPreview />,
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Document Intelligence",
    description:
      "Classify, extract, and route data from unstructured documents. Built on language models, calibrated on your data, integrated into your existing stack.",
    tag: "AI Systems",
    color: "#8b5cf6",
    colorDim: "rgba(139,92,246,0.1)",
    colorBorder: "rgba(139,92,246,0.2)",
    preview: <AIPreview />,
  },
  {
    id: "apps",
    icon: LayoutDashboard,
    title: "Internal Operations Portal",
    description:
      "Purpose-built admin tools, approval queues, and data entry forms — replacing spreadsheets and email threads with structured, auditable systems.",
    tag: "Custom Applications",
    color: "#10b981",
    colorDim: "rgba(16,185,129,0.1)",
    colorBorder: "rgba(16,185,129,0.2)",
    preview: <PortalPreview />,
  },
];

function ReportingPreview() {
  const bars = [65, 82, 58, 90, 74, 88, 96, 71, 83, 67, 92, 78];
  return (
    <div style={{ padding: "20px 20px 12px", height: "100%" }}>
      {/* Mini KPI row */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[
          { label: "Revenue", value: "$2.4M", up: true },
          { label: "Margin", value: "38.2%", up: true },
          { label: "Churn", value: "1.8%", up: false },
        ].map((kpi, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8,
              padding: "8px 10px",
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", marginBottom: 3 }}>
              {kpi.label}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {kpi.value}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 2 }}>
              <TrendingUp size={10} color={kpi.up ? "#10b981" : "#ef4444"} style={{ transform: kpi.up ? "none" : "scaleY(-1)" }} />
              <span style={{ fontSize: 9, color: kpi.up ? "#10b981" : "#ef4444", fontFamily: "'JetBrains Mono', monospace" }}>
                {kpi.up ? "+4.2%" : "-0.3%"}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 60 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              borderRadius: "3px 3px 0 0",
              background: i === 10
                ? "linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)"
                : "rgba(59,130,246,0.25)",
              transition: "height 0.3s ease",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", fontFamily: "'JetBrains Mono', monospace" }}>Jan</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", fontFamily: "'JetBrains Mono', monospace" }}>Dec</span>
      </div>
    </div>
  );
}

function AutomationPreview() {
  const flows = [
    { name: "Invoice → Approval", status: "running", runs: 142 },
    { name: "New Deal → Onboard", status: "success", runs: 38 },
    { name: "Support → Escalation", status: "success", runs: 71 },
    { name: "Data Sync → Warehouse", status: "running", runs: 1024 },
  ];
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
      {flows.map((flow, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 7,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: flow.status === "running" ? "#06b6d4" : "#10b981",
                boxShadow: `0 0 6px ${flow.status === "running" ? "#06b6d4" : "#10b981"}`,
                animation: flow.status === "running" ? "pulse 2s infinite" : "none",
              }}
            />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}>
              {flow.name}
            </span>
          </div>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}>
            {flow.runs.toLocaleString()}×
          </span>
        </div>
      ))}
      <style>{`@keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }`}</style>
    </div>
  );
}

function AIPreview() {
  const docs = [
    { name: "invoice_q4_acme.pdf", type: "Invoice", conf: 98 },
    { name: "contract_renewal_xyz.pdf", type: "Contract", conf: 94 },
    { name: "statement_nov.pdf", type: "Statement", conf: 99 },
  ];
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <Activity size={12} color="#8b5cf6" />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>
          CLASSIFICATION ENGINE · LIVE
        </span>
      </div>
      {docs.map((doc, i) => (
        <div
          key={i}
          style={{
            padding: "10px 12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 7,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {doc.name}
            </span>
            <span
              style={{
                fontSize: 9,
                padding: "2px 8px",
                borderRadius: 4,
                background: "rgba(139,92,246,0.15)",
                color: "#a78bfa",
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              {doc.type}
            </span>
          </div>
          <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ flex: 1, height: 2, borderRadius: 1, background: "rgba(255,255,255,0.08)" }}>
              <div style={{ width: `${doc.conf}%`, height: "100%", background: "#8b5cf6", borderRadius: 1 }} />
            </div>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}>
              {doc.conf}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortalPreview() {
  const items = [
    { ref: "REQ-2847", title: "Vendor onboarding — Apex Co.", status: "Pending", priority: "High" },
    { ref: "REQ-2846", title: "Budget approval Q1 2025", status: "Approved", priority: "Med" },
    { ref: "REQ-2845", title: "IT access — new hire batch", status: "In Review", priority: "Low" },
  ];
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>
          APPROVAL QUEUE
        </span>
        <span style={{ fontSize: 10, color: "#10b981", fontFamily: "'JetBrains Mono', monospace" }}>3 pending</span>
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            padding: "9px 12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 7,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", fontFamily: "'JetBrains Mono', monospace", marginBottom: 3 }}>
              {item.ref}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif" }}>
              {item.title}
            </div>
          </div>
          <span
            style={{
              fontSize: 9,
              padding: "2px 8px",
              borderRadius: 4,
              background:
                item.status === "Approved"
                  ? "rgba(16,185,129,0.15)"
                  : item.status === "Pending"
                  ? "rgba(234,179,8,0.15)"
                  : "rgba(59,130,246,0.15)",
              color:
                item.status === "Approved"
                  ? "#10b981"
                  : item.status === "Pending"
                  ? "#eab308"
                  : "#60a5fa",
              fontFamily: "'JetBrains Mono', monospace",
              whiteSpace: "nowrap",
            }}
          >
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Systems() {
  const [activeSystem, setActiveSystem] = useState(0);
  const system = systems[activeSystem];
  const Icon = system.icon;

  return (
    <section
      id="systems"
      style={{
        padding: "140px 32px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
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
            color: "#60a5fa",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          01 — Systems
        </div>
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            color: "rgba(255,255,255,0.95)",
            letterSpacing: "-0.025em",
            margin: 0,
            maxWidth: 560,
          }}
        >
          What we build.
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
          Four categories of system, deployed across dozens of businesses.
          Each one replaces a manual process with something that runs itself.
        </p>
      </motion.div>

      {/* Tab selector */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {systems.map((s, i) => {
          const SIcon = s.icon;
          const active = i === activeSystem;
          return (
            <button
              key={s.id}
              onClick={() => setActiveSystem(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "9px 18px",
                borderRadius: 8,
                border: active
                  ? `1px solid ${s.colorBorder}`
                  : "1px solid rgba(255,255,255,0.07)",
                background: active ? s.colorDim : "rgba(255,255,255,0.03)",
                color: active ? s.color : "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "-0.01em",
              }}
            >
              <SIcon size={14} />
              <span className="tab-label">{s.tag.split(" & ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main card */}
      <motion.div
        key={activeSystem}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 0,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          minHeight: 380,
        }}
        className="systems-card"
      >
        {/* Left: info */}
        <div
          style={{
            padding: "48px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: system.colorDim,
                border: `1px solid ${system.colorBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <Icon size={20} color={system.color} />
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: system.color,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              {system.tag}
            </div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "-0.02em",
                margin: "0 0 16px",
              }}
            >
              {system.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {system.description}
            </p>
          </div>
          <a
            href="mailto:hello@lino.systems"
            style={{
              marginTop: 36,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500,
              color: system.color,
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
            Discuss this system
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Right: preview */}
        <div
          style={{
            background: `radial-gradient(ellipse at 60% 30%, ${system.colorDim} 0%, rgba(5,8,15,0.5) 60%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {system.preview}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .systems-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
