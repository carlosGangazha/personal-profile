// export default function Downloads() {
//   const handleDownload = (fileName, displayName) => {
//     // Create a link to download the file from public/assets/
//     const link = document.createElement('a');
//     link.href = `/assets/${fileName}`;
//     link.download = fileName;
//     link.click();
//   };

//   return (
//     <div style={{ fontFamily: "'JetBrains Mono', monospace", background: '#0a0a0a', color: '#d0d0d0', minHeight: '100vh' }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         :root {
//           --green: #39ff14; --green-muted: rgba(57,255,20,0.12);
//           --bg: #0a0a0a; --bg2: #111111; --bg3: #161616;
//           --border: rgba(57,255,20,0.18); --muted: #555;
//           --mono: 'JetBrains Mono', monospace; --sans: 'Inter', sans-serif;
//         }
//         .scanlines { pointer-events: none; position: fixed; inset: 0; z-index: 999; background: repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px); }
//         .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(10,10,10,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border); padding: 0 48px; height: 56px; display: flex; align-items: center; justify-content: space-between; }
//         .nav-logo { font-size: 14px; font-weight: 700; color: var(--green); }
//         .nav-logo span { color: var(--muted); }
//         .nav-links { display: flex; gap: 32px; list-style: none; }
//         .nav-links a { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.15s; }
//         .nav-links a:hover { color: var(--green); }
//         .header { padding: 120px 48px 72px; background: var(--bg2); border-bottom: 1px solid var(--border); }
//         .header-inner { max-width: 1100px; margin: 0 auto; }
//         .page-tag { font-size: 11px; font-weight: 500; color: var(--green); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
//         .page-tag::before { content: '//'; color: var(--muted); }
//         .page-title { font-size: clamp(40px, 6vw, 72px); font-weight: 700; color: #fff; letter-spacing: -0.02em; line-height: 1.0; margin-bottom: 16px; }
//         .page-title .g { color: var(--green); }
//         .page-sub { font-family: var(--sans); font-size: 16px; font-weight: 300; color: var(--muted); max-width: 480px; line-height: 1.7; }
//         .body { padding: 80px 48px 120px; max-width: 1100px; margin: 0 auto; }
//         .downloads-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; }
//         .download-card { border: 1px solid var(--border); background: var(--bg2); padding: 32px; transition: all 0.2s; }
//         .download-card:hover { border-color: var(--green); transform: translateY(-2px); }
//         .download-icon { font-size: 32px; margin-bottom: 20px; display: block; }
//         .download-title { font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 12px; }
//         .download-desc { font-family: var(--sans); font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 24px; }
//         .download-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 24px; background: var(--green); color: #000; border: none; cursor: pointer; font-family: var(--mono); transition: background 0.15s; width: 100%; }
//         .download-btn:hover { background: #55ff30; }
//         .file-info { font-size: 11px; color: var(--muted); margin-top: 12px; text-align: center; }
//         @media (max-width: 600px) {
//           .nav { padding: 0 24px; }
//           .header, .body { padding-left: 24px; padding-right: 24px; }
//           .downloads-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <div className="scanlines" />

//       <nav className="nav">
//         <div className="nav-logo"><span>~/</span>carlos_gangazha</div>
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="/blog">Blog</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/downloads">Downloads</a></li>
//         </ul>
//       </nav>

//       <header className="header">
//         <div className="header-inner">
//           <div className="page-tag">downloads</div>
//           <h1 className="page-title">Professional <span className="g">Assets.</span></h1>
//           <p className="page-sub">Download my resume, certifications, and professional documents.</p>
//         </div>
//       </header>

//       <div className="body">
//         <div className="downloads-grid">
//           <div className="download-card">
//             <span className="download-icon">📄</span>
//             <div className="download-title">Curriculum Vitae</div>
//             <p className="download-desc">
//               My comprehensive CV highlighting experience in fullstack development, Java, React, and Flutter.
//             </p>
//             <button
//               className="download-btn"
//               onClick={() => handleDownload('cv.pdf', 'Curriculum Vitae')}
//             >
//               Download CV
//             </button>
//             <div className="file-info">PDF • Updated March 2026</div>
//           </div>

//           <div className="download-card">
//             <span className="download-icon">🏆</span>
//             <div className="download-title">Certifications</div>
//             <p className="download-desc">
//               Collection of my professional certifications in software development and related technologies.
//             </p>
//             <button
//               className="download-btn"
//               onClick={() => handleDownload('certifications.pdf', 'Certifications')}
//             >
//               Download Certifications
//             </button>
//             <div className="file-info">PDF • Multiple Files</div>
//           </div>

//           <div className="download-card">
//             <span className="download-icon">💼</span>
//             <div className="download-title">Resume</div>
//             <p className="download-desc">
//               Concise one-page resume optimized for ATS systems and quick review.
//             </p>
//             <button
//               className="download-btn"
//               onClick={() => handleDownload('resume.pdf', 'Resume')}
//             >
//               Download Resume
//             </button>
//             <div className="file-info">PDF • 1 Page</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }