import React from "react";
import { Application } from "./Application";
import {screen,render} from '@testing-library/react';

describe("Application",()=>
{

it ("render a component",()=>
{
render(<Application/>);

const nameElement=screen.getByRole('textbox',{name:"Name"});
expect(nameElement).toBeInTheDocument();

const bioElement=screen.getByRole('textbox',{name:"Bio"});
expect(bioElement).toBeInTheDocument();

const jobLocationElement=screen.getByRole('combobox');
expect(jobLocationElement).toBeInTheDocument();

const termsElement=screen.getByRole('checkbox');
expect(termsElement).toBeInTheDocument();

const submitButtonElement=screen.getByRole('button');
expect(submitButtonElement).toBeInTheDocument();

})
})
