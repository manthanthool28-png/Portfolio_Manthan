// src/features/blog/CaseStudyPDF.tsx
export default function CaseStudyPDF() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* A4 page */}
      <div
        className="mx-auto bg-white shadow-lg"
        style={{
          width: '210mm',
          height: '297mm',
          padding: '20mm',
          boxSizing: 'border-box',
          color: '#1a1a1a',
          fontFamily: '"Segoe UI", system-ui, sans-serif',
        }}
      >
        {/* Header */}
        <div className="border-b-2 border-emerald-700 pb-4 mb-6">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-emerald-950">
            Tough Tape
          </h1>
          <p className="text-sm text-emerald-600 uppercase tracking-[0.15em] mt-1">
            Short Film Case Study
          </p>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
            Project Overview
          </h2>
          <p className="text-xs leading-relaxed text-gray-800">
            A 1:24 minute commercial built around a hand‑drawn portal taped to
            everyday objects. The story follows a character who uses this
            black‑hole portal as a shortcut through reality until the cheap tape
            fails and leaves her stuck inside a TV, delivering the final
            message: only a tough, reliable tape can “hold a universe” of ideas.
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Duration</h3>
            <p className="text-gray-800">1 min 24 sec · 1920 × 1080 · 24 fps</p>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Team</h3>
            <p className="text-gray-800">
              Srushti – Actor & Props
              <br />
              Pranit – SFX & VFX
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Locations</h3>
            <p className="text-gray-800">
              University corridors & Cappavilla Village, Ireland
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-emerald-700 mb-1">Tools</h3>
            <p className="text-gray-800">
              Adobe Premiere Pro
              <br />
              Adobe After Effects
            </p>
          </div>
        </div>

        {/* My contribution */}
        <div className="mb-6 p-3 bg-emerald-50 border-l-4 border-emerald-700">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
            My Contribution
          </h3>
          <ul className="text-xs text-gray-800 space-y-1 list-disc list-inside">
            <li>
              <strong>Director:</strong> Defined the portal concept, scripted
              the beats, and guided performances to hit comedic timing.
            </li>
            <li>
              <strong>Cinematographer:</strong> Planned shot list and
              compositions, chose lenses and camera movement, and balanced
              exposure across corridor, kitchen, and TV scenes.
            </li>
            <li>
              <strong>Film Editor:</strong> Built the narrative rhythm, refined
              pacing around portal reveals, and aligned music/SFX with visual
              beats.
            </li>
          </ul>
        </div>

        {/* Process */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
            Process Overview
          </h3>
          <div className="text-xs text-gray-800 space-y-2">
            <p>
              <strong>Pre‑production:</strong> Sketched storyboards for each gag,
              tested the portal prop with paper and tape, and walked through
              blocking with the actor to keep the effect readable in camera.
            </p>
            <p>
              <strong>Production:</strong> Shot over one day using available
              light plus practical fixtures. Captured multiple takes of key
              beats like objects dropping through the portal and the final “tape
              fail” moment to have options in the edit.
            </p>
            <p>
              <strong>Post‑production:</strong> Edited selects into a tight
              84‑second cut, created the portal effect in After Effects using
              masking, feathering, and motion tracking, then color‑graded and
              mixed sound for online delivery.
            </p>
          </div>
        </div>

        {/* BTS grid – 8 placeholders */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
            Behind the Scenes
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {[
              'Prop making',
              'Portal tests',
              'Corridor setup',
              'Kitchen setup',
              'TV scene',
              'Actor rehearsal',
              'Camera & lights',
              'Edit timeline',
            ].map((label) => (
              <div
                key={label}
                className="bg-gray-200 h-16 rounded flex items-center justify-center text-[9px] text-gray-600 text-center px-1"
              >
                {label}
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 mt-1">
            Replace each placeholder with BTS stills from the shoot (JPG/PNG)
            when exporting this page as a PDF.
          </p>
        </div>

        {/* Footer */}
        <div className="text-[10px] text-gray-600 border-t border-gray-300 pt-3 mt-6">
          <p>Manthan Thool · Director · Cinematographer · Film Editor</p>
          <p>University of Limerick · December 2025</p>
        </div>
      </div>

      {/* Print button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => window.print()}
          className="rounded-full bg-emerald-700 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  )
}
