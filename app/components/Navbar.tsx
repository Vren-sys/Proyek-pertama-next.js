import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
};

export default function Navbar({ items }: NavbarProps) {
  return (
    <header className="siteHeader">
      <nav className="navbar" aria-label="Navigasi utama">
        <div className="brand">Profil & Portofolio</div>

        <div className="navLinks">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
