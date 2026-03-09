export default function Home() {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#0a0a0a', color: '#d0d0d0', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --green: #39ff14;
          --green-muted: rgba(57,255,20,0.12);
          --bg: #0a0a0a;
          --bg2: #111111;
          --bg3: #161616;
          --border: rgba(57,255,20,0.18);
          --text: #d0d0d0;
          --muted: #555;
          --mono: 'JetBrains Mono', monospace;
          --sans: 'Inter', sans-serif;
        }
        .scanlines {
          pointer-events: none;
          position: fixed; inset: 0; z-index: 999;
          background: repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px);
        }
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(10,10,10,0.92); backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          padding: 0 48px; height: 56px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { font-size: 14px; font-weight: 700; color: var(--green); }
        .nav-logo span { color: var(--muted); }
        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.15s; }
        .nav-links a:hover { color: var(--green); }
        .hero { padding: 140px 48px 100px; max-width: 1100px; margin: 0 auto; }
        .hero-prompt { font-size: 13px; color: var(--muted); margin-bottom: 28px; display: flex; align-items: center; gap: 8px; }
        .cursor { display: inline-block; width: 9px; height: 16px; background: var(--green); animation: blink 1s step-end infinite; margin-left: 4px; vertical-align: middle; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-title { font-size: clamp(40px, 6vw, 76px); font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; color: #fff; margin-bottom: 20px; }
        .hero-title .g { color: var(--green); }
        .hero-sub { font-family: var(--sans); font-size: 17px; font-weight: 300; color: var(--muted); max-width: 500px; line-height: 1.75; margin-bottom: 48px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-p { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 13px 28px; background: var(--green); color: #000; border: none; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.15s, transform 0.15s; }
        .btn-p:hover { background: #55ff30; transform: translateY(-1px); }
        .btn-o { font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; padding: 13px 28px; background: transparent; color: var(--green); border: 1px solid var(--border); cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.15s, background 0.15s; }
        .btn-o:hover { border-color: var(--green); background: var(--green-muted); }
        .divider { border: none; border-top: 1px solid var(--border); max-width: 1100px; margin: 0 auto; }
        .stack-section { padding: 80px 48px; max-width: 1100px; margin: 0 auto; }
        .sec-tag { font-size: 11px; font-weight: 500; color: var(--green); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 36px; display: flex; align-items: center; gap: 12px; }
        .sec-tag::after { content: ''; flex: 1; height: 1px; background: var(--border); max-width: 180px; }
        .stack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
        @media (max-width: 700px) { .stack-grid { grid-template-columns: 1fr; } .nav { padding: 0 24px; } .hero { padding: 120px 24px 80px; } .stack-section, .sub-section { padding-left: 24px; padding-right: 24px; } }
        .stack-card { background: var(--bg2); padding: 36px 32px; transition: background 0.2s; }
        .stack-card:hover { background: var(--bg3); }
        .stack-icon { font-size: 28px; margin-bottom: 18px; display: block; }
        .stack-name { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .stack-desc { font-family: var(--sans); font-size: 14px; line-height: 1.65; color: var(--muted); font-weight: 300; }
        .sub-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 80px 48px; }
        .sub-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        @media (max-width: 700px) { .sub-inner { grid-template-columns: 1fr; gap: 32px; } }
        .sub-title { font-size: clamp(24px, 3vw, 36px); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 12px; }
        .sub-title .g { color: var(--green); }
        .sub-desc { font-family: var(--sans); font-size: 14px; color: var(--muted); line-height: 1.7; font-weight: 300; }
        .sub-form { display: flex; flex-direction: column; gap: 12px; }
        .email-in { width: 100%; padding: 13px 16px; background: var(--bg3); border: 1px solid var(--border); color: #fff; font-family: var(--mono); font-size: 13px; outline: none; transition: border-color 0.2s; }
        .email-in::placeholder { color: var(--muted); }
        .email-in:focus { border-color: var(--green); }
        .sub-note { font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
        .footer { padding: 28px 48px; max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .footer-text { font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
        .footer-text .g { color: var(--green); }
      `}</style>

      <div className="scanlines" />

      <section className="hero">
        <div className="hero-prompt"><span style={{color:'#39ff14'}}>▶</span> whoami <span className="cursor" /></div>
        <h1 className="hero-title">Fullstack<br /><span className="g">Developer.</span></h1>
        <p className="hero-sub">Building scalable applications with Java, React, and Flutter. Clean code. Robust architecture. Real results.</p>
        <div className="hero-actions">
          <a href="/about" className="btn-o">./about_me</a>
        </div>
      </section>

      <hr className="divider" />

      <section className="stack-section">
        <div className="sec-tag">// tech_stack</div>
        <div className="stack-grid">
          <div className="stack-card">
            <span className="stack-icon">⚛️</span>
            <div className="stack-name">React & TypeScript</div>
            <p className="stack-desc">Modern reactive UIs with type safety and component-driven architecture.</p>
          </div>
          <div className="stack-card">
            <span className="stack-icon">☕</span>
            <div className="stack-name">Java & Spring Boot</div>
            <p className="stack-desc">Scalable backend services and REST APIs powered by the Spring ecosystem.</p>
          </div>
          <div className="stack-card">
            <span className="stack-icon">📱</span>
            <div className="stack-name">Flutter</div>
            <p className="stack-desc">Cross-platform mobile apps with native performance and beautiful UI.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
