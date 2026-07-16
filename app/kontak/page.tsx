import Link from "next/link";

export default function Kontak() {
  
  return (
    <main>
      <h1>Kontak</h1>

      <p>
        Website ini dibuat sebagai tugas Next.js dari Pak Fakih
      </p>

      <button>Kirim Pesan</button>

      <nav>
        <Link href="/">Beranda</Link>
        <Link href="/profil">Profil</Link>
        <Link href="/portofolio">Portofolio</Link>
      </nav>
    </main>
  );
}