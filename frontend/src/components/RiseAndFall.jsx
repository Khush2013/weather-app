function RiseAndFall({
  type = "sun",
  positionIcon,
  riseTime,
  setTime,
  progress = 0.5,
}) {
  const isSun = type === "sun";
  const clampedProgress = Math.min(Math.max(progress, 0), 1);

  const startX = 35;
  const endX = 365;
  const baseY = 145;
  const controlX = 200;
  const controlY = 55;

  const t = clampedProgress;
  const x =
    Math.pow(1 - t, 2) * startX +
    2 * (1 - t) * t * controlX +
    Math.pow(t, 2) * endX;
  const y =
    Math.pow(1 - t, 2) * baseY +
    2 * (1 - t) * t * controlY +
    Math.pow(t, 2) * baseY;

  const iconOpacity = clampedProgress === 0 || clampedProgress === 1 ? 0.5 : 1;

  // const size = 600;
  // const strokeWidth = 14;
  // const radius = size - strokeWidth;

  return (
    <div className="rounded-[30px] background-white px-4 pt-12 overflow-hidden">
      {/* arc graph */}
      <div className="relative h-30">
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-md">{type}rise</p>
            <h3 className="font-bold text-lg">{riseTime}</h3>
          </div>

          <div className="text-center">
            <p className="text-md">{type}set</p>
            <h3 className="font-bold text-lg">{setTime}</h3>
          </div>
        </div>

        <svg
          viewBox="0 0 400 160"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="150"
            x2="400"
            y2="150"
            stroke="#EEF0F4"
            strokeWidth={18}
          />

          <path
            d="M 35 145 Q 200 55 365 145"
            fill="none"
            stroke={isSun ? "#eee" : "#eee"}
            strokeWidth={2.5}
            strokeDasharray={isSun ? "0" : "7 5"}
            strokeLinecap="round"
          />

          {/* left vertical line */}
          <line
            x1="35"
            y1="145"
            x2="35"
            y2="60"
            stroke="#d9dde5"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />

          {/* right vertical line */}
          <line
            x1="365"
            y1="145"
            x2="365"
            y2="60"
            stroke="#d9dde5"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />

          {/* left endpoint */}
          <circle cx="35" cy="145" r="5" fill="#182235" />

          {/* right endpoint */}
          <circle cx="365" cy="145" r="5" fill="#182235" />
        </svg>
        {/* sun and moon */}
        <div
          className="absolute"
          style={{
            left: `${(x / 400) * 100}%`,
            top: `${(y / 160) * 100}%`,
            transform: "translate(-50%, -50%)",
            opacity: iconOpacity,
          }}
        >
          {positionIcon}
        </div>
      </div>
    </div>
  );
}

export default RiseAndFall;
