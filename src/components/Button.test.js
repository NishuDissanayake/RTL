// src/components/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

it('Button responds to click event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} label="Click me!" />);
  
  fireEvent.click(screen.getByText(/click me!/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
