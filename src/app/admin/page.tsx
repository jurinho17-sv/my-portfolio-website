'use client'
import { useState } from 'react'
import { getAllPosts } from '@/lib/blog'
import { getAllProjects } from '@/lib/projects'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'blog' | 'projects'>('blog')
  const posts = getAllPosts()
  const projects = getAllProjects()

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003262] mb-4">Admin Panel</h1>
        <p className="text-gray-600">
          Content management for your portfolio
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('blog')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'blog'
              ? 'bg-[#003262] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Blog Posts ({posts.length})
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'projects'
              ? 'bg-[#003262] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Projects ({projects.length})
        </button>
      </div>

      {/* Content Management */}
      {activeTab === 'blog' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#003262]">Blog Posts</h2>
            <Button
              href="https://github.com/juhokim/portfolio/edit/main/content/blog"
              target="_blank"
              variant="primary"
            >
              Add New Post
            </Button>
          </div>
          
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.slug} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#003262]">{post.title}</h3>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                    <div className="flex gap-2 mt-2">
                      {post.categories.map(category => (
                        <span key={category} className="px-2 py-1 bg-[#003262] text-white text-xs rounded">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      href={`https://github.com/juhokim/portfolio/edit/main/content/blog/${post.slug}.md`}
                      target="_blank"
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'projects' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#003262]">Projects</h2>
            <Button
              href="https://github.com/juhokim/portfolio/edit/main/content/projects"
              target="_blank"
              variant="primary"
            >
              Add New Project
            </Button>
          </div>
          
          <div className="space-y-4">
            {projects.map(project => (
              <div key={project.slug} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#003262]">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <div className="flex gap-2 mt-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-[#FDB515] text-[#003262] text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      href={`https://github.com/juhokim/portfolio/edit/main/content/projects/${project.slug}.md`}
                      target="_blank"
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-[#003262] mb-2">How to manage content:</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Click "Add New Post" or "Add New Project" to create content on GitHub</li>
          <li>Edit existing content by clicking "Edit" buttons</li>
          <li>Changes will be deployed automatically when you commit to GitHub</li>
          <li>For local development, edit files in VS Code and push to GitHub</li>
        </ol>
      </div>
    </Container>
  )
} 