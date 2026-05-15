import { useState } from 'react'
import SetupForm from './components/SetupForm'
import MeetingRoom from './components/MeetingRoom'
import Summary from './components/Summary'

function App() {
  const [screen, setScreen] = useState('setup')
  const [summaryData, setSummaryData] = useState(null)

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {screen === 'setup' && (
        <SetupForm onComplete={() => setScreen('meeting')} />
      )}
      {screen === 'meeting' && (
        <MeetingRoom
          onEnd={(data) => {
            setSummaryData(data)
            setScreen('summary')
          }}
        />
      )}
      {screen === 'summary' && (
        <Summary
          data={summaryData}
          onRestart={() => setScreen('setup')}
        />
      )}
    </div>
  )
}

export default App
