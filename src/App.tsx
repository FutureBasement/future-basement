function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#7ee787" />
      <path
        d="M9 21.5V10.5h5.2c2 0 3.3 1.1 3.3 2.8 0 1.4-.9 2.4-2.3 2.7 1.7.3 2.9 1.5 2.9 3.1 0 2-1.5 3.1-3.6 3.1H9v-.7Zm2.6-5.9h2.3c1 0 1.6-.6 1.6-1.5s-.6-1.5-1.6-1.5h-2.3v3Zm0 5.3h2.6c1.1 0 1.8-.6 1.8-1.6s-.7-1.6-1.8-1.6h-2.6v3.2Z"
        fill="#0b0e14"
      />
    </svg>
  )
}

/** Raccoon + sprout motif for Myth of Dryad. */
function DryadArt() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="62" r="34" fill="#1d3a26" />
      <circle cx="60" cy="62" r="34" fill="none" stroke="#7ee787" strokeWidth="1.5" opacity="0.5" />
      {/* sprout */}
      <path d="M60 78 V54" stroke="#7ee787" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 58 C48 56 42 48 42 40 C52 42 58 48 60 58Z" fill="#7ee787" />
      <path d="M60 54 C72 52 78 44 78 36 C68 38 62 44 60 54Z" fill="#4ade80" />
      {/* raccoon ears */}
      <path d="M38 44 L34 28 L48 38Z" fill="#3a3f4b" />
      <path d="M82 44 L86 28 L72 38Z" fill="#3a3f4b" />
      {/* face mask */}
      <ellipse cx="60" cy="76" rx="26" ry="16" fill="#2b2f3a" />
      <circle cx="50" cy="74" r="4" fill="#eef1f6" />
      <circle cx="70" cy="74" r="4" fill="#eef1f6" />
      <circle cx="50" cy="74" r="2" fill="#0b0e14" />
      <circle cx="70" cy="74" r="2" fill="#0b0e14" />
      <ellipse cx="60" cy="82" rx="4" ry="3" fill="#0b0e14" />
    </svg>
  )
}

/** Simple avatar mark for 2nuki. */
function NukiArt() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="36" fill="#2a2140" />
      <circle cx="60" cy="60" r="36" fill="none" stroke="#bc8cff" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="54" r="20" fill="#bc8cff" opacity="0.35" />
      <circle cx="52" cy="52" r="3.5" fill="#eef1f6" />
      <circle cx="68" cy="52" r="3.5" fill="#eef1f6" />
      <path d="M50 62 Q60 70 70 62" stroke="#eef1f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M44 36 L52 30 M76 36 L68 30" stroke="#bc8cff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 88 Q60 74 84 88" stroke="#bc8cff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Waveform bars for Music. */
function MusicArt() {
  const bars = [34, 52, 70, 44, 82, 58, 76, 40, 64, 48, 72, 56]
  return (
    <svg width="140" height="90" viewBox="0 0 140 90" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={8 + i * 11}
          y={(90 - h) / 2}
          width="6"
          height={h}
          rx="3"
          fill={i % 3 === 0 ? '#58a6ff' : '#7ee787'}
          opacity={0.55 + (i % 4) * 0.12}
        />
      ))}
    </svg>
  )
}

function ServiceIcon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  {
    title: 'Web Design',
    desc: 'Clean, modern sites that load fast and look good on any screen.',
    icon: 'M3 5h18M3 5v14h18V5M3 9h18M7 13h4',
  },
  {
    title: 'App Development',
    desc: 'Apps built to work — from idea to something you can actually use.',
    icon: 'M8 2h8v20H8zM11 18h2',
  },
  {
    title: 'Chatbots',
    desc: 'Conversational tools that answer questions and get things done.',
    icon: 'M4 6h16v9H9l-5 4V6ZM8 10h.01M12 10h.01M16 10h.01',
  },
  {
    title: 'Brand Strategy',
    desc: 'Positioning, voice, and identity that make a project recognizable.',
    icon: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.8-5.4 2.8 1-6.1L3.2 9.5l6.1-.9L12 3Z',
  },
  {
    title: 'Mobile Solutions',
    desc: 'Mobile-first builds for phones, tablets, and everything in between.',
    icon: 'M8 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM11 18h2',
  },
  {
    title: 'Gear Recommendations & Reviews',
    desc: 'Honest takes on the gear worth your money — and the gear that is not.',
    icon: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1',
  },
]

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="logo" href="#top">
            <LogoMark />
            Future Basement
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <h1>
              Future <span className="accent">Basement</span>
            </h1>
            <p className="hero-role">Philip Ross — designer, developer, game maker</p>
            <p className="hero-tagline">
              Building digital things from the basement up: games, music, apps,
              and websites for the future.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                See the work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="projects">
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I&apos;m building</h2>
          <p className="section-intro">
            A few of the things coming out of the basement — a game, a
            persona, and music.
          </p>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-art project-art-dryad">
                <DryadArt />
              </div>
              <div className="project-body">
                <span className="project-tag">Game · In development</span>
                <h3>Myth of Dryad</h3>
                <p>
                  A tactics game about a common raccoon who bonds with a
                  symbiotic plant to reclaim the natural world from a dystopic
                  human-caused wasteland.
                </p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-art project-art-2nuki">
                <NukiArt />
              </div>
              <div className="project-body">
                <span className="project-tag">VTuber</span>
                <h3>2nuki</h3>
                <p>
                  Philip&apos;s VTuber persona — a virtual character for
                  streams and videos.
                </p>
              </div>
            </article>

            <article className="project-card">
              <div className="project-art project-art-music">
                <MusicArt />
              </div>
              <div className="project-body">
                <span className="project-tag">Music</span>
                <h3>Music</h3>
                <p>
                  Philip releases music online — original tracks, distributed
                  for streaming.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="services">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I can do for you</h2>
          <p className="section-intro">
            Design and development help, from a single page to a full build.
          </p>
          <div className="service-grid">
            {services.map((s) => (
              <article className="service-card" key={s.title}>
                <div className="service-icon">
                  <ServiceIcon d={s.icon} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about">
          <p className="section-label">About</p>
          <h2 className="section-title">From the basement</h2>
          <div className="about-inner">
            <div className="about-mark" aria-hidden="true">
              <LogoMark />
            </div>
            <div className="about-text">
              <p>
                <strong>Philip Ross</strong> runs Future Basement — a tech
                publication, a workshop, and a home for his games, music, and
                web work.
              </p>
              <p>
                Future Basement started as a publication at{' '}
                <a
                  href="https://futurebasement.substack.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  futurebasement.substack.com
                </a>
                , and it has grown into the place where his projects live.
              </p>
              <ul className="about-facts">
                <li>Based in the Chapel Hill / Carrboro / Durham, NC area</li>
                <li>Designer, developer, and game maker</li>
                <li>Writing about tech at Future Basement on Substack</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s build something</h2>
          <p className="section-intro">
            Have a project in mind, or just want to say hello? The inbox is
            open.
          </p>
          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href="mailto:futurebasement@gmail.com"
            >
              futurebasement@gmail.com
            </a>
            <a
              className="btn btn-ghost"
              href="https://futurebasement.substack.com"
              target="_blank"
              rel="noreferrer"
            >
              Read Future Basement
            </a>
          </div>
          <p className="contact-note">
            Replies may take a little while — the basement runs on one person.
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 Future Basement — Philip Ross</p>
        <p>Built with Vite + React. Chapel Hill / Carrboro / Durham, NC.</p>
      </footer>
    </>
  )
}
