import React from "react";

function HomeDashboard() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "480px" }}>
      {/* Background */}
      <rect x="30" y="30" width="440" height="440" rx="20" fill="#0c0513" stroke="#c770f0" strokeWidth="1.5" opacity="0.8"/>

      {/* Dashboard header */}
      <rect x="30" y="30" width="440" height="50" rx="20" fill="#1b1a2e"/>
      <circle cx="65" cy="55" r="8" fill="#ff5f57"/>
      <circle cx="90" cy="55" r="8" fill="#febc2e"/>
      <circle cx="115" cy="55" r="8" fill="#28c840"/>
      <text x="200" y="61" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">Data Analytics Dashboard</text>

      {/* KPI Cards Row */}
      <rect x="50" y="100" width="90" height="60" rx="10" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1"/>
      <text x="95" y="122" fill="#c770f0" fontSize="9" textAnchor="middle" fontFamily="monospace">Total Sales</text>
      <text x="95" y="148" fill="white" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">$48.2K</text>

      <rect x="155" y="100" width="90" height="60" rx="10" fill="#1b1a2e" stroke="#f0a500" strokeWidth="1"/>
      <text x="200" y="122" fill="#f0a500" fontSize="9" textAnchor="middle" fontFamily="monospace">Growth</text>
      <text x="200" y="148" fill="white" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">+23.5%</text>

      <rect x="260" y="100" width="90" height="60" rx="10" fill="#1b1a2e" stroke="#00c896" strokeWidth="1"/>
      <text x="305" y="122" fill="#00c896" fontSize="9" textAnchor="middle" fontFamily="monospace">Users</text>
      <text x="305" y="148" fill="white" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">12.4K</text>

      <rect x="365" y="100" width="90" height="60" rx="10" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1"/>
      <text x="410" y="122" fill="#c770f0" fontSize="9" textAnchor="middle" fontFamily="monospace">Accuracy</text>
      <text x="410" y="148" fill="white" fontSize="16" textAnchor="middle" fontFamily="monospace" fontWeight="bold">85%</text>

      {/* Bar Chart */}
      <rect x="50" y="180" width="200" height="140" rx="10" fill="#1b1a2e" stroke="#c770f0" strokeWidth="1"/>
      <text x="150" y="200" fill="white" fontSize="10" textAnchor="middle" fontFamily="monospace">Monthly Revenue</text>
      <rect x="65" y="260" width="18" height="45" rx="3" fill="#c770f0" opacity="0.9"/>
      <rect x="90" y="245" width="18" height="60" rx="3" fill="#f0a500" opacity="0.9"/>
      <rect x="115" y="255" width="18" height="50" rx="3" fill="#00c896" opacity="0.9"/>
      <rect x="140" y="235" width="18" height="70" rx="3" fill="#c770f0" opacity="0.9"/>
      <rect x="165" y="248" width="18" height="57" rx="3" fill="#f0a500" opacity="0.9"/>
      <rect x="190" y="228" width="18" height="77" rx="3" fill="#00c896" opacity="0.9"/>
      <line x1="60" y1="305" x2="235" y2="305" stroke="#c770f0" strokeWidth="0.5" opacity="0.3"/>
      <text x="65" y="318" fill="#888" fontSize="7" fontFamily="monospace">Jan</text>
      <text x="90" y="318" fill="#888" fontSize="7" fontFamily="monospace">Feb</text>
      <text x="115" y="318" fill="#888" fontSize="7" fontFamily="monospace">Mar</text>
      <text x="140" y="318" fill="#888" fontSize="7" fontFamily="monospace">Apr</text>
      <text x="165" y="318" fill="#888" fontSize="7" fontFamily="monospace">May</text>
      <text x="190" y="318" fill="#888" fontSize="7" fontFamily="monospace">Jun</text>

      {/* Pie Chart */}
      <rect x="265" y="180" width="190" height="140" rx="10" fill="#1b1a2e" stroke="#f0a500" strokeWidth="1"/>
      <text x="360" y="200" fill="white" fontSize="10" textAnchor="middle" fontFamily="monospace">Data Sources</text>
      <circle cx="340" cy="260" r="45" fill="none" stroke="#c770f0" strokeWidth="18" strokeDasharray="85 198" strokeDashoffset="0"/>
      <circle cx="340" cy="260" r="45" fill="none" stroke="#f0a500" strokeWidth="18" strokeDasharray="60 198" strokeDashoffset="-85"/>
      <circle cx="340" cy="260" r="45" fill="none" stroke="#00c896" strokeWidth="18" strokeDasharray="53 198" strokeDashoffset="-145"/>
      <circle cx="340" cy="260" r="20" fill="#0c0513"/>
      <text x="340" y="265" fill="white" fontSize="9" textAnchor="middle" fontFamily="monospace">SQL</text>
      <rect x="395" y="235" width="8" height="8" rx="2" fill="#c770f0"/>
      <text x="408" y="243" fill="#888" fontSize="8" fontFamily="monospace">MySQL</text>
      <rect x="395" y="252" width="8" height="8" rx="2" fill="#f0a500"/>
      <text x="408" y="260" fill="#888" fontSize="8" fontFamily="monospace">Excel</text>
      <rect x="395" y="269" width="8" height="8" rx="2" fill="#00c896"/>
      <text x="408" y="277" fill="#888" fontSize="8" fontFamily="monospace">Power BI</text>

      {/* Line Chart */}
      <rect x="50" y="335" width="405" height="110" rx="10" fill="#1b1a2e" stroke="#00c896" strokeWidth="1"/>
      <text x="252" y="355" fill="white" fontSize="10" textAnchor="middle" fontFamily="monospace">Performance Trend</text>
      <polyline points="70,420 110,400 150,410 190,385 230,390 270,370 310,375 350,355 390,360 430,340" fill="none" stroke="#c770f0" strokeWidth="2.5" strokeLinecap="round"/>
      <polyline points="70,430 110,425 150,418 190,410 230,415 270,400 310,405 350,390 390,385 430,370" fill="none" stroke="#f0a500" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,2"/>
      {[70,110,150,190,230,270,310,350,390,430].map((x, i) => (
        <circle key={i} cx={x} cy={[420,400,410,385,390,370,375,355,360,340][i]} r="3" fill="#c770f0"/>
      ))}
      <line x1="60" y1="440" x2="440" y2="440" stroke="#c770f0" strokeWidth="0.5" opacity="0.2"/>

      {/* Animated pulse on KPI */}
      <circle cx="95" cy="130" r="40" fill="none" stroke="#c770f0" strokeWidth="1" opacity="0.2">
        <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

export default HomeDashboard;