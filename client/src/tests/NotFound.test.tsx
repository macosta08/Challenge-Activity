import { render, screen } from '@testing-library/react';
import NotFound from '../components/notFound/NotFound';

describe('Prueba en <NotFound />', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });

  test('Debe contener el parrafo', () => {
    const parrafo = 'No hay publicaciones que coincidan con tu búsqueda.';
    render(<NotFound />);

    expect(screen.getByText(parrafo)).toBeTruthy();

    expect(screen.getByTestId('paragraph').innerHTML).toContain(parrafo);
  });
});
