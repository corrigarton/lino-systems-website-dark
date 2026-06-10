import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme";

export function Nav() {
  const t = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {};
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "What We Build", href: "#systems" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Our Approach", href: "#philosophy" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 48px)",
          maxWidth: 1100,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: t.isDark ? "rgba(20,16,30,0.85)" : "rgba(255,255,255,0.78)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${t.border}`,
            borderRadius: 16,
            boxShadow: t.isDark
              ? "0 4px 24px rgba(0,0,0,0.4)"
              : "0 4px 24px rgba(212,168,200,0.1), 0 1px 2px rgba(0,0,0,0.03)",
            padding: "0 20px",
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            <div style={{
              width: 26, height: 26, borderRadius: 7,
              background: t.gradientBtn,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.95" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" fillOpacity="0.45" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.45" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" fillOpacity="0.95" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: t.text, letterSpacing: "-0.02em", transition: "color 0.3s" }}>
              Lino Systems
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 30 }} className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                style={{ color: t.text4, textDecoration: "none", fontSize: 13, fontWeight: 500, fontFamily: "'Inter', sans-serif", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = t.text)}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = t.text4)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Dark mode toggle */}
            <button
              onClick={t.toggle}
              style={{
                width: 34, height: 34, borderRadius: 8,
                border: `1px solid ${t.border}`,
                background: t.isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s", color: t.text4,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = t.accentBorder; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = t.border; }}
            >
              {t.isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <a
              href="mailto:corrina@lino.systems"
              className="nav-cta"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "7px 16px", borderRadius: 8,
                background: t.gradientBtn,
                color: "white", fontSize: 13, fontWeight: 600,
                fontFamily: "'Inter', sans-serif", textDecoration: "none",
                transition: "opacity 0.15s, transform 0.15s",
                boxShadow: "0 2px 12px rgba(184,164,216,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Get in touch
              <ArrowRight size={13} />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-burger"
              style={{ background: "none", border: "none", color: t.text4, cursor: "pointer", padding: 4, display: "none" }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              style={{
                marginTop: 8,
                background: t.isDark ? "rgba(20,16,30,0.96)" : "rgba(255,255,255,0.95)",
                backdropFilter: "blur(24px)",
                border: `1px solid ${t.border}`,
                borderRadius: 14,
                padding: "14px 20px 18px",
                display: "flex", flexDirection: "column", gap: 2,
                boxShadow: t.isDark ? "0 8px 32px rgba(0,0,0,0.5)" : "0 8px 32px rgba(212,168,200,0.12)",
              }}
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  style={{ color: t.text3, textDecoration: "none", fontSize: 15, fontWeight: 500, padding: "9px 0", fontFamily: "'Inter', sans-serif", borderBottom: `1px solid ${t.border}` }}>
                  {link.label}
                </a>
              ))}
              <a href="mailto:corrina@lino.systems"
                style={{ marginTop: 10, padding: "10px 16px", borderRadius: 8, background: t.gradientBtn, color: "white", fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center", fontFamily: "'Inter', sans-serif" }}>
                Get in touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style>{`
        @media(max-width:768px){
          .nav-links{display:none!important}
          .nav-cta{display:none!important}
          .nav-burger{display:flex!important}
        }
      `}</style>
    </>
  );
}
