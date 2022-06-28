import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '../components/breadcrumb/Breadcrumb';

describe('Prueba en <Breadcrumb />', () => {
  const categories = ['Hogar', 'Textiles', 'Ropa'];
  test('Prueba Snapshot', () => {
    const { container } = render(<Breadcrumb categories={categories} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el categories enviado por props', () => {
    render(<Breadcrumb categories={categories} />);

    expect('Hogar').toBeTruthy();
  });
});
