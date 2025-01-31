// components/live-clock.tsx
"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="-mt-1 flex flex-col items-center justify-center gap-2 text-center text-white">
      <div className="h-4 w-32 text-xl font-semibold">
        {time
          .toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })
          .replace(/\//g, "-")}
      </div>
      <div className="h-4 w-32 text-sm">
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",

          hour12: true,
        })}
      </div>
    </div>
  );
}
