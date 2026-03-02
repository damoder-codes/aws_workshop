const mockLeaks = [
  { label: 'Takeout habit', amount: 280, action: 'Meal prep two dinners on Sundays.' },
  { label: 'Unused subscriptions', amount: 65, action: 'Cancel 3 stale app renewals.' },
  { label: 'Weekend impulse shopping', amount: 190, action: 'Use a 48-hour cool-off rule.' },
]

export default function FinleyDashboard() {
  const leakTotal = mockLeaks.reduce((a, b) => a + b.amount, 0)

  return (
    <section className="panel cool">
      <h2>🤝 Finley — Your Finance Companion</h2>
      <p className="subtitle">
        Friendly, non-robotic budgeting guidance with mock data while we shape UI/UX.
      </p>
      <article className="card hero">
        <h3>This month in one line</h3>
        <p>
          “You could redirect <strong>${leakTotal}</strong>/month by fixing small leaks — enough to fund emergency savings and investments.”
        </p>
      </article>
      <div className="grid">
        {mockLeaks.map((leak) => (
          <article className="card" key={leak.label}>
            <h3>{leak.label}</h3>
            <p className="money">-${leak.amount}/mo</p>
            <small>Finley suggests: {leak.action}</small>
          </article>
        ))}
      </div>
    </section>
  )
}
