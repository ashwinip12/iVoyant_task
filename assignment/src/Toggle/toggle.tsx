
import {useState} from 'react';

export const useToggle=()=>
{
   const[toggle,setToggle]=useState<boolean>(true)
   return {toggle,setToggle};
   
 
}

