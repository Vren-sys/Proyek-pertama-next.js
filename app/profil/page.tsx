import ProfileCard from "../components/ProfileCard";

const profiles = [
  {
    name: "Surendra Wastujatmiko",
    kelas: "XII RPL 3",
    jurusan: "RPL",
    hobi: "Menonton film action",
    email: "surendrawastujatmiko@email.com",
    telepon: "089677303845",
  },
  {
    name: "Muhammad Rafi Rizki Pratama",
    kelas: "XII RPL 3",
    jurusan: "RPL",
    hobi: "Membaca Buku Novel",
    email: "rafireskypratama@email.com",
    telepon: "082149539200",
  },
];

export default function Profil() {
  return (
    <main>
      <h1>Profil Kami</h1>

      <section className="profileGrid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.email} {...profile} />
        ))}
      </section>
    </main>
  );
}
