import "../styles/fonts.css";
import { ThemeProvider, useTheme } from "./context/theme";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Systems } from "./components/Systems";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";

function AppInner() {
  const t = useTheme();
  return (
    <div
      style={{
        minHeight: "100vh",
        background: t.bgPage,
        color: t.text,
        position: "relative",
        overflowX: "hidden",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: t.isDark
            ? `
              radial-gradient(ellipse 80% 40% at 60% 0%, rgba(212,168,200,0.10) 0%, transparent 55%),
              radial-gradient(ellipse 60% 35% at 10% 50%, rgba(184,164,216,0.07) 0%, transparent 55%),
              linear-gradient(180deg, #0d0a12 0%, #110d18 50%, #0e0b14 100%)
            `
            : `
              radial-gradient(ellipse 80% 40% at 60% 0%, rgba(212,168,200,0.14) 0%, transparent 55%),
              radial-gradient(ellipse 60% 35% at 10% 50%, rgba(184,164,216,0.08) 0%, transparent 55%),
              radial-gradient(ellipse 50% 35% at 90% 80%, rgba(212,168,200,0.06) 0%, transparent 55%),
              linear-gradient(180deg, #fdf0f5 0%, #fdf5fb 40%, #fef8f0 100%)
            `,
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.3s",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <Systems />
        <Services />
        <Process />
        <Philosophy />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
