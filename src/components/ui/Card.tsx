import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = 'border border-gray-200 rounded-lg p-6 bg-white'
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-[#003262] transition-all duration-300' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
} 