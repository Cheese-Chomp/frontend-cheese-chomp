import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';


describe('CheeseList.jsx', () => {
  it('checks for loading and rendering detail of selected cheese', async () => {
    render(
      <MemoryRouter
      initialEntries={["/4"]}
      >
        <App />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const name = await screen.findByText('Brie');
    expect(name).toBeInTheDocument();
  });

});