import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useTheme } from "../context/theme";

export function Footer() {
  const t = useTheme();
  return (
    <footer style={{ borderTop: `1px solid ${t.border}`, padding: "80px 32px 48px", position: "relative", overflow: "hidden" }}>
      {/* Soft glow behind CTA */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 900, height: 350, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: 500, height: 250, left: "10%", top: "10%", borderRadius: "50%", background: t.isDark ? "rgba(212,168,200,0.07)" : "rgba(212,168,200,0.18)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", width: 400, height: 200, right: "10%", top: "20%", borderRadius: "50%", background: t.isDark ? "rgba(184,164,216,0.06)" : "rgba(184,164,216,0.14)", filter: "blur(60px)" }} />
      </div>

      {/* CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{
          maxWidth: 1200, margin: "0 auto 64px",
          borderRadius: 20,
          background: t.surface,
          border: `1px solid ${t.border}`,
          borderTop: `2px solid ${t.accentBorder}`,
          backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          padding: "48px 56px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 32,
          boxShadow: t.isDark ? "0 8px 40px rgba(0,0,0,0.4)" : "0 8px 40px rgba(212,168,200,0.08)",
          position: "relative",
        }}
      >
        <div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: t.text, letterSpacing: "-0.025em", margin: "0 0 12px" }}>
            Ready to simplify how your<br />business runs?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: t.text3, lineHeight: 1.7, margin: "0 0 12px", maxWidth: 400 }}>
            Start with a free conversation. Tell us what you're doing manually, what's frustrating, or what data you wish you could see.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <MapPin size={12} color={t.accentText} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: t.text5 }}>Kauai, Hawaii</span>
          </div>
        </div>
        <a
          href="mailto:corrina@lino.systems"
          style={{
            display: "flex", alignItems: "center", gap: 9,
            padding: "13px 26px", borderRadius: 10,
            background: t.gradientBtn,
            color: "white", fontSize: 14, fontWeight: 600,
            fontFamily: "'Inter', sans-serif", textDecoration: "none",
            whiteSpace: "nowrap", transition: "opacity 0.15s, transform 0.18s",
            boxShadow: "0 4px 20px rgba(184,164,216,0.3)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
        >
          <Mail size={15} />
          corrina@lino.systems
          <ArrowRight size={14} />
        </a>
      </motion.div>

      {/* Bottom */}
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <div style={{ width: 26, height: 26, borderRadius: 6, background: t.gradientBtn, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.95" />
              <rect x="9" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.45" />
              <rect x="2" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.45" />
              <rect x="9" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.95" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: t.text2, letterSpacing: "-0.01em" }}>Lino Systems</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="https://lino.systems" style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: t.text5, textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t.accentText; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = t.text5; }}>
            lino.systems
          </a>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: t.text5 }}>© 2025 Lino Systems</span>
        </div>
      </div>
    </footer>
  );
}
