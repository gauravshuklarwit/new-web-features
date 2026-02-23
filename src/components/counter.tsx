"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-2xl mx-auto grid place-items-center gap-4">
      <div className="text-5xl font-bold">{count}</div>
      
      <div className="flex gap-4 justify-between">
        <button onClick={()=>{setCount(count-1)}} className="px-2 py-1 rounded-md bg-purple-200 text-purple-900">-</button>
        <button onClick={()=>{setCount(count+1)}} className="px-2 py-1 rounded-md bg-purple-200 text-purple-900">+</button>
      </div>
    </div>
  );
}
