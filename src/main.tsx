// src/main.tsx

import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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

// New portfolio detail pages
import UiDesign from './pages/portfolio/UiDesign'
import Photography from './pages/portfolio/Photography'
import Videography from './pages/portfolio/Videography'
import Events from './pages/portfolio/Events'

// 👇 add basename here
const router = createBrowserRouter(
  [
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

        { path: 'portfolio/ui-design', element: <UiDesign /> },
        { path: 'portfolio/photography', element: <Photography /> },
        { path: 'portfolio/videography', element: <Videography /> },
        { path: 'portfolio/events', element: <Events /> },
      ],
    },
  ],
  {
    basename: '/Portfolio_Manthan',   // 👈 important for GitHub Pages
    future: {
      // v7 flags if you want to enable them later
    },
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    />
  </Provider>
)
