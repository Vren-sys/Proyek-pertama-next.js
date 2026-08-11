"use client";

import { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";

const portfolios = [
  {
    name: "Surendra Wastujatmiko",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: [
      { title: "Pepekape adalah web yang menyajikan berbagai pelatihan bagi mahasiswa", image: "PEPEKAPE.png", id: "pepekape" },
    ],
  },
  {
    name: "Muhammad Rafi Rizki Pratama",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "C#", "Next.js"],
    projects: [
      { title: "Ringkita adalah web yang menyanjikan absensi digital bagi yang ingin mengikutin pelatihan boxing", image: "Ringkita sudah crop.jpg", id: "ringkita" },
    ],
  },
];

export default function Portofolio() {
  const [likes, setLikes] = useState<Record<string, boolean>>({
    pepekape: false,
    ringkita: false,
  });

  const handleLike = (projectId: string) => {
    setLikes((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <main>
      <h1>Portofolio</h1>

      <section className="portfolioGrid">
        {portfolios.map((portfolio) => (
          <PortfolioCard 
            key={portfolio.name} 
            {...portfolio} 
            likes={likes}
            onLike={handleLike}
          />
        ))}
      </section>
    </main>
  );
}
