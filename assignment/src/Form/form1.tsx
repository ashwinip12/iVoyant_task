import React from 'react';
import { useForm } from './form';


export const MyForm=()=>
{
  const {name,place,setName,setPlace}=useForm();

 

  return(
  <>
  <h3>Form </h3>
  <input type="text"
  value={name}
  onChange={(e)=>setName(e.target.value)}
  placeholder='enter your name'/>
   <p>{name}</p>
   <input type="text"
  value={place}
  onChange={(e)=>setPlace(e.target.value)}
  placeholder='enter your name'/>
  <p>{place}</p>
  <button onClick={()=>console.log(`name:${name} place:${place}`)}>submit</button>
  </>
  )
}