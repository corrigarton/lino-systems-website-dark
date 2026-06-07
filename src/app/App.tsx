import "../styles/fonts.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Systems } from "./components/Systems";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      style={{
        minHeight: "100vh",
        background: "#05080f",
        color: "rgba(255,255,255,0.9)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Persistent background gradient */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(59,130,246,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40vh",
          background:
            "linear-gradient(0deg, rgba(5,8,15,0.8) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
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
