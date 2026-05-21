// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Galib | MERN Developer",
  description: "Syed Ahmad Galib Portfolio",
};

export default function RootLayout({ children }) {
  return (
    // Force the 'dark' class here permanently
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className="antialiased bg-[#0b0e14] text-white">
        {children}
      </body>
    </html>
  );
}