import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(10,10,10,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(57,255,20,0.18)',
      padding: '0 48px',
      height: '56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: "'JetBrains Mono', monospace"
    }}>
      <div style={{
        fontSize: '14px',
        fontWeight: 700,
        color: '#39ff14'
      }}>
        <span style={{color: '#555'}}>~/</span>carlos_gangazha
      </div>
      <ul style={{
        display: 'flex',
        gap: '32px',
        listStyle: 'none'
      }}>
        <li>
          <Link to="/" style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            textDecoration: 'none',
            transition: 'color 0.15s'
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#39ff14'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            textDecoration: 'none',
            transition: 'color 0.15s'
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#39ff14'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            textDecoration: 'none',
            transition: 'color 0.15s'
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#39ff14'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/downloads" style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#555',
            textDecoration: 'none',
            transition: 'color 0.15s'
          }}
           onMouseEnter={(e) => e.currentTarget.style.color = '#39ff14'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
          >
            Downloads
          </Link>
        </li>
      </ul>
    </nav>
  )
}
