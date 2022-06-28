import { renderHook, waitFor } from '@testing-library/react';
import { useFetchItems } from '../../hooks/useFetchItems';

describe('Pruebas en el kook useFetchItems', () => {
  const baseURL = process.env.REACT_APP_URL_ENDPOINT || 'http://localhost:8080';
  const endpoint = `${baseURL}/api/items?q=Pez`;
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchItems(endpoint));
    const { categories, items, isLoading } = result.current;

    expect(categories.length).toBe(0);
    expect(items.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de items y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchItems(endpoint));

    await waitFor(() => expect(result.current.items.length).toBeGreaterThan(0));

    const { items, isLoading } = result.current;

    expect(items.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
