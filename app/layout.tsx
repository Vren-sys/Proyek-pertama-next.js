import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portofolio",
  description: "Tugas Next.js",
};

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/portofolio/bukutamu", label: "Buku Tamu" },
  { href: "/kontak", label: "Kontak" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar items={navItems} />

        {children}
      </body>
    </html>
  );
}