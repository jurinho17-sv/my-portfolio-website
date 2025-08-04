import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || 'Untitled Project',
        description: data.description || '',
        techStack: data.techStack || [],
        githubUrl: data.githubUrl || '',
        liveUrl: data.liveUrl || null,
        image: data.image || null,
        featured: data.featured || false,
        date: data.date || new Date().toISOString(),
        content,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allProjectsData
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured)
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const mdxPath = path.join(projectsDirectory, `${slug}.mdx`)
    
    let filePath = fullPath
    if (!fs.existsSync(fullPath) && fs.existsSync(mdxPath)) {
      filePath = mdxPath
    }
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled Project',
      description: data.description || '',
      techStack: data.techStack || [],
      githubUrl: data.githubUrl || '',
      liveUrl: data.liveUrl || null,
      image: data.image || null,
      featured: data.featured || false,
      date: data.date || new Date().toISOString(),
      content,
    }
  } catch {
    return null
  }
}

export function getProjectsByTech(tech: string): Project[] {
  return getAllProjects().filter(project => 
    project.techStack.some(t => 
      t.toLowerCase().includes(tech.toLowerCase())
    )
  )
}

export function getAllTechStack(): string[] {
  const projects = getAllProjects()
  const techStack = new Set<string>()
  
  projects.forEach(project => {
    project.techStack.forEach(tech => {
      techStack.add(tech)
    })
  })
  
  return Array.from(techStack).sort()
} 