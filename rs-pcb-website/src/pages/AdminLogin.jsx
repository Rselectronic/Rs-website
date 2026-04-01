import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, LogIn, AlertCircle } from 'lucide-react'
import { adminLogin, isAdminLoggedIn } from '../utils/ArticlesStorage'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (isAdminLoggedIn()) {
      navigate('/admin/dashboard', { replace: true })
    }
  }, [navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      const success = adminLogin(username, password)
      if (success) {
        navigate('/admin/dashboard')
      } else {
        setError('Invalid username or password')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-sierra-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pcb-600/10 rounded-2xl mb-4">
            <Lock className="w-8 h-8 text-pcb-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-500 text-sm mt-2">R.S. Electronique Inc. — Articles Manager</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {error && (
            <div className="mb-5 flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pcb-500/30 focus:border-pcb-500 transition-all"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pcb-500/30 focus:border-pcb-500 transition-all"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 px-6 py-3.5 bg-pcb-600 text-white font-semibold rounded-lg
                       hover:bg-pcb-500 transition-all duration-200 flex items-center justify-center gap-2
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 text-xs mt-6">
          This area is restricted to authorized personnel only.
        </p>
      </div>
    </div>
  )
}