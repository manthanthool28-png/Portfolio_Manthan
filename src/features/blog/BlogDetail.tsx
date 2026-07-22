// src/features/blog/BlogDetail.tsx
import { Link, useParams } from 'react-router-dom'
import { useMemo, useRef, useState } from 'react'

import AestheticImg from '../../assets/Aesthetic.jpg'
import WorkspaceImg from '../../assets/p2.jpg'
import ShowreelImg from '../../assets/showreel-thumb.jpg'

const HeadshotImg = `${import.meta.env.BASE_URL}assets/h3.jpg`

// --- POST DATA ----------------------------------------------------------

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
    image: AestheticImg,
  },
  '2': {
    title: 'The Headshot',
    lead: '',
    content:
      'This portrait leans into simplicity, a clean background, monochrome tones, and a centered composition that keeps all the attention on the expression. The blazer and plain dark t-shirt strike a balance between professional and relaxed, making the image suitable for portfolios, resumes, or an “About” section. By keeping the tones soft and the pose natural, the photo feels honest rather than overly posed, which makes it easier for viewers to connect.',
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
    image: HeadshotImg,
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
    image: WorkspaceImg,
  },
  // 4TH CARD – STIK-IE TAPE ASSIGNMENT
  'video-1': {
    title: 'Tough Tape ',
    lead:
      'This 1:24 minutes advertisement plays with a hand‑drawn black‑hole portal, taped to everyday objects and used as a shortcut through reality.',
    content:
      'A sheet of paper taped to a fridge becomes a portal that makes anything placed on it drop through; later, the same portal is taped onto a TV so the character can step into a distant scene. When the cheap tape fails and the portal falls, leaving her stuck inside the TV, it delivers the punchline that only a tough, reliable tape can “hold a universe” of ideas.',
    content2:
      'We were a team of three on this project. I handled direction, cinematography, and film editing, while Srushti was in front of the camera and managed most of the props, and Pranit took care of sound design, SFX, and VFX. Together we storyboarded each beat, explored locations, planned the lighting setups, and picked camera angles that kept the portal gag readable, playful, and visually clear.',
    imageDescriptions: [
      '',
      'Roles & credits:',
      '• Srushti – Actor & Props',
      '• Manthan – Director, Cinematographer, Film Editor',
      '• Pranit – SFX & VFX',
      '',
      'Format & export:',
      '• 1920 × 1080, 60 fps',
      '• Duration: 1 min 26 sec',
      '• Tools: Adobe Premiere Pro & After Effects',
    ],
    locations: 'University corridors, Cappavilla Village, Ireland',
    image: ShowreelImg,
    videoUrl: 'https://www.youtube.com/embed/ig9jZU4F1Nw',
  },
} as const

// BTS image list for the carousel
const btsImages = [
  {
    src: 'assets/Desk.jpg',
    alt: 'Prop making – drawing and cutting the black-hole portal',
  },
  {
    src: 'assets/Mobile.jpg',
    alt: 'Placing the portal on the fridge for the 7UP shot',
  },
  {
    src: 'assets/Tape.JPG',
    alt: 'Rehearsing portal actions in the corridor',
  },
  {
    src: 'assets/Three.jpg',
    alt: 'Close-up camera and lighting setup',
  },
  {
    src: 'assets/vfx.jpg',
    alt: 'Editing timeline with VFX layers and sound',
  },
  {
    src: 'assets/bts-6.jpg',
    alt: 'Actor rehearsal in the corridor',
  },
  {
    src: 'assets/bts-7.jpg',
    alt: 'Kitchen / fridge framing tests for the portal shot',
  },
  {
    src: 'assets/bts-8.jpg',
    alt: 'Blocking the TV interior scene where the character is trapped',
  },
  {
    src: 'assets/bts-9.jpg',
    alt: 'Handheld camera movement tests for portal moments',
  },
  {
    src: 'assets/bts-10.jpg',
    alt: 'Recording and layering sound effects for the tape and portal',
  },
  {
    src: 'assets/bts-11.jpg',
    alt: 'Final colour grading and review of the Tough Tape timeline',
  },
]

// --- COMPONENT -----------------------------------------------------------

export default function BlogDetail() {
  const { id } = useParams()
  const post = posts[id as keyof typeof posts]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [currentBtsIndex, setCurrentBtsIndex] = useState(0)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  // NEW: PDF modal state
  const [pdfOpen, setPdfOpen] = useState(false)

  // engagement state
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [comments, setComments] = useState<{ id: number; text: string }[]>([])
  const [newComment, setNewComment] = useState('')
  const [reactions, setReactions] = useState<Record<string, number>>({
    '👏': 0,
    '🔥': 0,
    '😍': 0,
  })

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

  const isVideoPost = 'videoUrl' in post

  const closeViewer = () => {
    setViewerOpen(false)
    setScale(1)
    setTranslate({ x: 0, y: 0 })
    setFullscreenImage(null)
  }

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const delta = -e.deltaY
    const factor = delta > 0 ? 1.1 : 0.9
    setScale((s) => Math.min(5, Math.max(1, s * factor)))
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

  const openBtsFullscreen = (index: number) => {
    setFullscreenImage(btsImages[index].src)
    setCurrentBtsIndex(index)
    setScale(1)
    setTranslate({ x: 0, y: 0 })
    setViewerOpen(true)
  }

  const fullscreenSrc = fullscreenImage || (post.image as string)

  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <Link
          to="/blog"
          className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide"
        >
          ← Back to Blog
        </Link>

        <div className="mt-6 grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] bg-emerald-950/90 rounded-2xl overflow-hidden shadow-lg ring-1 ring-emerald-900/40">
          {/* LEFT: text block */}
          <div className="bg-emerald-900/95 px-8 sm:px-10 py-10 text-emerald-50 flex flex-col justify-between">
            <div>
              <h1 className="text-[clamp(2rem,4vw,3.25rem)] leading-tight font-extrabold tracking-tight uppercase max-w-[12ch]">
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
                    Film details
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

          {/* RIGHT: video + BTS + edit notes + case study + engagement */}
          <div className="bg-emerald-50/95 p-6 flex flex-col gap-6">
            {/* Main video or image (image opens zoom viewer) */}
            {isVideoPost && 'videoUrl' in post && post.videoUrl ? (
              <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200 bg-black">
                <iframe
                  src={post.videoUrl}
                  title={post.title}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setFullscreenImage(null)
                  setScale(1)
                  setTranslate({ x: 0, y: 0 })
                  setViewerOpen(true)
                }}
                className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200 bg-black/5"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[80vh] object-contain cursor-zoom-in"
                />
              </button>
            )}

            {/* BTS carousel */}
            {isVideoPost && (
              <div>
                <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-900">
                  Behind the scenes
                </h3>
                <p className="mt-1 text-[13px] text-emerald-900/80">
                  Tap an image to open it full screen, or use arrows to browse
                  prop making, portal experiments, rehearsals, and close‑ups.
                </p>

                <div className="mt-3 relative w-full max-w-3xl mx-auto">
                  <div className="overflow-hidden rounded-lg ring-1 ring-emerald-900/20">
                    <div
                      className="flex transition-transform duration-300 ease-out"
                      style={{
                        transform: `translateX(-${currentBtsIndex * 100}%)`,
                      }}
                    >
                      {btsImages.map((img, idx) => (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => openBtsFullscreen(idx)}
                          className="h-48 w-full flex-shrink-0"
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* arrows */}
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentBtsIndex((prev) =>
                        prev === 0 ? btsImages.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-emerald-900/70 text-emerald-50 w-8 h-8 flex items-center justify-center text-sm hover:bg-emerald-800"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentBtsIndex((prev) =>
                        prev === btsImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-emerald-900/70 text-emerald-50 w-8 h-8 flex items-center justify-center text-sm hover:bg-emerald-800"
                  >
                    ›
                  </button>

                  {/* dots */}
                  <div className="mt-2 flex justify-center gap-1.5">
                    {btsImages.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCurrentBtsIndex(i)}
                        className={`h-1.5 w-1.5 rounded-full ${
                          currentBtsIndex === i
                            ? 'bg-emerald-800'
                            : 'bg-emerald-300/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Editing / VFX notes */}
            {isVideoPost && (
              <div className="mt-2 rounded-xl bg-emerald-900/5 border border-emerald-900/10 p-4">
                <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-900">
                  Edit & VFX process
                </h3>
                <ul className="mt-2 space-y-1 text-[13px] text-emerald-900/85 list-disc pl-4">
                  <li>
                    Balanced colour and exposure across corridor, kitchen, and
                    TV shots.
                  </li>
                  <li>
                    Stabilised handheld clips and used slow motion to emphasise
                    key portal moments.
                  </li>
                  <li>
                    Built the black‑hole effect in After Effects with masking,
                    feathering, and motion tracking.
                  </li>
                  <li>
                    Layered SFX and music to land comedic beats, especially when
                    the weak tape fails.
                  </li>
                  <li>
                    Kept the final export under 25 MB while preserving clarity
                    for YouTube delivery.
                  </li>
                </ul>
              </div>
            )}

            {/* Case study section – only for the Tough Tape post */}
            {isVideoPost && (
              <div className="mt-3 rounded-xl border border-emerald-900/15 bg-emerald-900/3 p-4">
                <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-emerald-900">
                  Case study (A4 layout)
                </h3>
                <p className="mt-2 text-[13px] text-emerald-900/85">
                  A one‑page A4 write‑up that covers the full shoot: concept, my
                  role as director, cinematographer, and film editor, process
                  notes, and selected BTS frames from the assignment.
                </p>

                <div className="mt-3 grid gap-3 md:grid-cols-2 text-[11px]">
                  <div className="space-y-1">
                    <p className="font-semibold text-emerald-900">
                      What the document includes
                    </p>
                    <ul className="list-disc list-inside space-y-0.5 text-emerald-900/85">
                      <li>Short film overview and logline.</li>
                      <li>My contribution across direction, camera, and edit.</li>
                      <li>Step‑by‑step process from storyboard to export.</li>
                      <li>11 BTS stills with brief captions.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-emerald-900">
                      View or download
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setPdfOpen(true)}
                        className="inline-flex items-center justify-center rounded-full border border-emerald-700 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 hover:bg-emerald-700 hover:text-emerald-50"
                      >
                        Open A4 PDF
                      </button>
                      <a
                        href="./assets/tough-tape-case-study.pdf"
                        download
                        className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-100"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Engagement: minimal like / react / share + comments */}
            <div className="mt-4 space-y-3 border-t border-emerald-200/60 pt-3">
              {/* Row: like + reactions + share */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-emerald-800">
                <div className="flex items-center gap-3">
                  {/* Like – simple icon + count */}
                  <button
                    type="button"
                    onClick={() =>
                      setLiked((v) => {
                        const next = !v
                        setLikeCount((c) => c + (next ? 1 : -1))
                        return next
                      })
                    }
                    className="inline-flex items-center gap-1 text-[11px]"
                  >
                    <span
                      className={
                        liked ? 'text-emerald-700' : 'text-emerald-500'
                      }
                    >
                      {liked ? '♥' : '♡'}
                    </span>
                    <span>
                      {likeCount} {likeCount === 1 ? 'like' : 'likes'}
                    </span>
                  </button>

                  {/* Emoji reactions – small chips */}
                  <div className="flex items-center gap-1">
                    {['👏', '🔥', '😍'].map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() =>
                          setReactions((prev) => ({
                            ...prev,
                            [emoji]: (prev[emoji] || 0) + 1,
                          }))
                        }
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-200/70 px-2 py-[1px] bg-white/80 hover:bg-emerald-50"
                      >
                        <span>{emoji}</span>
                        <span className="text-[10px] text-emerald-700">
                          {reactions[emoji] || 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Share – text only */}
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.18em] text-emerald-500">
                    Share
                  </span>
                  <button
                    type="button"
                    className="underline underline-offset-2 hover:text-emerald-600"
                    onClick={() => {
                      const url = window.location.href
                      navigator.clipboard.writeText(url)
                    }}
                  >
                    Link
                  </button>
                  <button
                    type="button"
                    className="underline underline-offset-2 hover:text-emerald-600"
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href)
                      const text = encodeURIComponent(post.title)
                      window.open(
                        `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                        '_blank'
                      )
                    }}
                  >
                    X
                  </button>
                  <button
                    type="button"
                    className="underline underline-offset-2 hover:text-emerald-600"
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href)
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                        '_blank'
                      )
                    }}
                  >
                    In
                  </button>
                </div>
              </div>

              {/* Comments – minimal */}
              <div className="rounded-lg border border-emerald-200/70 bg-emerald-50/40 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                  Comments
                </p>
                <form
                  className="mt-2 space-y-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!newComment.trim()) return
                    setComments((prev) => [
                      ...prev,
                      { id: Date.now(), text: newComment.trim() },
                    ])
                    setNewComment('')
                  }}
                >
                  <textarea
                    className="w-full rounded-md border border-emerald-200 bg-white/80 px-2 py-1 text-xs text-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    rows={2}
                    placeholder="Share your thoughts…"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-semibold text-emerald-50 hover:bg-emerald-600"
                    >
                      Post
                    </button>
                  </div>
                </form>

                {comments.length > 0 && (
                  <ul className="mt-2 space-y-1.5 max-h-36 overflow-y-auto pr-1 text-xs text-emerald-900">
                    {comments.map((c) => (
                      <li
                        key={c.id}
                        className="rounded-md bg-white/80 px-2 py-1 border border-emerald-200/60"
                      >
                        {c.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF viewer modal */}
      {pdfOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 text-emerald-50 bg-emerald-900/90 border-b border-emerald-700/60">
            <div className="text-xs uppercase tracking-[0.25em]">
              Tough Tape · Case Study (A4)
            </div>
            <div className="flex items-center gap-3">
              <a
                href="./assets/tough-tape-case-study.pdf"
                download
                className="rounded-full border border-emerald-300/80 px-3 py-1 text-[11px] font-semibold text-emerald-50 hover:bg-emerald-200/15"
              >
                Download PDF
              </a>
              <button
                type="button"
                onClick={() => setPdfOpen(false)}
                className="rounded-full border border-emerald-400/70 px-3 py-1 text-[11px] font-semibold text-emerald-50 hover:bg-emerald-100/10"
              >
                Close ✕
              </button>
            </div>
          </div>

          <div className="flex-1 bg-emerald-950/95">
            <iframe
              src="/assets/tough-tape-case-study.pdf"
              title="Tough Tape Case Study"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Full-screen zoom viewer – for image posts and BTS images */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 text-emerald-100">
            <div className="font-semibold">
              {fullscreenImage ? 'Behind the scenes' : post.title}
            </div>
            <div className="flex items-center gap-3">
              {fullscreenImage && (
                <>
                  <button
                    onClick={() => {
                      const nextIndex =
                        (currentBtsIndex - 1 + btsImages.length) %
                        btsImages.length
                      setCurrentBtsIndex(nextIndex)
                      setFullscreenImage(btsImages[nextIndex].src)
                      resetZoom()
                    }}
                    className="rounded-md border border-white/20 px-2 py-1 text-sm hover:bg-white/10"
                  >
                    ‹ Prev
                  </button>
                  <button
                    onClick={() => {
                      const nextIndex =
                        (currentBtsIndex + 1) % btsImages.length
                      setCurrentBtsIndex(nextIndex)
                      setFullscreenImage(btsImages[nextIndex].src)
                      resetZoom()
                    }}
                    className="rounded-md border border-white/20 px-2 py-1 text-sm hover:bg-white/10"
                  >
                    Next ›
                  </button>
                </>
              )}

              <button
                onClick={resetZoom}
                className="rounded-md border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
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
                src={fullscreenSrc}
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
