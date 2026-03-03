import { useState } from 'react'
import GainQuestDashboard from './components/GainQuestDashboard'
import FinleyDashboard from './components/FinleyDashboard'

export default function App() {
  const [view, setView] = useState('gainquest')

  return (
    <main className="app-shell">
      <header>
        <h1>Creative Dual Dashboards</h1>
        <p>Two distinct React dashboard concepts in one fresh repo-ready project.</p>
        <nav>
          <button className={view === 'gainquest' ? 'active' : ''} onClick={() => setView('gainquest')}>GainQuest</button>
          <button className={view === 'finley' ? 'active' : ''} onClick={() => setView('finley')}>Finley</button>
        </nav>
      </header>
      {view === 'gainquest' ? <GainQuestDashboard /> : <FinleyDashboard />}
    </main>
  )
}
