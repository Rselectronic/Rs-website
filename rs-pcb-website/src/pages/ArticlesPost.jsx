import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react'
import { getAllPosts } from '../utils/ArticlesStorage'

export default function ArticlesPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [prevPost, setPrevPost] = useState(null)
  const [nextPost, setNextPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    getAllPosts().then((posts) => {
      const index = posts.findIndex((p) => p.slug === slug)
      if (index === -1) {
        setNotFound(true)
      } else {
        setPost(posts[index])
        setPrevPost(index < posts.length - 1 ? posts[index + 1] : null)
        setNextPost(index > 0 ? posts[index - 1] : null)
      }
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-pcb-200 border-t-pcb-600 rounded-full animate-spin" />
      </div>
    )
  }

  if (notFound) return <Navigate to="/Articles" replace />

  const paragraphs = post.content.split('\n\n')

  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/Articles"
            className="inline-flex items-center gap-2 text-sm text-pcb-400 hover:text-pcb-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 mt-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8">
          <div className="aspect-[2/1] bg-gradient-to-br from-sierra-900 to-sierra-950 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-600 text-base leading-[1.85] mb-6">
                {para}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-pcb-50 rounded-2xl border border-pcb-100 text-center">
            <h3 className="text-xl font-bold text-sierra-900">Ready to Start Your Project?</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              Upload your BOM and Gerber files and get a detailed quote within 24 hours.
            </p>
            <Link to="/quote" className="btn-primary text-sm px-7 py-3.5 mt-5 inline-flex">
              Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                to={`/Articles/${prevPost.slug}`}
                className="group p-4 rounded-xl border border-gray-100 hover:border-pcb-200 transition-colors"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider">Previous</span>
                <p className="text-sm font-semibold text-sierra-900 group-hover:text-pcb-600 transition-colors mt-1 leading-snug">
                  {prevPost.title}
                </p>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                to={`/Articles/${nextPost.slug}`}
                className="group p-4 rounded-xl border border-gray-100 hover:border-pcb-200 transition-colors text-right"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wider">Next</span>
                <p className="text-sm font-semibold text-sierra-900 group-hover:text-pcb-600 transition-colors mt-1 leading-snug">
                  {nextPost.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
