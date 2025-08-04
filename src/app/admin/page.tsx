import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function AdminPage() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003262] mb-4">Admin Panel</h1>
        <p className="text-gray-600">
          Content management for your portfolio
        </p>
      </div>

      {/* Content Management */}
      <div className="space-y-8">
        {/* Blog Posts */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#003262]">Blog Posts</h2>
            <Button
              href="https://github.com/jurinho17-sv/my-portfolio-website/edit/main/content/blog"
              target="_blank"
              variant="primary"
            >
              Add New Post
            </Button>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Create new blog posts by adding Markdown files to the <code className="bg-gray-200 px-1 rounded">content/blog/</code> directory.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#003262]">Projects</h2>
            <Button
              href="https://github.com/jurinho17-sv/my-portfolio-website/edit/main/content/projects"
              target="_blank"
              variant="primary"
            >
              Add New Project
            </Button>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Create new projects by adding Markdown files to the <code className="bg-gray-200 px-1 rounded">content/projects/</code> directory.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-[#003262] mb-2">How to manage content:</h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Click "Add New Post" or "Add New Project" to create content on GitHub</li>
          <li>Edit existing content by navigating to the respective directories</li>
          <li>Changes will be deployed automatically when you commit to GitHub</li>
          <li>For local development, edit files in VS Code and push to GitHub</li>
        </ol>
      </div>
    </Container>
  )
} 