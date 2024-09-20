import React from 'react';
import { useCounter } from './counter';


export const Count=()=>
{

const {count, increment, decrement, reset}=useCounter(0);


 return (
  <>
  <h3> Counter</h3>
  <p> count :{count}</p>  
 <button onClick={increment} >+</button> 
 <button onClick={decrement} >-</button> 
 <button onClick={reset} >reset</button> 
  </>
  
  )}