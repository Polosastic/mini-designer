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
interface User{
  name: string;
  email: string;
}
interface DesignState {
  colors: Colour[]|null; 
  motives: Motive[]|null;
  selectedColor: Colour|null;
  selectedMotive: Motive|null;
  sum: number | null,
  user: User|null,
}
export const useDesignStore = defineStore({
  id:'design',
  state: (): DesignState => ({
    colors: null,
    motives: null,
    selectedColor: null,
    selectedMotive: null,
    sum: 0.00,
    user: null,
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
    async fetchAndSetMotives() {
      try {
        const motives = await getMotives();
        this.setMotives(motives);
      } catch (error) {
        console.error('Error fetching motives:', error);
      }
    },
    async postOrder() {
      try {
        const motives = await useFetch('/api/order', {
          method:'POST',
        });
      } catch (error) {
        console.error('Error posting:', error);
      }
    },
    setColors(colors:Colour[]|null) {
      this.colors = colors;
    },
    setMotives(motives:Motive[]|null) {
      this.motives = motives;
    },
    pickColor(color:Colour|null){
      console.log('I am picked from the store',color);
      return this.selectedColor = color;
    },
    pickMotive(motive:Motive|null){
      console.log('I am picked from the store',motive);
      return this.selectedMotive = motive;
    },
    calculteSum(priceColor:number|null, priceMotive:number|null){
      if( priceColor === undefined || priceColor === null){
        priceColor = 0.00;
      }
      if( priceMotive === undefined || priceMotive === null){
        priceMotive = 0.00;
      }
      return this.sum = priceColor + priceMotive;
    },
  },
  getters: {
    getColorsArray(state): Colour[]|null {
      return state.colors;
    },
    getMotivesArray(state): Motive[]|null {
      return state.motives;
    },
    reset(state){
      let selectedColor = state.selectedColor;
      let selectedMotive = state.selectedMotive;
      let sum = state.sum;
      selectedColor = null;
      selectedMotive = null;
      sum = 0;
      return { selectedColor, selectedMotive, sum}
    },
  },
});