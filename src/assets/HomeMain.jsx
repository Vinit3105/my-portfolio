import React from "react";

function HomeMain() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "480px" }}>
      {/* Background glow */}
      <circle cx="250" cy="250" r="200" fill="#c770f0" opacity="0.04"/>
      <circle cx="250" cy="250" r="150" fill="#c770f0" opacity="0.04"/>

      {/* Floating chart card 1 - top left */}
      <g>
        <rect x="20" y="60" width="130" height="90" rx="12" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1.5" opacity="0.9"/>
        <text x="35" y="82" fill="#c770f0" fontSize="10" fontFamily="monospace">📊 Revenue</text>
        <rect x="35" y="92" width="15" height="35" rx="3" fill="#c770f0" opacity="0.8"/>
        <rect x="55" y="100" width="15" height="27" rx="3" fill="#f0a500" opacity="0.8"/>
        <rect x="75" y="88" width="15" height="39" rx="3" fill="#00c896" opacity="0.8"/>
        <rect x="95" y="95" width="15" height="32" rx="3" fill="#c770f0" opacity="0.6"/>
        <rect x="115" y="85" width="15" height="42" rx="3" fill="#f0a500" opacity="0.6"/>
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
      </g>

      {/* Floating chart card 2 - top right */}
      <g>
        <rect x="350" y="40" width="130" height="80" rx="12" fill="#1b1a2e" stroke="#f0a500" strokeWidth="1.5" opacity="0.9"/>
        <text x="365" y="62" fill="#f0a500" fontSize="10" fontFamily="monospace">📈 Growth</text>
        <polyline points="365,110 385,95 405,100 425,82 445,88 465,72" fill="none" stroke="#f0a500" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="365" cy="110" r="3" fill="#f0a500"/>
        <circle cx="385" cy="95" r="3" fill="#f0a500"/>
        <circle cx="405" cy="100" r="3" fill="#f0a500"/>
        <circle cx="425" cy="82" r="3" fill="#f0a500"/>
        <circle cx="445" cy="88" r="3" fill="#f0a500"/>
        <circle cx="465" cy="72" r="3" fill="#f0a500"/>
      </g>

      {/* Floating card 3 - right middle */}
      <g>
        <rect x="370" y="200" width="120" height="70" rx="12" fill="#1b1a2e" stroke="#00c896" strokeWidth="1.5"/>
        <text x="385" y="222" fill="#00c896" fontSize="10" fontFamily="monospace">🎯 KPI</text>
        <circle cx="430" cy="248" r="18" fill="none" stroke="#00c896" strokeWidth="4" strokeDasharray="85 28" strokeDashoffset="0"/>
        <circle cx="430" cy="248" r="18" fill="none" stroke="#1b1a2e" strokeWidth="4"/>
        <text x="430" y="253" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">85%</text>
      </g>

      {/* Floating card 4 - left bottom */}
      <g>
        <rect x="15" y="340" width="130" height="70" rx="12" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1.5"/>
        <text x="30" y="362" fill="#c770f0" fontSize="10" fontFamily="monospace">🔍 Insights</text>
        <rect x="30" y="372" width="100" height="6" rx="3" fill="#c770f0" opacity="0.3"/>
        <rect x="30" y="372" width="75" height="6" rx="3" fill="#c770f0" opacity="0.8"/>
        <rect x="30" y="384" width="100" height="6" rx="3" fill="#f0a500" opacity="0.3"/>
        <rect x="30" y="384" width="55" height="6" rx="3" fill="#f0a500" opacity="0.8"/>
        <rect x="30" y="396" width="100" height="6" rx="3" fill="#00c896" opacity="0.3"/>
        <rect x="30" y="396" width="85" height="6" rx="3" fill="#00c896" opacity="0.8"/>
      </g>

      {/* Person standing */}
      {/* Head */}
      <circle cx="250" cy="165" r="35" fill="#f0c080" stroke="#c770f0" strokeWidth="2"/>
      {/* Hair */}
      <ellipse cx="250" cy="138" rx="35" ry="15" fill="#2a1a00"/>
      <rect x="215" y="138" width="70" height="15" rx="5" fill="#2a1a00"/>
      {/* Eyes */}
      <circle cx="238" cy="165" r="4" fill="#2a1a00"/>
      <circle cx="262" cy="165" r="4" fill="#2a1a00"/>
      <circle cx="239" cy="164" r="1.5" fill="white"/>
      <circle cx="263" cy="164" r="1.5" fill="white"/>
      {/* Smile */}
      <path d="M238 175 Q250 184 262 175" stroke="#2a1a00" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Neck */}
      <rect x="242" y="198" width="16" height="15" fill="#f0c080"/>
      {/* Body */}
      <rect x="205" y="210" width="90" height="110" rx="15" fill="#6d20c5"/>
      {/* Collar */}
      <path d="M242 210 L250 228 L258 210" fill="white" opacity="0.9"/>
      {/* Belt */}
      <rect x="205" y="295" width="90" height="10" rx="4" fill="#4a0f8a"/>
      {/* Left arm - pointing at chart */}
      <rect x="155" y="215" width="52" height="16" rx="8" fill="#6d20c5" transform="rotate(-20 155 215)"/>
      {/* Right arm - down */}
      <rect x="295" y="215" width="45" height="16" rx="8" fill="#6d20c5" transform="rotate(15 295 215)"/>
      {/* Left hand */}
      <circle cx="148" cy="238" r="10" fill="#f0c080"/>
      {/* Right hand */}
      <circle cx="336" cy="232" r="10" fill="#f0c080"/>
      {/* Pants */}
      <rect x="205" y="315" width="40" height="80" rx="8" fill="#2d1950"/>
      <rect x="255" y="315" width="40" height="80" rx="8" fill="#2d1950"/>
      {/* Shoes */}
      <ellipse cx="225" cy="398" rx="22" ry="10" fill="#1a1a2e"/>
      <ellipse cx="275" cy="398" rx="22" ry="10" fill="#1a1a2e"/>

      {/* Laptop on desk */}
      <rect x="170" y="405" width="160" height="8" rx="3" fill="#c770f0" opacity="0.6"/>
      <rect x="190" y="380" width="120" height="28" rx="4" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1.5"/>
      {/* Screen content */}
      <rect x="196" y="385" width="50" height="4" rx="2" fill="#c770f0" opacity="0.7"/>
      <rect x="196" y="393" width="35" height="4" rx="2" fill="#f0a500" opacity="0.7"/>
      <rect x="256" y="385" width="48" height="16" rx="3" fill="#c770f0" opacity="0.2"/>
      <polyline points="258,398 265,390 272,394 279,386 286,389 293,382 300,385" fill="none" stroke="#00c896" strokeWidth="1.5"/>

      {/* Floating data points */}
      <circle cx="180" cy="280" r="4" fill="#c770f0" opacity="0.8">
        <animate attributeName="cy" values="280;270;280" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="320" cy="300" r="4" fill="#f0a500" opacity="0.8">
        <animate attributeName="cy" values="300;290;300" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="200" cy="340" r="3" fill="#00c896" opacity="0.8">
        <animate attributeName="cy" values="340;330;340" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="260" r="3" fill="#c770f0" opacity="0.8">
        <animate attributeName="cy" values="260;250;260" dur="2.2s" repeatCount="indefinite"/>
      </circle>

      {/* Connecting lines from person to charts */}
      <line x1="148" y1="238" x2="148" y2="130" stroke="#c770f0" strokeWidth="1" strokeDasharray="5,5" opacity="0.4"/>
      <line x1="148" y1="130" x2="150" y2="130" stroke="#c770f0" strokeWidth="1" opacity="0.4"/>

      {/* Pulse ring around person */}
      <circle cx="250" cy="280" r="120" fill="none" stroke="#c770f0" strokeWidth="1" opacity="0.1">
        <animate attributeName="r" values="120;130;120" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.1;0.05;0.1" dur="3s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

export default HomeMain;