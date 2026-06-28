import React from "react";

function AboutAvatar() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "380px" }}>

      {/* Outer pulse rings */}
      <circle cx="200" cy="220" r="180" fill="none" stroke="#c770f0" strokeWidth="1" opacity="0.15">
        <animate attributeName="r" values="180;190;180" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="220" r="155" fill="none" stroke="#c770f0" strokeWidth="0.5" opacity="0.1">
        <animate attributeName="r" values="155;165;155" dur="2.5s" repeatCount="indefinite"/>
      </circle>

      {/* Purple background circle */}
      <circle cx="200" cy="220" r="145" fill="url(#avatarGrad)"/>
      <defs>
        <radialGradient id="avatarGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6d20c5" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#1a0a2e" stopOpacity="0.95"/>
        </radialGradient>
      </defs>

      {/* Suit jacket */}
      <rect x="148" y="295" width="104" height="95" rx="15" fill="#1e1e3a"/>
      {/* Suit lapels */}
      <path d="M200 295 L178 320 L200 310 L222 320 Z" fill="#2a2a5a"/>
      {/* White shirt */}
      <rect x="192" y="295" width="16" height="40" fill="white" opacity="0.9"/>
      {/* Tie */}
      <path d="M197 300 L200 340 L203 300 Z" fill="#c770f0"/>
      <path d="M196 298 L200 302 L204 298 Z" fill="#a050d0"/>
      {/* Suit buttons */}
      <circle cx="200" cy="345" r="2" fill="#c770f0" opacity="0.6"/>
      <circle cx="200" cy="358" r="2" fill="#c770f0" opacity="0.6"/>
      {/* Left arm */}
      <rect x="110" y="300" width="40" height="18" rx="9" fill="#1e1e3a"/>
      {/* Right arm */}
      <rect x="250" y="300" width="40" height="18" rx="9" fill="#1e1e3a"/>
      {/* Left hand */}
      <circle cx="108" cy="309" r="12" fill="#f0c080"/>
      {/* Right hand - holding data tablet */}
      <circle cx="292" cy="309" r="12" fill="#f0c080"/>

      {/* Tablet in right hand */}
      <rect x="298" y="295" width="45" height="32" rx="5" fill="#0c0513" stroke="#c770f0" strokeWidth="1"/>
      <rect x="302" y="299" width="37" height="20" rx="3" fill="#1b1a2e"/>
      <polyline points="304,316 310,308 316,312 322,304 328,307 334,300 338,303" fill="none" stroke="#00c896" strokeWidth="1.5"/>
      <rect x="302" y="321" width="20" height="3" rx="1" fill="#c770f0" opacity="0.6"/>

      {/* Neck */}
      <rect x="188" y="255" width="24" height="25" rx="8" fill="#f0c080"/>

      {/* Head */}
      <circle cx="200" cy="210" r="48" fill="#f0c080"/>

      {/* Professional hair - short and neat */}
      <ellipse cx="200" cy="170" rx="48" ry="20" fill="#1a0a00"/>
      <rect x="152" y="170" width="96" height="18" rx="5" fill="#1a0a00"/>
      {/* Side hair */}
      <rect x="152" y="185" width="12" height="20" rx="5" fill="#1a0a00"/>
      <rect x="236" y="185" width="12" height="20" rx="5" fill="#1a0a00"/>

      {/* Ears */}
      <ellipse cx="152" cy="213" rx="9" ry="11" fill="#e0b070"/>
      <ellipse cx="248" cy="213" rx="9" ry="11" fill="#e0b070"/>

      {/* Professional glasses */}
      <rect x="170" y="204" width="24" height="16" rx="5" fill="none" stroke="#c770f0" strokeWidth="2"/>
      <rect x="206" y="204" width="24" height="16" rx="5" fill="none" stroke="#c770f0" strokeWidth="2"/>
      <line x1="194" y1="212" x2="206" y2="212" stroke="#c770f0" strokeWidth="2"/>
      <line x1="152" y1="210" x2="170" y2="210" stroke="#c770f0" strokeWidth="1.5"/>
      <line x1="230" y1="210" x2="248" y2="210" stroke="#c770f0" strokeWidth="1.5"/>

      {/* Eyes behind glasses */}
      <circle cx="182" cy="212" r="4" fill="#2a1a00"/>
      <circle cx="218" cy="212" r="4" fill="#2a1a00"/>
      <circle cx="183" cy="211" r="1.5" fill="white"/>
      <circle cx="219" cy="211" r="1.5" fill="white"/>

      {/* Confident smile */}
      <path d="M184 228 Q200 240 216 228" stroke="#2a1a00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M186 229 Q200 238 214 229 Q200 236 186 229" fill="white" opacity="0.8"/>

      {/* Cheeks subtle */}
      <circle cx="175" cy="226" r="7" fill="#f09080" opacity="0.25"/>
      <circle cx="225" cy="226" r="7" fill="#f09080" opacity="0.25"/>

      {/* Floating skill badges */}
      {/* Python - top left */}
      <g>
        <rect x="10" y="100" width="85" height="28" rx="14" fill="#0c0513" stroke="#3776AB" strokeWidth="1.5"/>
        <circle cx="28" cy="114" r="7" fill="#3776AB" opacity="0.3"/>
        <text x="28" y="118" fill="#3776AB" fontSize="9" textAnchor="middle" fontFamily="monospace">🐍</text>
        <text x="65" y="119" fill="#3776AB" fontSize="11" textAnchor="middle" fontFamily="monospace">Python</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2s" repeatCount="indefinite"/>
      </g>

      {/* SQL - top right */}
      <g>
        <rect x="305" y="100" width="80" height="28" rx="14" fill="#0c0513" stroke="#c770f0" strokeWidth="1.5"/>
        <circle cx="323" cy="114" r="7" fill="#c770f0" opacity="0.3"/>
        <text x="323" y="118" fill="#c770f0" fontSize="9" textAnchor="middle" fontFamily="monospace">🗄️</text>
        <text x="358" y="119" fill="#c770f0" fontSize="11" textAnchor="middle" fontFamily="monospace">SQL</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.5s" repeatCount="indefinite"/>
      </g>

      {/* Power BI - left */}
      <g>
        <rect x="5" y="230" width="90" height="28" rx="14" fill="#0c0513" stroke="#F2C811" strokeWidth="1.5"/>
        <circle cx="23" cy="244" r="7" fill="#F2C811" opacity="0.3"/>
        <text x="23" y="248" fill="#F2C811" fontSize="9" textAnchor="middle" fontFamily="monospace">📊</text>
        <text x="63" y="249" fill="#F2C811" fontSize="10" textAnchor="middle" fontFamily="monospace">Power BI</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,6; 0,0" dur="2.2s" repeatCount="indefinite"/>
      </g>

      {/* Excel - right */}
      <g>
        <rect x="305" y="230" width="85" height="28" rx="14" fill="#0c0513" stroke="#217346" strokeWidth="1.5"/>
        <circle cx="323" cy="244" r="7" fill="#217346" opacity="0.3"/>
        <text x="323" y="248" fill="#217346" fontSize="9" textAnchor="middle" fontFamily="monospace">📈</text>
        <text x="360" y="249" fill="#217346" fontSize="11" textAnchor="middle" fontFamily="monospace">Excel</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,6; 0,0" dur="1.8s" repeatCount="indefinite"/>
      </g>

      {/* M.Sc Data Science - top */}
      <g>
        <rect x="105" y="28" width="190" height="28" rx="14" fill="#0c0513" stroke="#00c896" strokeWidth="1.5"/>
        <circle cx="123" cy="42" r="7" fill="#00c896" opacity="0.3"/>
        <text x="123" y="46" fill="#00c896" fontSize="9" textAnchor="middle" fontFamily="monospace">🎓</text>
        <text x="210" y="47" fill="#00c896" fontSize="10" textAnchor="middle" fontFamily="monospace">M.Sc Data Science</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.8s" repeatCount="indefinite"/>
      </g>

      {/* Tableau - bottom */}
      <g>
        <rect x="130" y="400" width="140" height="28" rx="14" fill="#0c0513" stroke="#E97627" strokeWidth="1.5"/>
        <circle cx="148" cy="414" r="7" fill="#E97627" opacity="0.3"/>
        <text x="148" y="418" fill="#E97627" fontSize="9" textAnchor="middle" fontFamily="monospace">📉</text>
        <text x="215" y="419" fill="#E97627" fontSize="11" textAnchor="middle" fontFamily="monospace">Tableau</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,6; 0,0" dur="2s" repeatCount="indefinite"/>
      </g>

      {/* JustDial tag */}
      <g>
        <rect x="108" y="455" width="185" height="28" rx="14" fill="#0c0513" stroke="#c770f0" strokeWidth="1.5"/>
        <circle cx="126" cy="469" r="7" fill="#c770f0" opacity="0.3"/>
        <text x="126" y="473" fill="#c770f0" fontSize="9" textAnchor="middle" fontFamily="monospace">💼</text>
        <text x="213" y="474" fill="#c770f0" fontSize="9" textAnchor="middle" fontFamily="monospace">JustDial Ltd. | Sr. Exec</text>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,5; 0,0" dur="2.4s" repeatCount="indefinite"/>
      </g>

    </svg>
  );
}

export default AboutAvatar;