import { useDesignStore } from '~/stores/design';

interface Motive {
  name: string;
  img: string;
  price: number;
}

export default async function getMotives(): Promise<Motive[]|null> {
  const response = await useFetch("/api/motives");
  const fetchedMotives: Motive[] | null = response.data?.value;

  if (fetchedMotives) {
    return fetchedMotives;
  } else {
    console.error('No motives fetched.');
    return [];
  }
}