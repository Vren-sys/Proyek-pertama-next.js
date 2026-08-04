import PortfolioCard from "../components/PortfolioCard";

const portfolios = [
  {
    name: "Surendra Wastujatmiko",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: [
      { title: "Pepekape adalah web yang menyajikan berbagai pelatihan bagi mahasiswa", image: "PEPEKAPE.png" },
    ],
  },
  {
    name: "Muhammad Rafi Rizki Pratama",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: [],
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
