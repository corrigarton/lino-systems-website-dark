import { createContext, useContext, useState, ReactNode } from "react";

export interface Theme {
  isDark: boolean;
  toggle: () => void;
  bg: string;
  bgPage: string;
  bgAlt: string;
  surface: string;
  surfaceStrong: string;
  border: string;
  borderWeak: string;
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  accent: string;
  accentAlt: string;
  accentMid: string;
  accentText: string;
  accentDim: string;
  accentBorder: string;
  gradientBtn: string;
  gradientText: string;
  sectionAlt: string;
  previewBg: string;
}

const lightColors: Omit<Theme, "isDark" | "toggle"> = {
  bg: "#ffffff",
  bgPage: "#fdf0f5",
  bgAlt: "#fdf5fb",
  surface: "rgba(255,255,255,0.94)",
  surfaceStrong: "#ffffff",
  border: "rgba(0,0,0,0.10)",
  borderWeak: "rgba(0,0,0,0.06)",
  text: "#111111",
  text2: "#444444",
  text3: "#666666",
  text4: "#888888",
  text5: "#bbbbbb",
  accent: "#d4a8c8",
  accentAlt: "#b8a4d8",
  accentMid: "#c8a8e0",
  accentText: "#a87898",
  accentDim: "rgba(212,168,200,0.14)",
  accentBorder: "rgba(212,168,200,0.35)",
  gradientBtn: "linear-gradient(135deg, #d4a8c8 0%, #b8a4d8 100%)",
  gradientText: "linear-gradient(120deg, #d4a8c8 0%, #c8a8e0 40%, #b8a4d8 80%)",
  sectionAlt: "rgba(248,236,244,0.70)",
  previewBg: "rgba(244,230,240,0.75)",
};

const darkColors: Omit<Theme, "isDark" | "toggle"> = {
  bg: "#1a1424",
  bgPage: "#0d0a12",
  bgAlt: "#110d18",
  surface: "rgba(255,255,255,0.055)",
  surfaceStrong: "rgba(255,255,255,0.09)",
  border: "rgba(255,255,255,0.08)",
  borderWeak: "rgba(255,255,255,0.06)",
  text: "#f0eef8",
  text2: "rgba(240,238,248,0.78)",
  text3: "rgba(240,238,248,0.58)",
  text4: "rgba(240,238,248,0.42)",
  text5: "rgba(240,238,248,0.28)",
  accent: "#d4a8c8",
  accentAlt: "#b8a4d8",
  accentMid: "#c8a8e0",
  accentText: "#d4a8c8",
  accentDim: "rgba(212,168,200,0.12)",
  accentBorder: "rgba(212,168,200,0.28)",
  gradientBtn: "linear-gradient(135deg, #d4a8c8 0%, #b8a4d8 100%)",
  gradientText: "linear-gradient(120deg, #d4a8c8 0%, #c8a8e0 40%, #b8a4d8 80%)",
  sectionAlt: "rgba(255,255,255,0.02)",
  previewBg: "rgba(255,255,255,0.025)",
};

const ThemeContext = createContext<Theme>({ isDark: false, toggle: () => {}, ...lightColors });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark((d) => !d);
  const value: Theme = { isDark, toggle, ...(isDark ? darkColors : lightColors) };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
