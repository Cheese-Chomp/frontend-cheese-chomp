import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';


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
    const cheeses = await screen.findByRole('link');
    expect(cheeses.length).toEqual(15);
    const american = await screen.findByText('American');
    expect(american).toBeInTheDocument();
  });
});