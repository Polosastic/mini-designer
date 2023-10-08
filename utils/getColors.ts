import { useDesignStore } from '~/stores/design';

interface Colour {
  name: string;
  color: string;
  price: number;
}

export default async function getColors(): Promise<Colour[]|null> {
    const response = await useFetch("/api/colors");
    const fetchedColors: Colour[] | null = response.data?.value;

    if (fetchedColors) {
      return fetchedColors;
    } else {
      console.error('No colors fetched.');
      return [];
    }
}