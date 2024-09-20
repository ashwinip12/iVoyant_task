//import React from 'react';
import {useState,useEffect} from 'react';

export const useFetch=(url: string)=>
{

const[data,setData]=useState<string[]>([])
 useEffect(()=>
 {
   fetch(url)
   .then((response)=>response.json())
   .then((data)=>
   {
   setData(data)
   console.log(data)
   })
 
 },[setData])

 

return {data}
}