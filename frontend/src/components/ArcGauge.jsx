function ArcGauge({
  value,
  text,
  max = 100,
  size = 240,
  strokeWidth = 14,
  color = "#3B82F6",
  label = "",
}) {
  // radius
  const radius = size / 2 - strokeWidth;

  // arc length
  const circumference = Math.PI * radius;

  // percentage
  const percent = value / max;

  // reveal only a part of the arc
  const dashOffset = circumference * (1 - percent);

  // const angle = Math.pi * percent;
  // const dotX = strokeWidth + radius - radius * Math.cos(angle);
  // const dotY = size / 2 - radius * Math.sin(angle);

  return (
    <div className="flex justify-center">
      <svg width={size} height={size / 2 + 40}>
        {/* background arc */}
        <path
          d={`M ${strokeWidth} ${size / 2}
            A ${radius} ${radius}
            0 0 1
            ${size - strokeWidth} ${size / 2}`}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* foreground arc */}
        <path
          d={`M ${strokeWidth} ${size / 2}
            A ${radius} ${radius}
            0 0 1
            ${size - strokeWidth} ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.7s ease" }}
        />

        {/* moving dot
        <circle
          cx={dotX}
          cy={dotY}
          r="8"
          fill={color}
          style={{ transition: "all 0.7s ease" }}
        /> */}

        {/* values */}
        <text
          x={size / 2}
          y={size / 2 - 20}
          textAnchor="middle"
          className="fill-current"
          style={{ fontSize: 36, fontWeight: "bold" }}
        >
          {value}
          {text}
        </text>

        {/* label */}
        <text
          x={size / 2}
          y={size / 2 + 10}
          textAnchor="middle"
          fill="#fff"
          fontSize={20}
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
export default ArcGauge;
