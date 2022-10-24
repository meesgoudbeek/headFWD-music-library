import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('On initial render, the modal does not show', () => {
  render(<Modal />);

  expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
});
