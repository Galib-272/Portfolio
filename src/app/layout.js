import localFont from "next/font/local";
import "./globals.css";

// Self-hosted fonts (no request to Google at build or run time).
const display = localFont({
  src: "../fonts/BricolageGrotesque.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/Manrope.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

export const metadata = {
  title: "Galib | MERN Developer",
  description: "Syed Ahmad Galib Portfolio",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/18667/18667581.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${sans.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="antialiased bg-ink text-white font-sans">
        {/* Page-wide background glow, sits behind every section */}
        <div aria-hidden="true" className="page-backdrop">
          <div className="aurora aurora-a" />
          <div className="aurora aurora-b" />
          <div className="aurora aurora-c" />
          <div className="backdrop-grid" />
        </div>
        {children}
      </body>
    </html>
  );
}
