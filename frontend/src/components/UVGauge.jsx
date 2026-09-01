function UVGauge({ value, label }) {
  const segments = 11;
  const uv = value;
  const activeSegments = Math.round((uv / 11) * segments);

  const width = 260;
  const height = 190;

  const radius = 110;
  // const radiusX = 95;
  // const radiusY = 70;

  const startAngle = -88;
  const endAngle = 88;
  const sweep = endAngle - startAngle;

  const cx = width / 2;
  const cy = 135; //height - 25;

  const colorLow = "#299501";
  const colorModerate = "#F7E400";
  const colorHigh = "#F85900";
  const colorVeryHigh = "#D8001D";
  const colorExtreme = "#6B49C8";

  const updateColor = (uv) => {
    if (uv <= 2) {
      return colorLow;
    }
    if (uv <= 5) {
      return colorModerate;
    }
    if (uv <= 7) {
      return colorHigh;
    }
    if (uv <= 10) {
      return colorVeryHigh;
    }

    return colorExtreme;
  };

  let color = updateColor(uv);
  let inactiveColor = "#E5E7EB";

  return (
    <div className="flex justify-center">
      <svg width={width} height={height}>
        {Array.from({ length: segments }).map((_, index) => {
          const angle = startAngle - 90 + (sweep / (segments - 1)) * index;
          const radians = (angle * Math.PI) / 180;
          const x = cx + radius * Math.cos(radians);
          const y = cy + radius * Math.sin(radians);
          const rotation = angle + 90;

          return (
            <rect
              key={index}
              x={x - 7}
              y={y - 18}
              width={14}
              height={36}
              rx={7}
              fill={index < activeSegments ? color : inactiveColor}
              transform={`rotate(${rotation} ${x} ${y})`}
              style={{
                transition: "fill 0.4s ease",
                transitionDelay: `${index * 35}ms`,
              }}
            />
          );
        })}

        {/* value */}
        <text
          x={cx}
          y={cy - 20}
          textAnchor="middle"
          fontSize={48}
          fontWeight={700}
          fill={"#fff"}
        >
          {uv}
        </text>

        {/* label */}
        <text
          x={cx}
          y={cy + 18}
          textAnchor="middle"
          fontSize={20}
          fontWeight={600}
          fill={"#fff"}
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
export default UVGauge;
