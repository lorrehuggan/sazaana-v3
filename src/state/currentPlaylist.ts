import { Track } from '@utils/types';
import { create } from 'zustand';

interface CurrentPlaylistState {
  data: Track[] | undefined;
  setData: (data: Track[]) => void;
}

export const useCurrentPlaylistStore = create<CurrentPlaylistState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
