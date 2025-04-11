
import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [filter, setFilter] = useState<string | null>(null);

  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === null
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === tag
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors w-full"
                    >
                      <span>View Project</span>
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
