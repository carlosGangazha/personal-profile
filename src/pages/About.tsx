import millerImage from "../assets/carlos.jpg"

export default function About() {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#0a0a0a', color: '#d0d0d0', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green: #39ff14; --green-muted: rgba(57,255,20,0.12);
          --bg: #0a0a0a; --bg2: #111111; --bg3: #161616;
          --border: rgba(57,255,20,0.18); --muted: #555;
          --mono: 'JetBrains Mono', monospace; --sans: 'Inter', sans-serif;
        }
        .scanlines { pointer-events: none; position: fixed; inset: 0; z-index: 999; background: repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px); }
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(10,10,10,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); padding: 0 48px; height: 56px; display: flex; align-items: center; justify-content: space-between; }
        .nav-logo { font-size: 14px; font-weight: 700; color: var(--green); }
        .nav-logo span { color: var(--muted); }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.15s; }
        .nav-links a:hover { color: var(--green); }

        .header { padding: 120px 48px 72px; background: var(--bg2); border-bottom: 1px solid var(--border); }
        .header-inner { max-width: 1100px; margin: 0 auto; }
        .page-tag { font-size: 11px; font-weight: 500; color: var(--green); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
        .page-tag::before { content: '//'; color: var(--muted); }
        .page-title { font-size: clamp(40px, 6vw, 72px); font-weight: 700; color: #fff; letter-spacing: -0.02em; line-height: 1.0; margin-bottom: 16px; }
        .page-title .g { color: var(--green); }
        .page-sub { font-family: var(--sans); font-size: 16px; font-weight: 300; color: var(--muted); max-width: 480px; line-height: 1.7; }

        .body { padding: 64px 48px 100px; max-width: 1100px; margin: 0 auto; }
        .grid { display: grid; grid-template-columns: 260px 1fr; gap: 64px; align-items: start; }
        @media (max-width: 800px) { .grid { grid-template-columns: 1fr; } .nav, .header, .body { padding-left: 24px; padding-right: 24px; } }

        .sidebar {}
        .profile-wrap { border: 1px solid var(--border); margin-bottom: 24px; overflow: hidden; aspect-ratio: 1; background: var(--bg2); }
        .profile-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(30%); }

        .stack-box { border: 1px solid var(--border); background: var(--bg2); padding: 28px; }
        .stack-box-title { font-size: 11px; font-weight: 500; color: var(--green); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 24px; }
        .stack-group { margin-bottom: 20px; }
        .stack-group:last-child { margin-bottom: 0; }
        .sg-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
        .sg-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .sg-tag { font-size: 11px; font-weight: 500; padding: 4px 10px; background: var(--bg3); color: #ccc; border: 1px solid var(--border); }

        .content {}
        .block { padding-bottom: 48px; margin-bottom: 48px; border-bottom: 1px solid var(--border); }
        .block:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .block-heading { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
        .block-heading::before { content: '>'; color: var(--green); }
        .block-text { font-family: var(--sans); font-size: 15px; line-height: 1.8; color: var(--muted); font-weight: 300; margin-bottom: 14px; }
        .block-text:last-child { margin-bottom: 0; }
        .passion-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .passion-item { font-family: var(--sans); font-size: 15px; line-height: 1.6; color: var(--muted); font-weight: 300; display: flex; gap: 14px; align-items: flex-start; }
        .passion-item::before { content: '▹'; color: var(--green); flex-shrink: 0; margin-top: 1px; }
        .connect-links { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 24px; }
        .link-btn { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 11px 20px; text-decoration: none; border: 1px solid var(--border); color: #ccc; background: transparent; transition: all 0.15s; cursor: pointer; display: inline-block; }
        .link-btn:hover { border-color: var(--green); color: var(--green); background: var(--green-muted); }
        .link-btn.primary { background: var(--green); color: #000; border-color: var(--green); }
        .link-btn.primary:hover { background: #55ff30; }
      `}</style>

      <div className="scanlines" />

      <header className="header">
        <div className="header-inner">
          <div className="page-tag">about_me</div>
          <h1 className="page-title">Who <span className="g">I Am.</span></h1>
          <p className="page-sub">Fullstack developer. Problem solver. Passionate about clean code and scalable systems.</p>
        </div>
      </header>

      <div className="body">
        <div className="grid">
          <aside className="sidebar">
            <div className="profile-wrap">
              <img src={millerImage} alt="Profile" />
            </div>
            <div className="stack-box">
              <div className="stack-box-title">// tech_stack</div>
              <div className="stack-group">
                <div className="sg-label">Frontend</div>
                <div className="sg-tags">
                  <span className="sg-tag">React 19</span>
                  <span className="sg-tag">TypeScript</span>
                  <span className="sg-tag">Tailwind</span>
                  <span className="sg-tag">Next.js</span>
                </div>
              </div>
              <div className="stack-group">
                <div className="sg-label">Backend</div>
                <div className="sg-tags">
                  <span className="sg-tag">Java</span>
                  <span className="sg-tag">Spring Boot</span>
                  <span className="sg-tag">PostgreSQL</span>
                  <span className="sg-tag">REST APIs</span>
                </div>
              </div>
              <div className="stack-group">
                <div className="sg-label">Mobile</div>
                <div className="sg-tags">
                  <span className="sg-tag">Flutter</span>
                  <span className="sg-tag">Dart</span>
                  <span className="sg-tag">Firebase</span>
                </div>
              </div>
            </div>
          </aside>

          <article className="content">
            <div className="block">
              <h2 className="block-heading">About</h2>
              <p className="block-text">I'm a fullstack developer with a passion for building scalable, maintainable applications that solve real-world problems. With expertise spanning frontend, backend, and mobile development, I love creating seamless user experiences backed by robust server-side architecture.</p>
            </div>
            <div className="block">
              <h2 className="block-heading">Journey</h2>
              <p className="block-text">My development journey started with web technologies and gradually expanded to include backend development with Java and Spring Boot. More recently, I've dived into mobile development with Flutter, bringing my web expertise to iOS and Android.</p>
              <p className="block-text">Great software is built on clean code, thoughtful architecture, and a deep understanding of user needs.</p>
            </div>
            <div className="block">
              <h2 className="block-heading">Passions</h2>
              <ul className="passion-list">
                {[
                  'Clean, maintainable code that other developers enjoy reading',
                  'Building performant applications that delight users',
                  'Sharing knowledge and helping other developers grow',
                  'Exploring emerging technologies and best practices',
                  'Open source contributions to the developer community',
                ].map((item, i) => (
                  <li key={i} className="passion-item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="block">
              <h2 className="block-heading">Connect</h2>
              <p className="block-text">Always open to discussing new projects, technologies, or opportunities.</p>
              <div className="connect-links">
                <a href="mailto:hello@example.com" className="link-btn primary">Email Me →</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-btn">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-btn">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-btn">Twitter</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
