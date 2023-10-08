import { useDesignStore } from '~/stores/design';

interface Motive {
  name: string;
  img: string;
  price: number;
}

export default function getMotives() {
  const designStore = useDesignStore();
  const motives = ref<Motive[]>([]);

  const fetchMotives = async () => {
    try {
      const response = await useFetch("/api/motives");
      const fetchedMotives:Motive[] | null = response.data?.value;

      if (fetchedMotives) {
        designStore.setMotives(fetchedMotives);
        motives.value = fetchedMotives;
      } else {
        console.error('No motives fetched.');
      }
    } catch (error) {
      console.error('Error fetching motives:', error);
    }
  };

  onMounted(() => {
    fetchMotives();
  });

  return motives;
}