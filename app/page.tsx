import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-gray-600">
          这是一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的博客模板。
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold mb-4">最新文章</h3>
        <div className="space-y-4">
          <article className="border rounded-lg p-4 hover:shadow-md transition">
            <Link href="/posts/hello-world">
              <h4 className="text-lg font-medium text-blue-600">欢迎使用 Next.js 博客模板</h4>
              <p className="text-gray-500 text-sm mt-1">2024-01-01</p>
            </Link>
          </article>
        </div>
      </section>
    </div>
  )
}
