import Link from "next/link";

export default function Profil() {
  return (
    <main>
      <h1>Profil Kami</h1>

      <h2>Surendra Wastujatmiko</h2>

      <p><strong>Kelas:</strong> XII RPL 3</p>
      <p><strong>Jurusan:</strong> RPL</p>
      <p><strong>Hobi:</strong> Menonton film actionn</p>
      <p><strong>Email:</strong> surendrawastujatmiko@email.com</p>
      <p><strong>No. HP:</strong> 089677303845</p>

      <h2>Muhammad Rafi Rizki Pratama</h2>

      <p><strong>Kelas:</strong> XII RPL 3</p>
      <p><strong>Jurusan:</strong> RPL</p>
      <p><strong>Hobi:</strong> Membaca Buku Novel</p>
      <p><strong>Email:</strong> rafireskypratama@email.com</p>
      <p><strong>No. HP:</strong> 082149539200</p>

      <nav>
        <Link href="/">Beranda</Link>
        <Link href="/portofolio">Portofolio</Link>
        <Link href="/kontak">Kontak</Link>
      </nav>
    </main>
  );
}