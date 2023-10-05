import { defineStore } from 'pinia';

interface DesignState {
  selectedColors: string[];
  selectedMotives: string[];
}

export const useDesignStore = defineStore({
  id: 'design',
  state: (): DesignState => ({
    selectedColors: [],
    selectedMotives: [],
  }),

  actions: {
    updateSelectedColors(colors: string[]) {
      this.selectedColors = colors;
    },
    updateSelectedMotives(motives: string[]) {
      this.selectedMotives = motives;
    },
  },
});