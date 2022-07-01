import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('CheeseList.jsx', () => {
  it('checks for loading and rendered list of cheeses', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    const heading = await screen.findByText('Welcome to Cheese Chomp');
    expect(heading).toBeInTheDocument();
    // const cheeses = await screen.findAllByRole('heading', {level: 2});
    // expect(cheeses.length).toEqual(15);
    const brie = await screen.findByText('Brie');
    expect(brie).toBeInTheDocument();
  });
});
