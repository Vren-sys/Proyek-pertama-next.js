import PortfolioCard from "../components/PortfolioCard";

const portfolios = [
  {
    name: "Surendra Wastujatmiko",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: ["Website PEPEKAPE", "Website WisataId", "Aplikasi Kasir Sederhana"],
  },
  {
    name: "Muhammad Rafi Rizki Pratama",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: ["Website Ringkita", "Website Sekolah", "Aplikasi Kasir Sederhana"],
  },
];

export default function Portofolio() {
  return (
    <main>
      <h1>Portofolio</h1>

      <section className="portfolioGrid">
        {portfolios.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio} />
        ))}
      </section>
    </main>
  );
}
