type Emoji = '😄' | '📚' | '😟' | '🐱' | '🐼'

export default function EmojiPicker({
  reactions,
  onReact,
}: {
  reactions: Record<Emoji, number>
  onReact: (emoji: Emoji) => void
}) {
  const emojis: Emoji[] = ['😄', '📚', '😟', '🐱', '🐼']
  return (
    <div className="mt-2 flex items-center gap-2">
      {emojis.map((e) => (
        <button
          key={e}
          type="button"
          onClick={() => onReact(e)}
          className="inline-flex items-center gap-1 rounded border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50"
          aria-label={`React with ${e}`}
        >
          <span>{e}</span>
          <span className="text-slate-500">{reactions[e] ?? 0}</span>
        </button>
      ))}
    </div>
  )
}
