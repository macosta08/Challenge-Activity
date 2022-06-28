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
  sold_quantity: number;
  description: string;
}

interface ProductType {
  author: { name: string; lastname: string };
  categories: string[];
  item: ItemType;
}

export const useFetchDetail = (url: string) => {
  const [products, setProducts] = useState<ProductType>({
    author: { name: '', lastname: '' },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
        decimals: 0,
      },
      picture: '',
      condition: '',
      free_shipping: false,
      sold_quantity: 0,
      description: '',
    },
  });
  const { categories, item } = products;
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
    item,
    isLoading,
  };
};
