import Link from "next/link";

export default function Portofolio() {
  return (
    <main>
      <h1>Portofolio</h1>

      <h2>Surendra Wastujatmiko</h2>

      <h3>Skill</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>C#</li>
        <li>Next.js</li>
      </ul>

      <h3>Proyek</h3>
      <ul>
        <li>Website PEPEKAPE</li>
        <li>Website WisataId</li>
        <li>Aplikasi Kasir Sederhana</li>
      </ul>

      <h2>Muhammad Rafi Rizki Pratama</h2>

      <h3>Skill</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>C#</li>
        <li>Next.js</li>
      </ul>

      <h3>Proyek</h3>
      <ul>
        <li>Website Ringkita</li>
        <li>Website Sekolah</li>
        <li>Aplikasi Kasir Sederhana</li>
      </ul>

      <nav>
        <Link href="/">Beranda</Link>
        <Link href="/profil">Profil</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
    </main>
  );
}