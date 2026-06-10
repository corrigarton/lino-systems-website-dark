import { motion } from "motion/react";
import { useTheme } from "../context/theme";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import corrinaPhoto from "../../imports/41cc1969-225b-4cb0-97c9-7f44121bdec5.png";
import corrinaPhotoMobile from "../../imports/Untitled_design__2_.png";

const principles = [
  {
    title: "I start with the process, not the software.",
    body: "Before recommending anything, I want to understand what's actually happening today. Where the data lives. What decision it's supposed to support. Most software problems are really process problems in disguise.",
  },
  {
    title: "Fragmented information creates bad decisions.",
    body: "Almost everything I build is about pulling scattered data (accounting, payroll, project files, spreadsheets) into one place. Not because dashboards are impressive, but because you can't run a business on a partial picture.",
  },
  {
    title: "Simplicity is a feature.",
    body: "Most businesses are already drowning in apps, duplicate data, and manual workarounds. My instinct is always: how do we remove steps? A system with fewer moving parts breaks less, costs less to maintain, and lasts longer.",
  },
  {
    title: "Automation only counts if you can measure it.",
    body: "I don't say \"we implemented automation.\" I say: this saves four hours a week. This eliminated three manual reports. This cut entry errors in half. Outcomes are the only honest metric.",
  },
  {
    title: "Let's look at what's actually happening.",
    body: "I'm skeptical of assumptions that aren't backed by data. Not in a confrontational way, more like: let's not guess when we can just look. That instinct shapes both how I work and what I build.",
  },
];

export function Philosophy() {
  const t = useTheme();
  return (
    <section id="philosophy" style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Personal intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 72, alignItems: "start", marginBottom: 96 }}
          className="philosophy-intro"
        >
          <div style={{ overflow: "hidden" }}>
            {/* Mobile float photo — floats right so text wraps around it */}
            <div className="phil-float-photo" style={{ display: "none" }}>
              <div style={{
                borderRadius: "50%", overflow: "hidden",
                boxShadow: t.isDark ? "0 4px 24px rgba(0,0,0,0.55)" : "0 4px 24px rgba(212,168,200,0.3)",
                width: "100%", aspectRatio: "1/1",
              }}>
                <ImageWithFallback
                  src={corrinaPhotoMobile}
                  alt="Corrina"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              About
            </div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: t.text, letterSpacing: "-0.03em", margin: "0 0 6px", lineHeight: 1.05 }}>
              Corrina.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: t.accentText, margin: "0 0 20px", letterSpacing: "0.01em" }}>
              Founder, Lino Systems · Kauai, HI
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: t.text3, lineHeight: 1.82, margin: "0 0 18px", maxWidth: 520 }}>
              I first got into coding through robotics. It felt like solving a sudoku puzzle, except the answer actually did something. Math that moved things in the real world. I went on to study Information Systems at the Foster School of Business at UW.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: t.text3, lineHeight: 1.82, margin: "0 0 28px", maxWidth: 520 }}>
              Since then I've been building systems at the Pacific Missile Range Facility on Kauai, automating processes, designing data workflows, and turning fragmented information into something people can actually act on. I started Lino Systems because the same problems I solve for large institutions exist in every local business. And the solutions don't have to be expensive or complicated.
            </p>

            {/* Credential pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "UW Foster School of Business",
                "Information Systems",
                "Application Specialist, PMRF",
                "Active Secret Clearance",
              ].map((tag, i) => (
                <div key={i} style={{
                  padding: "6px 14px", borderRadius: 100,
                  background: t.isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)",
                  border: `1px solid ${t.border}`,
                  fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: t.text3,
                }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: "relative" }} className="phil-photo-col">
            <div style={{
              borderRadius: 20,
              overflow: "hidden",
              aspectRatio: "3/4",
              background: "#0d0a12",
              boxShadow: t.isDark
                ? "0 24px 64px rgba(0,0,0,0.6)"
                : "0 24px 64px rgba(212,168,200,0.22), 0 4px 12px rgba(0,0,0,0.08)",
            }}>
              <ImageWithFallback
                src={corrinaPhoto}
                alt="Corrina, founder of Lino Systems"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Small floating tag */}
            <div className="phil-float-tag" style={{
              position: "absolute", bottom: -14, left: 20,
              padding: "8px 16px", borderRadius: 100,
              background: t.isDark ? "rgba(20,16,30,0.95)" : "rgba(255,255,255,0.97)",
              border: `1px solid ${t.accentBorder}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              backdropFilter: "blur(12px)",
              fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 500, color: t.accentText,
              whiteSpace: "nowrap",
            }}>
              🌺 Based in Kauai, Hawaii
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 100, background: t.accentDim, border: `1px solid ${t.accentBorder}`, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: t.accentText, marginBottom: 18, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            How I work
          </div>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: t.text, letterSpacing: "-0.02em", margin: 0 }}>
            The principles behind every project.
          </h3>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }} className="principles-grid">
          {principles.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.38, delay: i * 0.055 }}
              style={{
                padding: "28px 24px",
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderLeft: `3px solid ${t.accent}`,
                borderRadius: 14,
                backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                boxShadow: t.isDark ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(212,168,200,0.06)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.16 } }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: t.accentBorder, marginBottom: 14, letterSpacing: "0.05em" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, color: t.text, letterSpacing: "-0.01em", margin: "0 0 10px", lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: t.text3, lineHeight: 1.75, margin: 0 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .philosophy-intro{grid-template-columns:1fr!important}
          .principles-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:640px){
          #philosophy{padding:64px 20px 72px!important}
          .phil-photo-col{display:none!important}
          .phil-float-tag{display:none!important}
          .philosophy-intro{grid-template-columns:1fr!important;margin-bottom:48px!important}
          .phil-float-photo{
            display:block!important;
            float:right;
            width:40%;
            margin:6px 0 16px 20px;
            shape-outside:circle(50%);
          }
        }
        @media(max-width:560px){.principles-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
