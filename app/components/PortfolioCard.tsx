type PortfolioCardProps = {
  name: string;
  skills: string[];
  projects: string[];
};

export default function PortfolioCard({
  name,
  skills,
  projects,
}: PortfolioCardProps) {
  return (
    <article className="portfolioCard">
      <h2>{name}</h2>

      <h3>Skill</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3>Proyek</h3>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </article>
  );
}
