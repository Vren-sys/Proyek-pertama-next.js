import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Website Profil & Portofolio",
  description: "Tugas Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
