import { useEffect, useState } from 'react';

interface ItemType {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

interface ProductType {
  author: { name: string; lastname: string };
  categories: string[];
  items: Array<ItemType>;
}

export const useFetchItems = (url: string) => {
  const [products, setProducts] = useState<ProductType>({
    author: { name: '', lastname: '' },
    categories: [],
    items: [],
  });
  const { categories, items } = products;
  const [isLoading, setIsLoading] = useState(true);

  const getDataItems = async () => {
    setIsLoading(true);
    const newProducts = await fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error(error);
      });
    setProducts(newProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataItems();
  }, [url]);

  return {
    categories,
    items,
    isLoading,
  };
};
