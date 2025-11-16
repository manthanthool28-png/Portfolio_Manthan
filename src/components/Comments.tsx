import EmojiPicker from './EmojiPicker'

type Emoji = '😄' | '📚' | '😟' | '🐱' | '🐼'

export default function Comment({
  author,
  content,
  reactions,
  onReact,
}: {
  author: string
  content: string
  reactions: Record<Emoji, number>
  onReact: (emoji: Emoji) => void
}) {
  return (
    <div className="rounded border border-slate-200 p-3">
      <div className="mb-1 text-sm font-semibold">{author}</div>
      <div className="text-sm text-slate-800">{content}</div>
      <EmojiPicker reactions={reactions} onReact={onReact} />
    </div>
  )
}
