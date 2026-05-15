// src/main.tsx
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'

import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BlogDetail from './features/blog/BlogDetail'

// Portfolio detail pages
import UiDesign from './pages/portfolio/UiDesign'
import Photography from './pages/portfolio/Photography'
import Videography from './pages/portfolio/Videography'
import Events from './pages/portfolio/Events'
import InteractiveMedia from './pages/portfolio/InteractiveMedia'
import InteractiveMediaSoundscape from './pages/portfolio/InteractiveMediaSoundscape' // NEW
import InteractiveMediaReflectivePiece from './pages/portfolio/InteractiveMediaReflectivePiece'
import InteractiveVideoReflection from './pages/portfolio/InteractiveVideoReflection' // NEW

import CaseStudyPDF from './features/blog/CaseStudyPDF'

// 👇 Hash router
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetail /> },
      { path: 'contact', element: <Contact /> },

      // Portfolio detail pages
      { path: 'portfolio/ui-design', element: <UiDesign /> },
      { path: 'portfolio/photography', element: <Photography /> },
      { path: 'portfolio/videography', element: <Videography /> },
      { path: 'portfolio/events', element: <Events /> },
      { path: 'portfolio/interactive-media', element: <InteractiveMedia /> },
      { path: 'portfolio/interactive-media/reflective-piece', element: <InteractiveMediaReflectivePiece /> },
      { path: 'portfolio/interactive-media/video-reflection', element: <InteractiveVideoReflection /> },

      // NEW: Algorithmic Soundscape video page
      {
        path: 'portfolio/interactive-media/soundscape',
        element: <InteractiveMediaSoundscape />,
      },

      // Blog case study
      { path: 'blog/case-study', element: <CaseStudyPDF /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </Provider>
)