import React from "react";

interface InputProps {
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Input({ value, set, min = -200, max = 200 }: InputProps) {
  return (
    <label>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
    </label>
  );
}
