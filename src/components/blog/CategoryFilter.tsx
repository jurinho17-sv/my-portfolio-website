'use client'
import { useState } from 'react'
import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  className?: string
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  onCategoryChange,
  className = ''
}: CategoryFilterProps) {
  const toggleCategory = (categoryName: string) => {
    const newSelected = selectedCategories.includes(categoryName)
      ? selectedCategories.filter(cat => cat !== categoryName)
      : [...selectedCategories, categoryName]
    onCategoryChange(newSelected)
  }

  const selectAll = () => {
    onCategoryChange(categories.map(cat => cat.name))
  }

  const clearAll = () => {
    onCategoryChange([])
  }

  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Filter by Category
        </h2>
        <div className="flex gap-2">
          <button
            onClick={selectAll}
            className="text-sm text-[#003262] hover:text-[#FDB515] transition-colors"
          >
            Select All
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={clearAll}
            className="text-sm text-[#003262] hover:text-[#FDB515] transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map(category => (
          <label 
            key={category.name} 
            className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() => toggleCategory(category.name)}
              className="rounded border-[#003262] text-[#003262] focus:ring-[#FDB515] focus:ring-2"
              aria-label={`Filter by ${category.name}`}
            />
            <span className="text-sm text-gray-700 flex-1">
              {category.name}
            </span>
            <span className="text-xs text-gray-500">
              ({category.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  )
} 