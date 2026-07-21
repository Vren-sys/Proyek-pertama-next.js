import Link from "next/link";

export default function Navbar() {
  return (
    <header className="siteHeader">
      <nav className="navbar" aria-label="Navigasi utama">
        <div className="navLinks">
          <Link href="/">Beranda</Link>
          <Link href="/profil">Profil</Link>
          <Link href="/portofolio">Portofolio</Link>
        </div>
      </nav>
    </header>
  );
}
