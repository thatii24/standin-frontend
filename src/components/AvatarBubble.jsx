export default function AvatarBubble({ text, audioUrl }) {
  function handlePlayAudio() {
    if (audioUrl == null) return
    const audio = new Audio(audioUrl)
    void audio.play().catch(() => {})
  }

  return (
    <div className="bg-gray-800 border border-blue-500 rounded-2xl p-5 my-3 max-w-2xl">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl" aria-hidden="true">
          🤖
        </span>
        <span className="text-blue-400 text-sm font-semibold">StandIn</span>
      </div>
      <p className="text-white text-base leading-relaxed">{text}</p>
      {audioUrl != null && (
        <button
          type="button"
          onClick={handlePlayAudio}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
        >
          Play Audio
        </button>
      )}
    </div>
  )
}
