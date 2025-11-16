import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addBlogPost } from '../features/blog/blogSlice'

export default function BlogPostForm() {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImageFile(file)
    setPreview(file ? URL.createObjectURL(file) : null)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    const id = crypto.randomUUID()
    const reader = new FileReader()
    reader.onload = () => {
      dispatch(
        addBlogPost({
          id,
          title,
          content,
          image: typeof reader.result === 'string' ? reader.result : undefined,
          comments: [],
        })
      )
      setTitle('')
      setContent('')
      setImageFile(null)
      setPreview(null)
    }
    if (imageFile) {
      reader.readAsDataURL(imageFile)
    } else {
      reader.onload?.(new ProgressEvent('load') as ProgressEvent<FileReader>)
    }
  }

  return (
    <form onSubmit={submit} className="mb-8 rounded border border-slate-200 p-4">
      <h3 className="mb-3 text-lg font-semibold">Create a new post</h3>
      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Title</label>
        <input
          className="w-full rounded border border-slate-300 px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
      </div>
      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Content</label>
        <textarea
          className="w-full rounded border border-slate-300 px-3 py-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          rows={4}
        />
      </div>
      <div className="mb-3">
        <label className="mb-1 block text-sm font-medium">Image (optional)</label>
        <input type="file" accept="image/*" onChange={onFile} />
        {preview && <img src={preview} className="mt-3 w-full max-h-64 object-cover rounded" alt="preview" />}
      </div>
<button className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500">
  Submit
</button>
    </form>
  )
}
