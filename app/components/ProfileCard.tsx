type ProfileCardProps = {
  name: string;
  kelas: string;
  jurusan: string;
  hobi: string;
  email: string;
  telepon: string;
  photo?: string;
};

export default function ProfileCard({
  name,
  kelas,
  jurusan,
  hobi,
  email,
  telepon,
  photo,
}: ProfileCardProps) {
  return (
    <article className="profileCard">
      {photo ? (
        <img
          src={`/images/profil/${photo}`}
          alt={`${name} photo`}
          className="profilePhoto"
        />
      ) : (
        <div className="profilePhoto empty" />
      )}

      <h2>{name}</h2>
      <p>
        <strong>Kelas:</strong> {kelas}
      </p>
      <p>
        <strong>Jurusan:</strong> {jurusan}
      </p>
      <p>
        <strong>Hobi:</strong> {hobi}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>No. HP:</strong> {telepon}
      </p>
    </article>
  );
}
