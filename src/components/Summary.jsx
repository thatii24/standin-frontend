import { useState } from 'react'

export default function Summary({ data, onRestart }) {
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const summary = data ?? {}
  const duration = summary.duration ?? '—'
  const questionsCount = summary.questions_count ?? 0
  const keyPoints = Array.isArray(summary.key_points) ? summary.key_points : []
  const topics = Array.isArray(summary.topics) ? summary.topics : []
  const transcript = Array.isArray(summary.transcript) ? summary.transcript : []

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="rounded-2xl bg-gray-800 p-8 shadow-xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Meeting Complete</h1>
          <p className="mt-2 text-gray-400">Here is your StandIn summary</p>
        </header>

        <div className="mb-8 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gray-800 p-4 text-center">
            <p className="text-3xl font-bold text-blue-400">{duration}</p>
            <p className="mt-1 text-sm text-gray-400">Duration</p>
          </div>
          <div className="rounded-xl bg-gray-800 p-4 text-center">
            <p className="text-3xl font-bold text-blue-400">{questionsCount}</p>
            <p className="mt-1 text-sm text-gray-400">Questions Answered</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="mb-3 font-semibold text-white">Key Points</h2>
          <ul className="space-y-2">
            {keyPoints.map((point, i) => (
              <li key={i} className="flex gap-2 text-gray-300">
                <span aria-hidden>✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 font-semibold text-white">Topics Discussed</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <span
                key={i}
                className="rounded-full bg-blue-900 px-3 py-1 text-sm text-blue-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 className="font-semibold text-white">Full Transcript</h2>
            <button
              type="button"
              onClick={() => setTranscriptOpen((open) => !open)}
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              {transcriptOpen ? 'Hide' : 'Show'}
            </button>
          </div>
          {transcriptOpen && (
            <div className="max-h-64 overflow-y-auto rounded-xl bg-gray-900 p-4">
              <ul className="space-y-3">
                {transcript.map((line, i) => (
                  <li key={i}>
                    <p className="text-xs text-gray-400">
                      {line.role ?? '—'}
                    </p>
                    <p className="text-sm text-white">
                      {line.content ?? line.text ?? ''}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <button
          type="button"
          onClick={() => onRestart()}
          className="w-full rounded-xl bg-blue-600 py-3 px-8 font-bold text-white hover:bg-blue-700"
        >
          Start New Meeting
        </button>
      </div>
    </div>
  )
}
