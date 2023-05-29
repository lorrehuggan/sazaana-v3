import { create } from 'zustand';

interface CurrentFeaturesState {
  popularity: number[];
  danceability: number[];
  energy: number[];
  valence: number[];
  tempo: number[];
  acousticness: number[];
  setPopularity: (popularity: number[]) => void;
  setDanceability: (danceability: number[]) => void;
  setEnergy: (energy: number[]) => void;
  setValence: (valence: number[]) => void;
  setTempo: (tempo: number[]) => void;
  setAcousticness: (acousticness: number[]) => void;
}

export const useCurrentFeaturesStore = create<CurrentFeaturesState>((set) => ({
  popularity: [0, 100],
  danceability: [0, 1],
  energy: [0, 1],
  valence: [0, 1],
  tempo: [0, 200],
  acousticness: [0, 1],
  setPopularity: (popularity) => set({ popularity }),
  setDanceability: (danceability) => set({ danceability }),
  setEnergy: (energy) => set({ energy }),
  setValence: (valence) => set({ valence }),
  setTempo: (tempo) => set({ tempo }),
  setAcousticness: (acousticness) => set({ acousticness }),
}));
