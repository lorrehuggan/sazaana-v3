import { create } from "zustand";

export type Filter = {
  label: string;
  low: string;
  high: string;
  min: number;
  max: number;
  step: number;
};

interface CurrentFilterState {
  filter: Filter[];
  setFilter: (filter: Filter[]) => void;
}

export const useCurrentFilterState = create<CurrentFilterState>((set) => ({
  filter: [],
  setFilter: (filter) => set({ filter }),
}));
