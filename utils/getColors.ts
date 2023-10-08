import { useDesignStore } from '~/stores/design';

interface Colour {
  name: string;
  color: string;
  price: number;
}

export default function getColors() {
  const designStore = useDesignStore();
  const colors = ref<Colour[]>([]);

  const fetchColors = async () => {
    try {
      const response = await useFetch("/api/colors");
      const fetchedColors:Colour[] | null = response.data?.value;
      if (fetchedColors) {
        // Update the colors in the store
        designStore.setColors(fetchedColors);
        
        // Update the local ref with the fetched colors
        colors.value = fetchedColors;
      } else {
        console.error('No colors fetched.');
      }
    } catch (error) {
      console.error('Error fetching colors:', error);
    }
  };

  onMounted(() => {
    fetchColors();
  });

  return colors;
}