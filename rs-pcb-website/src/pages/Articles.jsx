import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { getAllPosts } from '../utils/ArticlesStorage'

export default function Articles() {
  const [articlePosts, setArticlePosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((posts) => {
      setArticlePosts(posts)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Articles</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Insights &
              <br />
              <span className="text-pcb-400">Articles</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Industry knowledge, assembly tips, and company updates from the R.S. Electronique team.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-pcb-200 border-t-pcb-600 rounded-full animate-spin" />
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlePosts.map((post) => (
              <Link
                key={post.slug}
                to={`/Articles/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-pcb-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-sierra-900 to-sierra-950 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-sierra-900 group-hover:text-pcb-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-pcb-600 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          )}

          {!loading && articlePosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
