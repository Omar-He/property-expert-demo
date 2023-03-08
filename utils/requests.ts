export interface elementType {
  id: number;
  title: string;
}

export const fetchList = async (type: string): Promise<elementType[]> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${type}?_limit=3`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
