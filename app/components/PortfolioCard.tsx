type Project = {
  title: string;
  image?: string;
  id?: string;
};

type PortfolioCardProps = {
  name: string;
  skills: string[];
  projects: Project[];
  likes?: Record<string, boolean>;
  onLike?: (projectId: string) => void;
};

export default function PortfolioCard({
  name,
  skills,
  projects,
  likes = {},
  onLike = () => {},
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
            {project.id && (
              <div className="projectFooter">
                <button
                  className={`likeButton ${likes[project.id] ? 'liked' : ''}`}
                  onClick={() => onLike(project.id!)}
                  title={likes[project.id] ? "Unlike this project" : "Like this project"}
                >
                  {likes[project.id] ? '❤️ Liked' : '🤍 Like'}
                </button>
              </div>
            )}
          </figure>
        ))}
      </div>
    </article>
  );
}
