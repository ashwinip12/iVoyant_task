//import React, { useEffect } from 'react';
import {useState} from 'react';


export const useForm=()=>
{
 const[name,setName]=useState('');
 const[place,setPlace]=useState('');

//  useEffect(()=>
//  {
//     console.log(`name:${name} place:${place}`);
//     setName(name)
//     setPlace(place)
 
//  },[name,place])


  return {name, setName, place, setPlace}
 
 
}