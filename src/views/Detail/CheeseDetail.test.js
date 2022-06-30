import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../../App';


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

    const image = await screen.findByAltText('Brie');
    expect(image).toBeInTheDocument();

    const description = await screen.findByText(/brie is a soft/i);
    expect(description).toBeInTheDocument();

    const pairs = await screen.findByText(/turkey/i);
    expect(pairs).toBeInTheDocument();

    const smells = await screen.findByText(/it do not smell/i);
    expect(smells).toBeInTheDocument();
  });

});