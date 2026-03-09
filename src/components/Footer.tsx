export default function Footer() {
  
  return (
    <footer style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .footer-wrap {
          background: #111111;
          border-top: 1px solid rgba(57,255,20,0.18);
          padding: 40px 48px;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-logo {
          font-size: 14px;
          font-weight: 700;
          color: #39ff14;
        }
        .footer-logo span { color: #444; }
        .footer-copy {
          font-size: 11px;
          color: #444;
          letter-spacing: 0.04em;
        }
        .footer-copy .g { color: #39ff14; }
        .footer-links {
          display: flex;
          gap: 0;
          border: 1px solid rgba(57,255,20,0.18);
        }
        .footer-link {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 20px;
          color: #555;
          text-decoration: none;
          border-right: 1px solid rgba(57,255,20,0.18);
          transition: color 0.15s, background 0.15s;
        }
        .footer-link:last-child { border-right: none; }
        .footer-link:hover { color: #39ff14; background: rgba(57,255,20,0.08); }
        @media (max-width: 600px) {
          .footer-wrap { padding: 32px 24px; }
          .footer-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="footer-wrap">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo"><span>~/</span>carlosgangazha1@gmail.com</div>
          </div>
          <div className="footer-links">
            <a href="https://github.com/carlosGangazha" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            <a href="https://www.linkedin.com/in/carlos-gangazha-4367b5282" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
