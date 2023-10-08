import { defineStore } from 'pinia';
import getColors from '~/utils/getColors'; 
import getMotives from '~/utils/getMotives'; 
interface Colour {
  name: string;
  color: string;
  price: number;
}
interface Motive{
  name: string;
  img: string;
  price: number;
}
interface DesignState {
  colors: Colour[]|null; 
  motives: Motive[]|null;
}
export const useDesignStore = defineStore({
  id:'design',
  state: (): DesignState => ({
    colors: null,
    motives: null,
  }),
  actions: {
    async fetchAndSetColors() {
      try {
        const colors = await getColors();
        this.setColors(colors);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    },
    setColors(colors:Colour[]|null) {
      this.colors = colors;
    },
    async fetchAndSetMotives() {
      try {
        const motives = await getMotives();
        this.setMotives(motives);
      } catch (error) {
        console.error('Error fetching motives:', error);
      }
    },
    setMotives(motives:Motive[]|null) {
      this.motives = motives;
    },
  },
  getters: {
    getColorsArray(state): Colour[]|null {
      return state.colors;
    },
    getMotivesArray(state): Motive[]|null {
      return state.motives;
    },
  },
});