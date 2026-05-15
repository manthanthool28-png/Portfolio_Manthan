import { Link } from 'react-router-dom'

export default function InteractiveMediaSoundscape() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <Link
          to="/portfolio/interactive-media"
          className="text-emerald-100 hover:text-white text-sm uppercase tracking-wide"
        >
          ← Back to Interactive Media
        </Link>

        <div className="mt-6">
          <h1 className="text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight uppercase text-emerald-50 mb-6">
            Algorithmic Soundscape Performance
          </h1>

          <p className="text-emerald-100/85 text-[14px] mb-6">
            A live algorithmic music performance using generative soundscapes. Watch how patterns evolve over time.
          </p>

          <div className="w-full aspect-video overflow-hidden rounded-md shadow-lg mb-10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vi7EpUg3cZo"
              title="Algorithmic Soundscape Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-6 text-emerald-100/85 text-[14px] leading-relaxed">
            <div>
              <h2 className="text-emerald-50 font-semibold text-xl uppercase mb-2">
                The Rules
              </h2>
              <p>
                The rules were derived from directly mapping UNO card elements to musical parameters:
              </p>
              <ul className="list-decimal list-inside ml-4 space-y-1 mt-2">
                <li>Colours determine sound families: Red - Drums, Green - FX, Blue - Bass, Yellow - Synth.</li>
                <li>Numbers 0-9 determine density: 0-3 for 1 touch, 4-6 for 2 touches, 7-9 for 3 touches.</li>
                <li>Special cards introduce dramatic change: Skip/Draw 2 for a pause in playback and an extra card, Wild for a change in tempo/FX.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-emerald-50 font-semibold text-xl uppercase mb-2">
                The Process
              </h2>
              <p>
                This process is inspired by random processes in art such as John Cage&apos;s I Ching. The familiarity of UNO makes the algorithm easy to perform by anyone. The randomness in the process makes sure that the performance is slightly different each time while staying within set boundaries.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Intro (1-8): 1-2 sounds</li>
                <li>Peak (9-24): 4-6 sounds and specials</li>
                <li>Dissolve (25-36): fading to silence</li>
              </ul>
              <p className="mt-2">
                The performer follows the exact sequence of 20 cards from the printed score while drawing cards every two bars. The actions, such as “UNMUTE Nagara” or “MUTE 1 FX,” make the cause and effect very visible.
              </p>
              <p>
                The constraints influenced the design process since I had no control over the code. I had to choose between mute or unmute, similar to game design. The 108-card UNO deck was just the right amount of complexity.
              </p>
              <p>
                The outcome is a predictable but unpredictable art piece where my role is to follow the rules rather than creating algorithmic performance.
              </p>
              <p>
                The possibilities for future versions are to implement UNO house rules or Auto-Tune via Soundtrap for vocal cards. This assignment showed me how games and web DAWs can be powerful tools for composition with the aid of algorithmic rules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}