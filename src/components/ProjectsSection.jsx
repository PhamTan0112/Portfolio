import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging platform supporting instant communication and online user presence. Built with secure JWT authentication and protected communication channels using Socket.IO.",
    image: "/projects/chatapp.png",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeScript",
      "Socket.IO",
      "Tailwind CSS",
    ],
    demoUrl: "#", // Cập nhật link demo nếu có
    githubUrl: "https://github.com/PhamTan0112/Real-Time-Chat-App", // Giả định dựa trên CV
  },
  {
    id: 2,
    title: "HealthyCare Platform",
    description:
      "A healthcare management platform that streamlines appointment scheduling and patient management workflows. Features include RBAC for secure access and TanStack Query for optimized data synchronization.",
    image: "/projects/healthycare.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/PhamTan0112/HealthycareSystem",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects highlighting my experience in building real-time applications 
          and scalable healthcare management systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full border border-border"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Icons */}
                <div className="flex gap-3 mt-auto pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/PhamTan0112"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};