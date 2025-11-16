import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'


export default function BlogList() {
  const posts = useAppSelector((s) => s.blog.posts)
  return (
    <ul className="space-y-5">
      {posts.map((p) => (
        <li key={p.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-xl font-bold">
            <Link className="hover:underline" to={`/blog/${p.id}`}>{p.title}</Link>
          </h2>
          <p className="mt-2 text-slate-700">{p.content.slice(0, 200)}...</p>
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="mt-3 w-full max-h-64 rounded-lg object-cover"
            />
          )}
        </li>
      ))}
    </ul>
  )
}
