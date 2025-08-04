import { getAllPosts, getAllCategories, getCategoryPostCount } from '@/lib/blog'
import { BlogPost, Category } from '@/types'
import Container from '@/components/ui/Container'
import BlogCard from '@/components/blog/BlogCard'
import BlogFilter from '@/components/blog/BlogFilter'

export default function BlogPage() {
  // Get posts and categories on the server side
  const posts = getAllPosts()
  const allCategories = getAllCategories()
  
  // Create category objects with counts
  const categories: Category[] = allCategories.map(name => ({
    name,
    count: getCategoryPostCount(name),
    slug: name.toLowerCase().replace(/\s+/g, '-')
  }))

  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003262] mb-4">Blog</h1>
        <p className="text-gray-600">
          Thoughts on CS, Data Science, and my journey at UC Berkeley
        </p>
      </div>
      
      <BlogFilter posts={posts} categories={categories} />
    </Container>
  )
}
