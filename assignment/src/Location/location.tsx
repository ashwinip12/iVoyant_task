import React from 'react';
import { useLocation } from './UseLocation';

export const Location =()=>
{
  const {location}=useLocation();

  return (
  <>
   <h3>Current location</h3>
   <p>latitude:{location.lat}</p>
   <p>longitude:{location.log}</p>
  
  </>)


}