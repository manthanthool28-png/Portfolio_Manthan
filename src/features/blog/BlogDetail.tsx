// src/features/blog/BlogDetail.tsx
import { Link, useParams } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

// If you store images in src/assets, import them and replace the paths below.
// For public/assets, keep the '/assets/...' paths.
const posts = {
  '1': {
    title: 'The Passage',
    lead: '',
    content:
      'This composition feels aesthetic because it balances structure and empty space, focusing only on shapes, light, and perspective. The glass subtly reflects the outside world without distracting from the tunnel, turning the scene into a calm visual metaphor for a quiet journey toward something new.',
    content2: '',
    imageDescriptions: [
      'Device: Apple iPhone 16',
      'Camera: Main camera, 26 mm equivalent',
      'Resolution: 24 MP (4284 × 5712), JPEG',
      'Aperture: f/1.6',
      'Shutter speed: 1/539 s',
      'ISO: 50',
      'Exposure compensation: 0 ev',
      'Capture time: Saturday, 1 Nov 2025, 2:23 PM',
    ],
    locations: 'The Main Building | University of Limerick | Ireland',
    image: '/assets/Aesthetic.jpg',
  },
  '2': {
    title: 'The Headshot',
    lead: '',
    content:
      'This portrait leans into simplicity, a clean background, monochrome tones, and a centered composition that keeps all the attention on the expression. The blazer and plain dark t‑shirt strike a balance between professional and relaxed, making the image suitable for portfolios, resumes, or an “About” section. By keeping the tones soft and the pose natural, the photo feels honest rather than overly posed, which makes it easier for viewers to connect.',
    content2: '',
    imageDescriptions: [
      'Device: Apple iPhone 16',
      'Camera: Main camera, 26 mm equivalent',
      'Resolution: 24 MP (1484 × 1978), JPEG',
      'Aperture: f/1.6',
      'Shutter speed: 1/100 s',
      'ISO: 125',
      'Exposure compensation: 0 ev',
      'Capture time: Saturday, 13 Nov 2025, 1:13 PM',
    ],
    locations: 'The CS Building | University of Limerick | Ireland',
    image: '/assets/h4.jpg',
  },
  '3': {
    title: 'The Workspace',
    lead: '',
    content:
      'This picture shows the place where I spend most of my creative hours in my workspace. The warm light over the desk feels like a small island in the dark, just like late night Figma sessions when the world is quiet but my ideas are awake. The laptop with a live design and the tablet with frames reveal my process, not just the final result, while the corkboard of keychains and little characters is my wall of inspiration, reminding me of the stories and visuals that shaped my style.',
    content2:
      'I composed the image so the desk runs horizontally across the frame, with the screen in the center and the corkboard and mug balancing the right side, creating a wide, cinematic feel. The word “Mindspace” is placed softly on the wall behind the setup to name this scene: it’s not just a desk, it’s the mental space where my thoughts, hobbies, and projects all come together. By combining the organized layout of my tools with a playful, personal background and that subtle “Mindspace” text, the photo captures exactly what this space means to me as a passion image.',
    imageDescriptions: [
      'Device: Apple iPhone 16',
      'Camera: Main camera, 26 mm equivalent',
      'Resolution: 8 MP (3915 × 2211), JPEG',
      'Aperture: f/1.6',
      'Shutter speed: 1/50 s',
      'ISO: 64',
      'Exposure compensation: -0.3 ev',
      'Capture time: Saturday, 15 Nov 2025, 2:22 AM',
    ],
    locations: 'Cappavilla Village | University Of Limerick | Ireland',
    image: '/assets/p2.jpg',
  },
} as const

export default function BlogDetail() {
  const { id } = useParams()
  const post = posts[id as keyof typeof posts]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  if (!post) {
    return (
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 text-white">
          <p>Post not found.</p>
          <Link to="/blog" className="mt-4 inline-block underline">
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  // Zoom viewer helpers
  const closeViewer = () => {
    setViewerOpen(false)
    setScale(1)
    setTranslate({ x: 0, y: 0 })
  }

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const delta = -e.deltaY
    const factor = delta > 0 ? 1.1 : 0.9
    setScale((s) => Math.min(5, Math.max(1, s * factor))) // clamp 1x–5x
  }

  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
  }

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!dragging.current || scale === 1) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }))
  }

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    dragging.current = false
    ;(e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId)
  }

  const resetZoom = () => {
    setScale(1)
    setTranslate({ x: 0, y: 0 })
  }

  const imgStyle = useMemo(
    () => ({
      transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
      transformOrigin: 'center center',
      maxHeight: '90vh',
      maxWidth: '95vw',
      objectFit: 'contain' as const,
    }),
    [scale, translate]
  )

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <Link to="/blog" className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide">
          ← Back to Blog
        </Link>

        <div className="mt-6 grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] bg-emerald-950/90 rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-900/40">
          {/* Left: text block in deep green */}
          <div className="bg-emerald-900/95 px-8 sm:px-10 py-10 text-emerald-50 flex flex-col justify-between">
            <div>
              <h1 className="text-[clamp(2rem,4vw,3.25rem)] leading-tight font-extrabold tracking-tight uppercase max-w-[10ch]">
                {post.title}
              </h1>

              <div className="mt-7 space-y-6 text-[13.5px] leading-relaxed">
                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Content
                  </h2>
                  <p className="mt-2 opacity-90">{post.lead}</p>
                  {post.content && (
                    <p className="mt-2 opacity-90">{post.content}</p>
                  )}
                  {post.content2 && (
                    <p className="mt-2 opacity-90">{post.content2}</p>
                  )}
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Image descriptions
                  </h2>
                  <ul className="mt-2 space-y-1 opacity-90">
                    {post.imageDescriptions.map((line) => (
                      <li key={line} className="text-[13px]">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-100">
                    Locations
                  </h2>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.25em] opacity-90">
                    {post.locations}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-emerald-700/60">
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-200">
                By Manthan Thool
              </div>
            </div>
          </div>

          {/* Right: single hero image on cream background with click-to-zoom */}
          <div className="bg-emerald-50/95 p-6 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="w-full max-w-3xl rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200 bg-black/5"
              title="Click to zoom"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </button>
            <p className="mt-3 text-xs text-emerald-900/80">
              Click the image to zoom and explore details.
            </p>
          </div>
        </div>
      </div>

      {/* Full-screen zoom viewer (same interface) */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 text-emerald-100">
            <div className="font-semibold">{post.title}</div>
            <div className="flex items-center gap-3">
              <button
                onClick={resetZoom}
                className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg白/10"
              >
                Reset
              </button>
              <button
                onClick={closeViewer}
                className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div
            className="relative flex-1 overflow-hidden touch-pan-y"
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="absolute inset-0 grid place-items-center">
              <img
                src={post.image}
                alt={post.title}
                className="select-none max-w-none"
                draggable={false}
                style={imgStyle}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
