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
  colors: Colour[]; 
  motives: Motive[];
}
export const useDesignStore = defineStore({
  id:'design',
  state: (): DesignState => ({
    colors: [],
    motives: [],
  }),
  actions: {
    setColors(colors:Colour[]) {
      this.colors = colors;
    },
    setMotives(motives:Motive[]) {
      this.motives = motives;
    },
  },
  getters: {
    getColorsArray(state): Colour[] {
      if(state.colors === null){
       state.colors = getColors().value;
      }
      return state.colors;
    },
    getMotivesArray(state): Motive[] {
      if(state.motives === null){
       state.motives = getMotives().value;
      }
      return state.motives;
    },
  },
});