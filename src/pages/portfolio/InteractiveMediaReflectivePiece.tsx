// src/pages/portfolio/InteractiveMediaReflectivePiece.tsx
import { Link } from 'react-router-dom'

export default function InteractiveMediaReflectivePiece() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">

        {/* Back link */}
        <Link
          to="/portfolio/interactive-media"
          className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide"
        >
          ← Back to Interactive Media
        </Link>

        <div className="mt-6">

          {/* Title */}
          <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight uppercase text-emerald-50 mb-6">
            Reflective Piece: Personal Reflection
          </h1>

          {/* Description */}
          <p className="text-emerald-100/85 text-[14px] mb-6">
            
          </p>

          {/* YouTube / Video Embed */}
          <div className="w-full aspect-video overflow-hidden rounded-md shadow-lg mb-6">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/WXWgiBLmJ18" // replace with your video URL
              title="Reflective Piece Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Additional Notes / Text */}
          <div className="text-emerald-100/85 text-[14px] space-y-4">
            <p>
              Manthan Thool | 25065394 
            </p>
            
          </div>

        </div>
      </div>
    </section>
  )
}