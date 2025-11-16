// src/pages/Blog.tsx
import { Link } from 'react-router-dom'

const posts = [
  {
    id: '1',
    title: 'Aesthetic Shots',
    excerpt: 'Soft echoes, arched ceilings, and a tunnel of light quietly guiding you toward what comes next.',
    cover: '/assets/Aesthetic.jpg', // put files in public/assets or import from src/assets
    date: 'Nov 2025',
  },
  {
    id: '2',
    title: 'Professional Headshots',
    excerpt: 'Soft light, steady eyes, and a quiet confidence framed in grayscale.',
    cover: '/assets/h4.jpg',
    date: 'Nov 2025',
  },
  {
    id: '3',
    title: 'Passion In Life ',
    excerpt: 'Warm light, quiet chaos, and a desk that knows all my ideas before anyone else does.',
    cover: '/assets/p2.jpg',
    date: 'Nov 2025',
  },
]

export default function Blog() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Blog</h1>
        <p className="mt-2 text-emerald-100">Latest shoots, Portraits , and Aesthetic shots .</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.id}`}
              className="group rounded-xl bg-white/95 text-slate-900 ring-1 ring-slate-200 shadow-sm overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wider text-slate-500">{p.date}</div>
                <h2 className="mt-1 font-semibold text-lg">{p.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{p.excerpt}</p>
                <div className="mt-3 text-sm font-semibold text-emerald-700">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
