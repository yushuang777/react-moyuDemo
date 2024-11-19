import { create } from "zustand";
import React from "react";
const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Index() {
  const { count, inc } = useStore() as { count: string; inc: () => void };
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
export default Index;
