import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';

test('Check if sidebar renders', () => {
  render(<Sidebar />);

  expect(screen.getByRole('heading', { name: /HEADFWD/i })).toBeInTheDocument();
});

test('Modal pops up after user clicks on add playlist', () => {
  render(<Sidebar />);

  userEvent.click(screen.getByText(/Nieuwe Playlist/i));

  expect(screen.queryByTestId('modal')).toBeInTheDocument();
});
