import Link from 'next/link'
import { Project } from '@/types'
import Card from '@/components/ui/Card'

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <Card hover className={className}>
      <div className="h-full flex flex-col">
        <header className="mb-4">
          <h3 className="text-lg font-semibold text-[#003262] mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-grow">
            {project.description}
          </p>
        </header>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span 
                key={tech} 
                className="px-2 py-1 bg-[#003262] text-white text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <footer className="mt-auto">
          <div className="flex gap-3">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#003262] hover:text-[#FDB515] text-sm font-medium transition-colors"
            >
              View on GitHub →
            </a>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#003262] hover:text-[#FDB515] text-sm font-medium transition-colors"
              >
                Live Demo →
              </a>
            )}
          </div>
        </footer>
      </div>
    </Card>
  )
} 