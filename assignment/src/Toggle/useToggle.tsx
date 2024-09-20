import React from 'react';
import { useToggle } from './toggle';

export const Toggle=()=>
{

const {toggle,setToggle}=useToggle()

const handletoggle=()=>
{
setToggle(!toggle)
console.log(toggle? 'on':'off')
}


return (
<>
<h3> Toggle button</h3>
 <button onClick={handletoggle}>{toggle?'ON':'OFF'}</button>
 </>
 )}