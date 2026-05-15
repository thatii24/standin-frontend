import { useState } from 'react'
import axios from 'axios'

export default function SetupForm({ onComplete }) {
  const [meetingTitle, setMeetingTitle] = useState('')
  const [role, setRole] = useState('')
  const [update, setUpdate] = useState('')
  const [context, setContext] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await axios.post('http://localhost:3001/api/setup', {
        meetingTitle,
        role,
        update,
        context,
      })
      onComplete()
    } catch (err) {
      const message =
        err.response?.data?.message ??
        err.response?.data?.error ??
        err.message ??
        'Something went wrong. Please try again.'
      setError(typeof message === 'string' ? message : 'Request failed.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full bg-gray-700 text-white rounded-lg p-3 border border-gray-600 focus:outline-none focus:border-blue-500'

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg mx-auto mt-20 p-8 rounded-2xl bg-gray-800 shadow-xl">
        <h1 className="text-3xl font-bold text-white">StandIn</h1>
        <p className="text-gray-400 mt-2 mb-8">
          Set up your AI stand-in before the meeting
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="meetingTitle" className="block text-sm text-gray-400 mb-1">
              Meeting Title
            </label>
            <input
              id="meetingTitle"
              type="text"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm text-gray-400 mb-1">
              Your Role
            </label>
            <input
              id="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={inputClass}
              placeholder="Frontend Developer"
              required
            />
          </div>

          <div>
            <label htmlFor="update" className="block text-sm text-gray-400 mb-1">
              Your Update
            </label>
            <textarea
              id="update"
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              className={inputClass}
              placeholder="I finished the dashboard"
              rows={4}
              required
            />
          </div>

          <div>
            <label htmlFor="context" className="block text-sm text-gray-400 mb-1">
              Extra Context <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              id="context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className={inputClass}
              placeholder="No blockers"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:pointer-events-none text-white font-bold py-3 rounded-lg mt-4"
          >
            {loading ? 'Setting up...' : 'Submit'}
          </button>

          {error && (
            <p className="text-red-400 text-sm mt-2" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
