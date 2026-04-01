import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Quote from './pages/Quote'
import FAQ from './pages/FAQ'
import Gallery from './pages/Gallery'
import Articles from './pages/Articles'
import ArticlesPost from './pages/ArticlesPost'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import ScrollToTop from './components/ScrollToTop'
import FloatingCTA from './components/FloatingCTA'

function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Articles/:slug" element={<ArticlesPost />} />

          {/* Admin pages (no navbar/footer) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingCTA />}
    </div>
  )
}

export default App