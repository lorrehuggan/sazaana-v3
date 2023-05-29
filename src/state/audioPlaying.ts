import { create } from 'zustand';

interface AudioPlayingState {
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  id: string;
  setId: (id: string) => void;
}

export const useAudioPlayingState = create<AudioPlayingState>((set) => ({
  playing: false,
  setPlaying: (playing) => set({ playing }),
  id: '',
  setId: (id) => set({ id }),
}));
