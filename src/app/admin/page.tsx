import { getAllPosts } from '@/lib/blog'
import { getAllProjects } from '@/lib/projects'
import Container from '@/components/ui/Container'
import AdminPanel from '@/components/admin/AdminPanel'

export default function AdminPage() {
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

      <AdminPanel posts={posts} projects={projects} />
    </Container>
  )
} 