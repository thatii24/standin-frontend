export default function TranscriptBubble({ text, role }) {
  const isParticipant = role === 'participant'

  return (
    <div
      className={`flex w-full flex-col mb-3 ${
        isParticipant ? 'items-end' : 'items-start'
      }`}
    >
      <span
        className={`text-xs mb-1 ${
          isParticipant ? 'text-gray-400' : 'text-blue-400'
        }`}
      >
        {isParticipant ? 'Participant' : 'StandIn'}
      </span>
      <div
        className={`rounded-2xl px-4 py-3 max-w-sm text-white text-sm ${
          isParticipant
            ? 'bg-gray-700'
            : 'bg-gray-800 border border-blue-500'
        }`}
      >
        {text}
      </div>
    </div>
  )
}
