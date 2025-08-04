export const siteConfig = {
  name: 'Ju Ho Kim',
  title: 'Ju Ho Kim',
  description: 'Statistics major undergraduate student at UC Berkeley preparing for Big Tech internships. Personal portfolio showcasing projects, blog posts, and professional experience.',
  url: 'https://juhokim.com',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/juhokim',
    linkedin: 'https://linkedin.com/in/juhokim',
    email: 'juhokim@berkeley.edu',
  },
  author: {
    name: 'Ju Ho Kim',
    email: 'juhokim@berkeley.edu',
    university: 'UC Berkeley',
    major: 'Statistics (CDSS)',
  },
  keywords: [
    'Ju Ho Kim',
    'UC Berkeley', 
    'Statistics',
    'Data Science',
    'Computer Science',
    'Portfolio',
    'Big Tech',
    'Internships'
  ] as string[],
  colors: {
    primary: '#003262', // Berkeley Blue
    secondary: '#FDB515', // Berkeley Gold
    background: '#FFFFFF',
    text: '#171717',
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ],
  // Categories will be managed dynamically from blog posts
  // No hardcoded categories - they'll be generated from actual blog post categories
} as const

export type SiteConfig = typeof siteConfig 