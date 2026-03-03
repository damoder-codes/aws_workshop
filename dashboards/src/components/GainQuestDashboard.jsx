import { useMemo, useState } from 'react'

const weeklyPlan = [
  { week: 1, phase: 'Foundation', intensity: 60, xp: 80 },
  { week: 2, phase: 'Build', intensity: 70, xp: 120 },
  { week: 3, phase: 'Intensify', intensity: 78, xp: 180 },
  { week: 4, phase: 'Peak', intensity: 85, xp: 250 },
]

export default function GainQuestDashboard() {
  const [completed, setCompleted] = useState({})

  const completedCount = Object.values(completed).filter(Boolean).length
  const totalXP = useMemo(
    () =>
      Object.entries(completed).reduce((sum, [key, done]) => {
        if (!done) return sum
        const week = Number(key.split('-')[0])
        return sum + (weeklyPlan[week - 1]?.xp ?? 0) / 3
      }, 0),
    [completed],
  )

  return (
    <section className="panel warm">
      <h2>🏋️ GainQuest</h2>
      <p className="subtitle">A playful 12-week-style training tracker with mock progression data.</p>
      <div className="stat-row">
        <div><strong>{completedCount}</strong><span>sessions done</span></div>
        <div><strong>{Math.round(totalXP)}</strong><span>XP earned</span></div>
      </div>
      {weeklyPlan.map((w) => (
        <article key={w.week} className="card">
          <header>
            <h3>Week {w.week}</h3>
            <span>{w.phase}</span>
          </header>
          <div className="progress">
            <div style={{ width: `${w.intensity}%` }} />
          </div>
          <small>{w.intensity}% intensity · {w.xp} XP available</small>
          <div className="chips">
            {[1, 2, 3].map((s) => {
              const key = `${w.week}-${s}`
              const done = !!completed[key]
              return (
                <button key={key} onClick={() => setCompleted((p) => ({ ...p, [key]: !done }))} className={done ? 'done' : ''}>
                  {done ? '✅' : 'Session'} {s}
                </button>
              )
            })}
          </div>
        </article>
      ))}
    </section>
  )
}
