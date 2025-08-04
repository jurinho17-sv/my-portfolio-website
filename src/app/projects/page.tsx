import { getAllProjects } from '@/lib/projects'
import { Project } from '@/types'
import Container from '@/components/ui/Container'
import ProjectCard from '@/components/projects/ProjectCard'

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003262] mb-4">Projects</h1>
        <p className="text-gray-600">
          Technical projects and contributions showcasing my skills and interests
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects available at the moment.
            </p>
          </div>
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={project.slug || index} project={project} />
          ))
        )}
      </div>
    </Container>
  )
}
