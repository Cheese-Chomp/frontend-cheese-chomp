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

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const fields = screen.getAllByRole('textbox');
    expect(fields.length).toEqual(4);

    const radios = screen.getAllByRole('radio');
    expect(radios.length).toEqual(2);

  });
});