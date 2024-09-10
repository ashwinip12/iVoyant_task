import React from 'react';
import { render,screen} from '@testing-library/react';
import Test from '../Test';

test("Test",()=>
{       
render(<Test/>);
const TestElement=screen.getAllByTestId("test-id");
expect(TestElement).toBeInTheDocument();
})


