import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Succes from './Succes';

test('On initial render, the succes message does not show', () => {
  render(<Succes />);

  expect(screen.queryByTestId('succes')).not.toBeInTheDocument();
});
