import { useMemo, useState } from 'react'
import { lockAdmin } from '../admin/adminAuth'
import { useNavigate } from 'react-router-dom'

type CustomPage = {
  id: string
  title: string
  slug: string
  body: string
  imageUrl: string
  videoUrl: string
  type: 'page' | 'blog'
}

const initialForm: Omit<CustomPage, 'id'> = {
  title: '',
  slug: '',
  body: '',
  imageUrl: '',
  videoUrl: '',
  type: 'page',
}

export default function ControlRoom() {
  const [pages, setPages] = useState<CustomPage[]>([])
  const [form, setForm] = useState(initialForm)
  const navigate = useNavigate()

  const embedVideoUrl = useMemo(() => {
    if (!form.videoUrl) return ''

    if (form.videoUrl.includes('youtube.com/watch?v=')) {
      const id = form.videoUrl.split('v=')[1]?.split('&')[0]
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }

    if (form.videoUrl.includes('youtu.be/')) {
      const id = form.videoUrl.split('youtu.be/')[1]?.split('?')[0]
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }

    if (form.videoUrl.includes('/embed/')) {
      return form.videoUrl
    }

    return form.videoUrl
  }, [form.videoUrl])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const addWrap = (before: string, after = before) => {
    setForm((prev) => ({
      ...prev,
      body: `${prev.body}${before}Your text here${after}`,
    }))
  }

  const addHeading = () => {
    setForm((prev) => ({
      ...prev,
      body: `${prev.body}\n## New Heading\n`,
    }))
  }

  const addParagraph = () => {
    setForm((prev) => ({
      ...prev,
      body: `${prev.body}\nNew paragraph text.\n`,
    }))
  }

  const addBullet = () => {
    setForm((prev) => ({
      ...prev,
      body: `${prev.body}\n- New bullet point`,
    }))
  }

  const handleAddPage = () => {
    if (!form.title.trim() || !form.slug.trim()) return

    const newPage: CustomPage = {
      id: crypto.randomUUID(),
      title: form.title,
      slug: form.slug,
      body: form.body,
      imageUrl: form.imageUrl,
      videoUrl: embedVideoUrl,
      type: form.type,
    }

    setPages((prev) => [newPage, ...prev])
    setForm(initialForm)
  }

  const handleDelete = (id: string) => {
    setPages((prev) => prev.filter((page) => page.id !== id))
  }

  const handleLogout = () => {
    lockAdmin()
    navigate('/')
  }

  const renderFormattedPreview = (text: string) => {
    const lines = text.split('\n')

    return lines.map((line, index) => {
      if (line.startsWith('## ')) {
        return (
          <h3 key={index} className="mt-4 text-lg font-bold text-emerald-950">
            {line.replace('## ', '')}
          </h3>
        )
      }

      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-5 list-disc text-sm text-slate-700">
            {line.replace('- ', '')}
          </li>
        )
      }

      if (!line.trim()) {
        return <div key={index} className="h-2" />
      }

      const formatted = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')

      return (
        <p
          key={index}
          className="text-sm leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      )
    })
  }

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold uppercase text-emerald-50">
              Control Room
            </h1>
            <p className="mt-2 text-sm text-emerald-100/75">
              Create hidden pages, blog-style entries, video sections, and image-led layouts.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAddPage}
              className="rounded-lg bg-emerald-200 text-emerald-950 px-4 py-3 font-semibold hover:bg-white transition"
            >
              + Add Page
            </button>

            <button
              onClick={handleLogout}
              className="rounded-lg border border-emerald-700 bg-emerald-900/40 text-emerald-50 px-4 py-3 font-semibold hover:bg-emerald-800/70 transition"
            >
              Exit
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-emerald-800 bg-emerald-950/90 p-6">
            <div className="grid gap-4">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              >
                <option value="page">Page</option>
                <option value="blog">Blog</option>
              </select>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Page title"
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              />

              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="page-slug"
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              />

              <div className="rounded-xl border border-emerald-700 bg-emerald-900/40 p-3">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                  Text tools
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => addWrap('**', '**')}
                    className="rounded-md bg-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-950"
                  >
                    Bold
                  </button>
                  <button
                    type="button"
                    onClick={() => addWrap('*', '*')}
                    className="rounded-md bg-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-950"
                  >
                    Italic
                  </button>
                  <button
                    type="button"
                    onClick={addHeading}
                    className="rounded-md bg-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-950"
                  >
                    Heading
                  </button>
                  <button
                    type="button"
                    onClick={addParagraph}
                    className="rounded-md bg-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-950"
                  >
                    Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={addBullet}
                    className="rounded-md bg-emerald-200 px-3 py-2 text-xs font-semibold text-emerald-950"
                  >
                    Bullet
                  </button>
                </div>
              </div>

              <textarea
                name="body"
                value={form.body}
                onChange={handleChange}
                placeholder="Write your page text here..."
                rows={12}
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              />

              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              />

              <input
                name="videoUrl"
                value={form.videoUrl}
                onChange={handleChange}
                placeholder="YouTube URL or embed URL"
                className="rounded-lg border border-emerald-700 bg-emerald-900/60 px-4 py-3 text-emerald-50"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Live preview
              </div>

              <h2 className="mt-3 text-2xl font-bold text-emerald-950">
                {form.title || 'Untitled page'}
              </h2>

              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                /{form.slug || 'page-slug'}
              </p>

              {form.imageUrl ? (
                <img
                  src={form.imageUrl}
                  alt={form.title || 'Preview'}
                  className="mt-4 h-56 w-full rounded-xl object-cover"
                />
              ) : null}

              {embedVideoUrl ? (
                <div className="mt-4 overflow-hidden rounded-xl bg-black">
                  <iframe
                    className="w-full aspect-video"
                    src={embedVideoUrl}
                    title="Video preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : null}

              <div className="mt-4 space-y-2">
                {renderFormattedPreview(form.body)}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-800 bg-emerald-950/90 p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                Saved hidden pages
              </div>

              <div className="mt-4 space-y-4">
                {pages.length === 0 ? (
                  <p className="text-sm text-emerald-100/70">
                    No pages created yet.
                  </p>
                ) : (
                  pages.map((page) => (
                    <article
                      key={page.id}
                      className="rounded-xl border border-emerald-800 bg-emerald-900/60 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                            {page.type}
                          </div>
                          <h3 className="mt-2 text-lg font-semibold text-emerald-50">
                            {page.title}
                          </h3>
                          <p className="mt-1 text-sm text-emerald-100/70">
                            /{page.slug}
                          </p>
                        </div>

                        <button
                          onClick={() => handleDelete(page.id)}
                          className="rounded-md border border-red-400/40 px-3 py-2 text-xs font-semibold text-red-200 hover:bg-red-500/10"
                        >
                          Delete
                        </button>
                      </div>

                      {page.imageUrl ? (
                        <img
                          src={page.imageUrl}
                          alt={page.title}
                          className="mt-4 h-40 w-full rounded-lg object-cover"
                        />
                      ) : null}

                      {page.videoUrl ? (
                        <div className="mt-4 overflow-hidden rounded-lg bg-black">
                          <iframe
                            className="w-full aspect-video"
                            src={page.videoUrl}
                            title={page.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : null}

                      <div className="mt-4 space-y-2">
                        {renderFormattedPreview(page.body)}
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}