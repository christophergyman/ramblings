import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import ArchivePage from './pages/ArchivePage'
import AboutPage from './pages/AboutPage'
import RssPage from './pages/RssPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="rss" element={<RssPage />} />
          <Route path=":slug" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
