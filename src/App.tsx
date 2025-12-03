import { useEffect, useState } from 'react'
import './App.css'

const scopeDetails = [
  { label: 'Applies to', value: 'All Singularity spaces: venue, chat, streams' },
  { label: 'Who is covered', value: 'Participants, mentors, sponsors, guests' },
  { label: 'Timeline', value: 'From kickoff to final awards and after-hours meetups' },
]

const principles = [
  {
    title: 'Respect every builder',
    summary: 'We critique ideas, not people, and we make room for every voice.',
    bullets: [
      'Listen fully before responding and invite quieter teammates to share.',
      'Honor pronouns, names, and identities without debate.',
      'Celebrate cultural differences while keeping feedback specific and kind.',
    ],
  },
  {
    title: 'Protect the space',
    summary: 'Safety extends to labs, lounges, online channels, and demo time.',
    bullets: [
      'Keep walkways clear, gear labeled, and ask before filming anyone.',
      'Share demos responsibly—no malware, gore, or shock content.',
      'Report unsafe behavior, even if it feels small or unintentional.',
    ],
  },
  {
    title: 'Build ethically',
    summary: 'Projects must respect laws, data rights, and community trust.',
    bullets: [
      'Use datasets and assets you can legally use and cite open-source work.',
      'Obtain consent before handling personal information or biometrics.',
      'Decline requests that weaponize technology or target marginalized groups.',
    ],
  },
]

const boundaries = [
  'Harassment, discrimination, or hate speech in any format.',
  'Bullying, intimidation, or retaliation after a concern is raised.',
  'Recording or photographing someone without permission.',
  'Substance abuse inside program spaces or bringing weapons onsite.',
  'Projects that violate privacy laws, contain stolen data, or glamorize violence.',
]

const reminders = [
  {
    title: 'Default to transparency',
    detail: 'Document key decisions, share blockers early, and keep mentors looped in.',
  },
  {
    title: 'Care for yourself',
    detail: 'Hydrate, rest, and take screen breaks—fatigue fuels preventable conflict.',
  },
  {
    title: 'Share credit generously',
    detail: 'Label contributions, cite inspiration, and add every teammate to submissions.',
  },
]

const responseSteps = [
  {
    title: 'In-the-moment support',
    detail:
      'Flag a mentor or volunteer in the coral badge; they will pause the interaction and move you to a calm space.',
  },
  {
    title: 'Formal report',
    detail:
      'Submit details at the Safety Desk tablet or via the hotline; every report receives a response within one hour.',
  },
  {
    title: 'Escalation',
    detail:
      'If risk persists, event leadership may relocate or remove individuals and coordinate with venue security or authorities.',
  },
]

const reportingChannels = [
  {
    label: 'Safety Desk',
    detail: 'Located by the main entrance and staffed 24/7 during the hackathon.',
  },
  {
    label: 'Text hotline',
    detail: 'Text +1 (555) 011-2040 — replace with your real hotline.',
  },
  {
    label: 'Email',
    detail: 'safety@singularity.dev — replace with your actual contact inbox.',
  },
]

const CursorDot = () => {
  const [coords, setCoords] = useState({ x: -20, y: -20 })

  useEffect(() => {
    let frame = 0
    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        return
      }
      frame = requestAnimationFrame(() => {
        setCoords({ x: event.clientX, y: event.clientY })
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <span className="cursor-dot" style={{ transform: `translate3d(${coords.x}px, ${coords.y}px, 0)` }} aria-hidden="true" />
}

function App() {
  return (
    <>
      <CursorDot />
      <div className="page-shell">
        <header className="hero">
          <p className="eyebrow">Singularity Hackathon · 2025</p>
          <h1>Code of Conduct</h1>
          <p className="lead">
            The Singularity community is most inventive when everyone feels respected, safe, and supported. These principles apply
            across every conversation, prototype, and celebration during the hackathon.
          </p>
          <div className="scope-grid">
            {scopeDetails.map((detail) => (
              <article className="scope-card" key={detail.label}>
                <p className="scope-label">{detail.label}</p>
                <p className="scope-value">{detail.value}</p>
              </article>
            ))}
          </div>
        </header>

        <main className="content">
          <section className="pillars">
            {principles.map((principle) => (
              <article className="pillar-card" key={principle.title}>
                <div className="pillar-heading">
                  <span className="stacked-title">{principle.title}</span>
                  <p>{principle.summary}</p>
                </div>
                <ul>
                  {principle.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="guidelines">
            <article className="card boundaries">
              <h2>Clear boundaries</h2>
              <p>These behaviors are never acceptable on-site or online.</p>
              <ul>
                {boundaries.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </article>
            <article className="card reminders">
              <h2>Quick reminders</h2>
              <div className="reminders-grid">
                {reminders.map((reminder) => (
                  <div className="reminder" key={reminder.title}>
                    <p className="reminder-title">{reminder.title}</p>
                    <p className="reminder-detail">{reminder.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="response">
            <article className="card response-card">
              <h2>Response process</h2>
              <ol>
                {responseSteps.map((step) => (
                  <li key={step.title}>
                    <p className="step-title">{step.title}</p>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </article>
            <article className="card reporting-card">
              <h2>Reach the safety team</h2>
              <p>Choose whichever channel feels safest. You may remain anonymous.</p>
              <div className="channels">
                {reportingChannels.map((channel) => (
                  <div className="channel" key={channel.label}>
                    <p className="channel-label">{channel.label}</p>
                    <p className="channel-detail">{channel.detail}</p>
                  </div>
                ))}
              </div>
              <p className="placeholder-note">Update the hotline and email above with your actual contact details before publishing.</p>
            </article>
          </section>
        </main>

        <footer className="footer">
          <p>Last updated 04 Dec 2025 · Questions? Visit the Safety Desk or talk to any organizer in the ember jacket.</p>
          <p className="footer-note">Breaking these guidelines may result in removal from Singularity Hackathon without refund.</p>
        </footer>
      </div>
    </>
  )
}

export default App
