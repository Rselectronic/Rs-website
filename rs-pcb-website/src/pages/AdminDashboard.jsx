import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut, Plus, Edit3, Trash2, Eye, Save, ArrowLeft, X,
  FileText, Calendar, User, Link2, Image, AlignLeft, Type, Upload, Trash
} from 'lucide-react'
import {
  isAdminLoggedIn, adminLogout, getAllPosts,
  createPost, updatePost, deletePost, generateSlug, compressImage
} from '../utils/ArticlesStorage'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [view, setView] = useState('list') // 'list' | 'editor'
  const [editingSlug, setEditingSlug] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [dragActive, setDragActive] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)

  // Form state
  const [form, setForm] = useState({
    title: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Anas Patel',
    excerpt: '',
    image: '',
    content: '',
  })

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      navigate('/admin', { replace: true })
      return
    }
    loadPosts()
  }, [navigate])

  const loadPosts = async () => {
    const data = await getAllPosts()
    setPosts(data)
  }

  const handleLogout = () => {
    adminLogout()
    navigate('/admin')
  }

  const showSuccess = (msg) => {
    setSuccessMsg(msg)
    setTimeout(() => setSuccessMsg(''), 3000)
  }

  const showError = (msg) => {
    setErrorMsg(msg)
    setTimeout(() => setErrorMsg(''), 4000)
  }

  // Image upload handler — compresses and stores as base64 in Firestore
  const handleImageUpload = async (file) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      showError('Please upload an image file (JPG, PNG, WebP)')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      showError('Image must be under 10MB')
      return
    }
    setUploadingImage(true)
    try {
      const compressed = await compressImage(file)
      setForm((prev) => ({ ...prev, image: compressed }))
      showSuccess('Image ready!')
    } catch (err) {
      showError('Failed to process image: ' + err.message)
    }
    setUploadingImage(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files[0]
    handleImageUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => setDragActive(false)

  // Auto-generate slug from title
  const handleTitleChange = (title) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: editingSlug ? prev.slug : generateSlug(title),
    }))
  }

  const resetForm = () => {
    setForm({
      title: '',
      slug: '',
      date: new Date().toISOString().split('T')[0],
      author: 'Anas Patel',
      excerpt: '',
      image: '',
      content: '',
    })
    setEditingSlug(null)
  }

  const openNewPost = () => {
    resetForm()
    setView('editor')
  }

  const openEditPost = (post) => {
    setForm({ ...post })
    setEditingSlug(post.slug)
    setView('editor')
  }

  const handleSave = async () => {
    // Validation
    if (!form.title.trim()) return showError('Title is required')
    if (!form.slug.trim()) return showError('Slug is required')
    if (!form.date) return showError('Date is required')
    if (!form.excerpt.trim()) return showError('Excerpt is required')
    if (!form.content.trim()) return showError('Content is required')

    try {
      if (editingSlug) {
        await updatePost(editingSlug, form)
        showSuccess('Post updated successfully!')
      } else {
        await createPost(form)
        showSuccess('Post published successfully!')
      }
      await loadPosts()
      setView('list')
      resetForm()
    } catch (err) {
      showError(err.message)
    }
  }

  const handleDelete = async (slug) => {
    await deletePost(slug)
    await loadPosts()
    setShowDeleteConfirm(null)
    showSuccess('Post deleted')
  }

  if (!isAdminLoggedIn()) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-sierra-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}RS Logo.png`} alt="RS" className="h-8 w-auto brightness-0 invert" />
            <div>
              <h1 className="text-white font-bold text-sm">Articles Admin</h1>
              <p className="text-gray-500 text-xs">R.S. Electronique Inc.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}Articles`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-3 h-3" /> View Articles
            </a>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-red-400 border border-white/10 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3 h-3" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Success / Error Messages */}
      {successMsg && (
        <div className="max-w-7xl mx-auto px-6 mt-4">
          <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm flex items-center justify-between">
            {successMsg}
            <button onClick={() => setSuccessMsg('')}><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}
      {errorMsg && (
        <div className="max-w-7xl mx-auto px-6 mt-4">
          <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-center justify-between">
            {errorMsg}
            <button onClick={() => setErrorMsg('')}><X className="w-4 h-4" /></button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ==================== LIST VIEW ==================== */}
        {view === 'list' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-sierra-900">Articles Posts</h2>
                <p className="text-gray-500 text-sm mt-1">{posts.length} article{posts.length !== 1 ? 's' : ''} published</p>
              </div>
              <button
                onClick={openNewPost}
                className="px-5 py-2.5 bg-pcb-600 text-white text-sm font-semibold rounded-lg hover:bg-pcb-500 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> New Post
              </button>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No Articles posts yet</p>
                <button onClick={openNewPost} className="mt-4 text-pcb-600 text-sm font-semibold hover:underline">
                  Write your first post
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 text-left">
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Date</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Author</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {posts.map((post) => (
                      <tr key={post.slug} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-sm font-semibold text-sierra-900 leading-snug">{post.title}</p>
                          <p className="text-xs text-gray-400 mt-1 truncate max-w-md">{post.excerpt}</p>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell">
                          <span className="text-sm text-gray-500">{post.author}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <a
                              href={`${import.meta.env.BASE_URL}Articles/${post.slug}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 text-gray-400 hover:text-pcb-600 rounded-lg hover:bg-pcb-50 transition-colors"
                              title="Preview"
                            >
                              <Eye className="w-4 h-4" />
                            </a>
                            <button
                              onClick={() => openEditPost(post)}
                              className="p-2 text-gray-400 hover:text-pcb-600 rounded-lg hover:bg-pcb-50 transition-colors"
                              title="Edit"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setShowDeleteConfirm(post.slug)}
                              className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* ==================== EDITOR VIEW ==================== */}
        {view === 'editor' && (
          <>
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => { setView('list'); resetForm() }}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-sierra-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Posts
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setView('list'); resetForm() }}
                  className="px-4 py-2 text-sm text-gray-500 hover:text-sierra-900 border border-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2.5 bg-pcb-600 text-white text-sm font-semibold rounded-lg hover:bg-pcb-500 transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingSlug ? 'Update Post' : 'Publish Post'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Editor */}
              <div className="lg:col-span-2 space-y-6">
                {/* Title */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <Type className="w-4 h-4 text-pcb-500" /> Title
                  </label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="input-field text-lg font-semibold"
                    placeholder="Your Articles post title..."
                  />
                </div>

                {/* Excerpt */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <AlignLeft className="w-4 h-4 text-pcb-500" /> Excerpt
                  </label>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                    className="input-field resize-none"
                    rows={3}
                    placeholder="A short summary that appears on the Articles listing page..."
                  />
                  <p className="text-xs text-gray-400 mt-2">1-2 sentences. This shows on the Articles listing page as a preview.</p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <FileText className="w-4 h-4 text-pcb-500" /> Content
                  </label>
                  <textarea
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    className="input-field resize-none font-mono text-sm leading-relaxed"
                    rows={18}
                    placeholder="Write your full article here...&#10;&#10;Use blank lines to separate paragraphs.&#10;&#10;Each block of text separated by a blank line will become its own paragraph on the website."
                  />
                  <p className="text-xs text-gray-400 mt-2">Tip: Leave a blank line between paragraphs. Each block becomes a separate paragraph.</p>
                </div>
              </div>

              {/* Sidebar Settings */}
              <div className="space-y-6">
                {/* Slug */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <Link2 className="w-4 h-4 text-pcb-500" /> URL Slug
                  </label>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="input-field text-sm"
                    placeholder="my-Articles-post-title"
                  />
                  <p className="text-xs text-gray-400 mt-2">Auto-generated from title. This is the URL path: /Articles/{form.slug || '...'}</p>
                </div>

                {/* Date */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <Calendar className="w-4 h-4 text-pcb-500" /> Publish Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="input-field text-sm"
                  />
                </div>

                {/* Author */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-2">
                    <User className="w-4 h-4 text-pcb-500" /> Author
                  </label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="input-field text-sm"
                    placeholder="Author name"
                  />
                </div>

                {/* Image Upload */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <label className="flex items-center gap-2 text-sm font-semibold text-sierra-900 mb-3">
                    <Image className="w-4 h-4 text-pcb-500" /> Cover Image
                  </label>

                  {form.image ? (
                    <div className="relative group">
                      <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                        <img
                          src={form.image}
                          alt="Cover preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-3">
                        <label className="p-2.5 bg-white rounded-lg cursor-pointer hover:bg-gray-100 transition-colors" title="Replace image">
                          <Upload className="w-4 h-4 text-sierra-900" />
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e.target.files[0])}
                          />
                        </label>
                        <button
                          onClick={() => setForm({ ...form, image: '' })}
                          className="p-2.5 bg-white rounded-lg hover:bg-red-50 transition-colors"
                          title="Remove image"
                        >
                          <Trash className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      className={`relative border-2 border-dashed rounded-xl transition-colors ${
                        dragActive
                          ? 'border-pcb-500 bg-pcb-50'
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                      }`}
                    >
                      <label className="flex flex-col items-center justify-center py-8 cursor-pointer">
                        {uploadingImage ? (
                          <div className="w-8 h-8 border-2 border-pcb-200 border-t-pcb-600 rounded-full animate-spin" />
                        ) : (
                          <>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                              dragActive ? 'bg-pcb-100' : 'bg-gray-100'
                            }`}>
                              <Upload className={`w-5 h-5 ${dragActive ? 'text-pcb-600' : 'text-gray-400'}`} />
                            </div>
                            <p className="text-sm font-medium text-sierra-900">
                              {dragActive ? 'Drop image here' : 'Click to upload'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">or drag and drop</p>
                            <p className="text-xs text-gray-400 mt-0.5">JPG, PNG, WebP — Max 5MB</p>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e.target.files[0])}
                        />
                      </label>
                    </div>
                  )}
                </div>

                {/* Quick Info */}
                <div className="bg-pcb-50 rounded-2xl border border-pcb-100 p-6">
                  <h4 className="text-sm font-semibold text-sierra-900 mb-2">Quick Tips</h4>
                  <ul className="text-xs text-gray-500 space-y-2">
                    <li>• Title and slug are required</li>
                    <li>• Slug auto-generates from title</li>
                    <li>• Leave blank lines in content for new paragraphs</li>
                    <li>• Cover image is optional but recommended</li>
                    <li>• Posts appear newest first on the Articles page</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-lg font-bold text-sierra-900">Delete Post?</h3>
            <p className="text-sm text-gray-500 mt-2">
              This will permanently remove the Articles post. This action cannot be undone.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-4 py-2 text-sm text-gray-500 hover:text-sierra-900 border border-gray-200 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
              >
                Delete Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}