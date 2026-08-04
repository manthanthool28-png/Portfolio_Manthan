import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Emoji = '😄' | '📚' | '😟' | '🐱' | '🐼'

export interface Comment {
  id: string
  author: string
  content: string
  reactions: Record<Emoji, number>
}

export interface BlogPost {
  id: string
  title: string
  content: string
  image?: string
  comments: Comment[]
}

interface BlogState {
  posts: BlogPost[]
}

const initialState: BlogState = {
  posts: [
    {
      id: '1',
      title: 'Welcome to My Portfolio!',
      content: 'This is the first sample blog post. Feel free to comment and react!',
      comments: [
        {
          id: 'c1',
          author: 'Jane',
          content: 'Love your work!',
          reactions: { '😄': 3, '🐱': 1, '📚': 0, '😟': 0, '🐼': 0 },
        },
      ],
    },
    {
      id: '2',
      title: 'Designing delightful UX',
      content: 'Notes on micro-interactions, motion, and feedback loops.',
      comments: [
        {
          id: 'c2',
          author: 'Alex',
          content: 'Great insights on motion!',
          reactions: { '😄': 2, '🐱': 0, '📚': 1, '😟': 0, '🐼': 0 },
        },
      ],
    },
  ],
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlogPost(state: BlogState, action: PayloadAction<BlogPost>) {
      state.posts.push(action.payload)
    },
    addComment(
      state: BlogState,
      action: PayloadAction<{ postId: string; comment: Comment }>
    ) {
      const post = state.posts.find((p) => p.id === action.payload.postId)
      if (post) post.comments.push(action.payload.comment)
    },
    reactToComment(
      state: BlogState,
      action: PayloadAction<{ postId: string; commentId: string; emoji: Emoji }>
    ) {
      const post = state.posts.find((p) => p.id === action.payload.postId)
      const comment = post?.comments.find((c) => c.id === action.payload.commentId)
      if (comment) {
        comment.reactions[action.payload.emoji] =
          (comment.reactions[action.payload.emoji] ?? 0) + 1
      }
    },
  },
})

export const { addBlogPost, addComment, reactToComment } = blogSlice.actions
export default blogSlice.reducer
