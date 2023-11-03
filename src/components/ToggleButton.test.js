// src/components/ToggleButton.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleButton } from './ToggleButton';

it('Toggle button switches state on click', () => {
  render(<ToggleButton />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent(/off/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/on/i);
});
