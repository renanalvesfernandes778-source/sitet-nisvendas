import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-center">
      <div className="bg-gray-900 text-white rounded p-2 min-w-[3rem]">
        <div className="text-xl font-bold font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-[10px] uppercase tracking-wider text-gray-400">Hrs</div>
      </div>
      <div className="text-2xl font-bold self-start mt-1">:</div>
      <div className="bg-gray-900 text-white rounded p-2 min-w-[3rem]">
        <div className="text-xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-[10px] uppercase tracking-wider text-gray-400">Min</div>
      </div>
      <div className="text-2xl font-bold self-start mt-1">:</div>
      <div className="bg-accent text-white rounded p-2 min-w-[3rem]">
        <div className="text-xl font-bold font-mono">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-[10px] uppercase tracking-wider text-white/80">Sec</div>
      </div>
    </div>
  );
}
