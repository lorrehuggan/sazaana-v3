import { TrackData } from '@utils/types';
import { create } from 'zustand';

interface CurrentPlaylistState {
  data: TrackData[];
  setData: (data: TrackData[]) => void;
  shadowData: TrackData[];
  setShadowData: (data: TrackData[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: any;
  setError: (error: any) => void;
}

export const useCurrentPlaylistStore = create<CurrentPlaylistState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  shadowData: [],
  setShadowData: (data) => set({ shadowData: data }),
  isLoading: false,
  error: null,
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
