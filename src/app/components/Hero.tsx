import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Ambient light orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "15%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 14px 6px 10px",
          borderRadius: 100,
          background: "rgba(59,130,246,0.1)",
          border: "1px solid rgba(59,130,246,0.25)",
          marginBottom: 40,
        }}
      >
        <Terminal size={13} color="#60a5fa" />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#60a5fa",
            letterSpacing: "0.04em",
          }}
        >
          lino.systems — engineering infrastructure
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ textAlign: "center", maxWidth: 860, padding: "0 32px" }}
      >
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.95)",
            margin: 0,
          }}
        >
          Systems that run{" "}
          <span
            style={{
              background: "linear-gradient(120deg, #60a5fa 0%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            your business.
          </span>
        </h1>
      </motion.div>

      {/* Supporting text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
          maxWidth: 600,
          textAlign: "center",
          margin: "28px 0 0",
          padding: "0 32px",
          fontWeight: 400,
        }}
      >
        We design and build reporting systems, automation workflows,
        AI tools, and internal applications — purpose-built for
        operational clarity.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          display: "flex",
          gap: 14,
          marginTop: 44,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 32px",
        }}
      >
        <a
          href="mailto:hello@lino.systems"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 28px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
            transition: "opacity 0.2s, transform 0.2s",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          Start a project
          <ArrowRight size={16} />
        </a>

        <a
          href="#systems"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 28px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.8)",
            fontSize: 15,
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
            transition: "all 0.2s",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(255,255,255,0.08)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(255,255,255,0.18)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(255,255,255,0.05)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(255,255,255,0.1)";
          }}
        >
          View systems
        </a>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          display: "flex",
          gap: 0,
          marginTop: 80,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          width: "100%",
          maxWidth: 860,
          flexWrap: "wrap",
        }}
      >
        {[
          { value: "40+", label: "Systems deployed" },
          { value: "< 3 wks", label: "Median delivery" },
          { value: "100%", label: "Custom built" },
          { value: "0", label: "Off-the-shelf templates" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 140px",
              padding: "28px 32px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 26,
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                marginTop: 8,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
