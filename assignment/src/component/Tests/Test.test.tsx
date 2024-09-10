import React from 'react';
import { render, screen } from '@testing-library/react';
import Test from '../Test';

test('renders the Test component', () => {
  render(<Test />);
  const TestElement = screen.getByText(/hello/i);
  expect(TestElement).toBeInTheDocument(); // Ensure jest-dom is correctly imported
});
