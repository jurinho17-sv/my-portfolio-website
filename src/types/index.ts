export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  categories: string[]
  image?: string | null
  published: boolean
  content: string
  readingTime: number
}

export interface Project {
  slug: string
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  featured?: boolean
  date?: string
  content?: string
}

export interface Category {
  name: string
  count: number
  slug: string
}

export interface SiteMetadata {
  title: string
  description: string
  keywords: string[]
  author: string
  url: string
  ogImage: string
}
