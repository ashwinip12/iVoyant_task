// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Test from '../Test';

// test('renders the Test component', () => {
//   render(<Test />);
//    const testElement = screen.getByTestId(/hello/i);
//   expect(testElement).toBeInTheDocument(); 
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import { Greet } from '../Greet';

describe('Greet',()=>
{
it('renders the Test component', () => {
  render(<Greet/>);
    const testElement = screen.getByText(/Hello/i);
  expect(testElement).toBeInTheDocument(); 
});
})




describe('Nested',()=>
{
it("greet render with a name", ()=>
{
render(<Greet name="ashwini"/>);
const testElement = screen.getByText(/Hello ashwini/i);
expect(testElement).toBeInTheDocument();
})
})
