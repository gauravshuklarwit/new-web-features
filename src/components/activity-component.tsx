"use client";
import { Activity, useState } from "react";
import Counter from "@/components/counter";

export function ActivityComponent() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="grid gap-4">
        {/* Without <Activity> - where state resets */}
        {/* {isVisible && <Counter />} */}

        {/* With <Activity> - where state preserved */}
        <Activity mode={isVisible ? "visible" : "hidden"}>
          <Counter />
        </Activity>

        <div className="flex gap-4 justify-between">
          <button
            className="bg-red-200 text-red-950 px-2 py-1 rounded text-sm font-semibold"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide Counter
          </button>
          <button
            className="bg-green-200 text-green-950 px-2 py-1 rounded text-sm font-semibold"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            Show Counter
          </button>
        </div>
      </div>
    </div>
  );
}
