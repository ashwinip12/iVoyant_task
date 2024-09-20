import React from 'react';
import { useWindowSize } from './window';


export const Window=()=>
{

const{width,height}=useWindowSize()

return(

<>
 <h3>Window Size</h3>
 <p>width:{width}</p>
 <p>height:{height}</p>
 
</>)

}