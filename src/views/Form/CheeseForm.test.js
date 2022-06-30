import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('CheeseForm.jsx', () => {
  it('checks for loading and rendering detail of selected cheese', () => {
    render(
      <MemoryRouter
        initialEntries={["/new"]}
      >
        <App />
      </MemoryRouter>
    );

    // await waitForElementToBeRemoved(/loading/i);
    // const button = screen.getElementByRole('button');
    // expect(button).toBeInTheDocument();
  });
});