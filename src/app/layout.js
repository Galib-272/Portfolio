import "./globals.css";

export const metadata = {
  title: "Galib | MERN Developer",
  description: "Syed Ahmad Galib Portfolio",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/18667/18667581.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="antialiased bg-[#0b0e14] text-white">{children}</body>
    </html>
  );
}
