function WindCompass({ degrees }) {
  return (
    <div className="flex justify-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        {/* outer circle */}
        <circle
          cx="90"
          cy="90"
          r="55"
          fill="none"
          stroke="#D1D5DB"
          strokeWidth="3"
          strokeDasharray="5 5"
        />

        <text x="90" y="20" textAnchor="middle" fontWeight="bold" fill="white">
          N
        </text>
        <text x="90" y="170" textAnchor="middle" fontWeight="bold" fill="white">
          S
        </text>
        <text x="165" y="95" textAnchor="middle" fontWeight="bold" fill="white">
          E
        </text>
        <text x="15" y="95" textAnchor="middle" fontWeight="bold" fill="white">
          W
        </text>

        {/* rotating needle */}
        <g
          transform={`rotate(${degrees} 90 90)`}
          style={{ transition: "transform 0.7s ease" }}
        >
          <line
            x1="90"
            y1="90"
            x2="90"
            y2="35"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <polygon points="90,20 82,36 98,36" fill="white" />

          {/* center dot */}
          <circle cx="90" cy="90" r="5" fill="white" />
        </g>
      </svg>
    </div>
  );
}
export default WindCompass;
