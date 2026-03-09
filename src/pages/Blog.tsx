export default function Blog() {
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
        .body { padding: 80px 48px 120px; max-width: 1100px; margin: 0 auto; display: flex; justify-content: center; }
        .empty-box { border: 1px solid var(--border); background: var(--bg2); padding: 64px 80px; text-align: center; width: 100%; max-width: 600px; position: relative; }
        .empty-box::before { content: ''; position: absolute; top: -1px; left: 40px; width: 80px; height: 2px; background: var(--green); }
        .empty-icon { font-size: 40px; margin-bottom: 24px; display: block; }
        .empty-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .empty-title .g { color: var(--green); }
        .empty-desc { font-family: var(--sans); font-size: 14px; color: var(--muted); line-height: 1.7; font-weight: 300; margin-bottom: 32px; }
        .empty-terminal { background: var(--bg3); border: 1px solid var(--border); padding: 16px 20px; text-align: left; margin-bottom: 32px; }
        .t-line { font-size: 12px; color: var(--muted); margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .t-line:last-child { margin-bottom: 0; }
        .t-line .p { color: var(--green); }
        .t-line .c { color: #ccc; }
        .t-line .o { color: var(--muted); font-style: italic; }
        .cursor { display: inline-block; width: 8px; height: 14px; background: var(--green); animation: blink 1s step-end infinite; vertical-align: middle; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .notify-row { display: flex; width: 100%; }
        .notify-input { flex: 1; padding: 12px 16px; background: var(--bg3); border: 1px solid var(--border); border-right: none; color: #fff; font-family: var(--mono); font-size: 12px; outline: none; transition: border-color 0.2s; }
        .notify-input::placeholder { color: var(--muted); }
        .notify-input:focus { border-color: var(--green); }
        .notify-btn { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 20px; background: var(--green); color: #000; border: none; cursor: pointer; font-family: var(--mono); white-space: nowrap; transition: background 0.15s; }
        .notify-btn:hover { background: #55ff30; }
        .notify-note { font-size: 11px; color: var(--muted); margin-top: 10px; letter-spacing: 0.03em; }
        @media (max-width: 600px) {
          .nav { padding: 0 24px; }
          .header, .body { padding-left: 24px; padding-right: 24px; }
          .empty-box { padding: 40px 28px; }
          .notify-row { flex-direction: column; }
          .notify-input { border-right: 1px solid var(--border); border-bottom: none; }
        }
      `}</style>

      <div className="scanlines" />

      <header className="header">
        <div className="header-inner">
          <div className="page-tag">blog</div>
          <h1 className="page-title">Dev <span className="g">Writings.</span></h1>
          <p className="page-sub">Articles on fullstack development, architecture, and modern technologies.</p>
        </div>
      </header>

      <div className="body">
        <div className="empty-box">
          <span className="empty-icon">📝</span>
          <div className="empty-title">No posts <span className="g">yet.</span></div>
          <p className="empty-desc">I'm working on some articles. Check back soon — content is coming.</p>

          <div className="empty-terminal">
            <div className="t-line"><span className="p">▶</span><span className="c">ls ./posts</span></div>
            <div className="t-line"><span className="o">// directory is empty</span></div>
            <div className="t-line"><span className="p">▶</span><span className="c">status</span><span className="cursor" /></div>
          </div>

          <div className="notify-row">
            <input className="notify-input" type="email" placeholder="your@email.com" />
            <button className="notify-btn">Notify Me</button>
          </div>
          <div className="notify-note">// get notified when the first post drops</div>
        </div>
      </div>
    </div>
  )
}
