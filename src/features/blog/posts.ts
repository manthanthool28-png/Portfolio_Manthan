// src/features/blog/posts.ts
export type PostType = 'image' | 'video'

export interface Post {
  id: string
  title: string
  excerpt: string
  cover: string
  date: string
  type: PostType
  videoUrl?: string
  body?: string
}
// still in posts.ts
import AestheticImg from '../../assets/Aesthetic.jpg'
import PassionImg from '../../assets/p2.jpg'
import ShowreelImg from '../../assets/showreel-thumb.jpg'

const HeadshotImg = `${import.meta.env.BASE_URL}assets/h3.jpg`

export const posts: Post[] = [
  {
    id: '1',
    title: 'Aesthetic Shots',
    excerpt:
      'Soft echoes, arched ceilings, and a tunnel of light quietly guiding you toward what comes next.',
    cover: AestheticImg,
    date: 'Nov 2025',
    type: 'image',
  },
  {
    id: '2',
    title: 'Professional Headshots',
    excerpt:
      'Soft light, steady eyes, and a quiet confidence framed in grayscale.',
    cover: HeadshotImg,
    date: 'Nov 2025',
    type: 'image',
  },
  {
    id: '3',
    title: 'Passion In Life',
    excerpt:
      'Warm light, quiet chaos, and a desk that knows all my ideas before anyone else does.',
    cover: PassionImg,
    date: 'Nov 2025',
    type: 'image',
  },
  {
    id: 'creative-showreel',
    title: 'Creative Showreel 2025',
    excerpt:
      'A short video reel that stitches together my favorite shoots, edits, and motion shots.',
    cover: ShowreelImg,
    date: 'Nov 2025',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX', // or mp4 URL
    body:
      'In this showreel, I bring together portraits, event coverage, and product visuals. Each clip is crafted to highlight mood, pacing, and storytelling through light.',
  },
]
