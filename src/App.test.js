import { render, screen } from '@testing-library/react';
import App from './App';

test('has header in the dom', () => {
  render(<App />);
  const header = screen.getByText(/todos/i);
  expect(header).toBeInTheDocument();
});
