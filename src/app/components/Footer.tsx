import { motion } from "motion/react";
import { ArrowRight, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 32px 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 1200,
          margin: "0 auto 80px",
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(139,92,246,0.08) 100%)",
          border: "1px solid rgba(59,130,246,0.2)",
          backdropFilter: "blur(16px)",
          padding: "56px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 32,
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "-0.025em",
              margin: "0 0 12px",
            }}
          >
            Ready to build something?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 400,
            }}
          >
            Tell us what you're trying to automate or measure. We'll scope
            it, price it, and deliver it.
          </p>
        </div>
        <a
          href="mailto:hello@lino.systems"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 32px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          <Mail size={16} />
          hello@lino.systems
          <ArrowRight size={16} />
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.9" />
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.5" />
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.5" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "-0.01em",
            }}
          >
            Lino Systems
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <a
            href="https://lino.systems"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)";
            }}
          >
            <Globe size={12} />
            lino.systems
          </a>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © 2025 Lino Systems
          </span>
        </div>
      </div>
    </footer>
  );
}
