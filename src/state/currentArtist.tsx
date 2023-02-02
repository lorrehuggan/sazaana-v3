import { create } from 'zustand';

interface CurrentArtistState {
  id: string;
  setId: (id: string) => void;
}

export const useCurrentArtistStore = create<CurrentArtistState>((set) => ({
  id: '',
  setId: (id) => set({ id }),
}));
