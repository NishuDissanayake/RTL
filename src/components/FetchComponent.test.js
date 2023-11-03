// src/components/FetchComponent.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { FetchComponent } from './FetchComponent';

it('FetchComponent displays data after async fetch', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve({ greeting: 'Hello!' }),
    })
  );

  render(<FetchComponent url="/greeting" />);
  
  await waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent('Hello!'));
});
