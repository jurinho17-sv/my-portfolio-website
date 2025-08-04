'use client'
import { useState, useMemo } from 'react'
import { BlogPost, Category } from '@/types'
import BlogCard from './BlogCard'
import CategoryFilter from './CategoryFilter'

interface BlogFilterProps {
  posts: BlogPost[]
  categories: Category[]
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
  // Filter posts based on selected categories
  const filteredPosts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return posts
    }
    return posts.filter(post => 
      post.categories.some(cat => selectedCategories.includes(cat))
    )
  }, [posts, selectedCategories])

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />
      
      <div className="grid gap-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">
              No blog posts found for the selected categories.
            </p>
            <button
              onClick={() => setSelectedCategories([])}
              className="text-[#003262] hover:text-[#FDB515] transition-colors"
            >
              View all posts
            </button>
          </div>
        ) : (
          filteredPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))
        )}
      </div>
    </>
  )
} 