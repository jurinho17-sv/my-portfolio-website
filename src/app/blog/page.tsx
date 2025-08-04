import { getAllPosts } from '@/lib/blog'
import { BlogPost } from '@/types'
import Container from '@/components/ui/Container'
import BlogCard from '@/components/blog/BlogCard'

export default function BlogPage() {
  // Get posts on the server side
  const posts = getAllPosts()

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003262] mb-4">Blog</h1>
        <p className="text-gray-600">
          Thoughts on CS, Data Science, and my journey at UC Berkeley
        </p>
      </div>
      
      <div className="grid gap-6">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts available yet.
            </p>
          </div>
        ) : (
          posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))
        )}
      </div>
    </Container>
  )
}
