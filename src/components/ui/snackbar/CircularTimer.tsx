import { type FC, useEffect, useState } from "react";

const oneSecond = 1000; // milliseconds
const radius = 11;

export const CircularTimer: FC<{ totalTime: number }> = ({ totalTime }) => {
  const [remainingTime, setRemainingTime] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev: number) => prev - oneSecond);
    }, oneSecond);
    if (remainingTime <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [remainingTime, totalTime]);

  const percentRemaining = (remainingTime * 100) / totalTime;
  const strokeDasharray = Math.PI * 2 * radius;
  const strokeDashoffset =
    strokeDasharray - (strokeDasharray * percentRemaining) / 100;
  const seconds = remainingTime / oneSecond;

  return (
    <div className="relative">
      <svg viewBox="12 12 24 24" className="timer -rotate-90" width={24}>
        <circle
          cx="24"
          cy="24"
          r={radius.toString()}
          fill="none"
          stroke="#F8F8F8"
          strokeWidth="1.5"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-spacing-25 text-caption-2 text-text-inverse-default">
        {seconds > 0 ? seconds : ""}
      </span>
    </div>
  );
};
