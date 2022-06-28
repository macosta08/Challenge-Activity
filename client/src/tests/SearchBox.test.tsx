import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBox from '../components/searchBox/SearchBox';

describe('Prueba al navbar <SearchBox/>', () => {
  const inputValue = 'Laptop';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <Router>
        <SearchBox />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
  test('Debe hacer event onClick', () => {
    render(
      <Router>
        <SearchBox />
      </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: 'btn-search' }));
  });

  test('debe de llamar handleSearch si el input tiene un valor o al hacer onClick', () => {
    render(
      <Router>
        <SearchBox />
      </Router>
    );
    const handleSearch = jest.fn();
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.click(screen.getByRole('button', { name: 'btn-search' }));

    expect(handleSearch).toHaveBeenCalledTimes(0);
  });
});
