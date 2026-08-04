type Project = {
  title: string;
  image?: string;
};

type PortfolioCardProps = {
  name: string;
  skills: string[];
  projects: Project[];
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
      <br />
      <div className="projectsGrid">
        {projects.map((project) => (
          <figure key={project.title} className="projectCard">
            {project.image ? (
              <img
                src={`/images/project/${project.image}`}
                alt={project.title}
                className="projectImage"
              />
            ) : (
              <div className="projectImage empty" />
            )}
            <figcaption>{project.title}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
