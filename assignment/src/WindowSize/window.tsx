import { useState ,useEffect} from 'react';


export const useWindowSize=()=>
{
 const[windows,setWindows]=useState(
 {
   height:window.innerHeight,
   width:window.innerWidth
 })

useEffect(()=>
{
  const handleResize=()=>
        {
    setWindows({height:window.innerHeight,
   width:window.innerWidth})
        }
  window.addEventListener('resize',handleResize) ;
  
  return()=> window.removeEventListener('resize',handleResize);
  },[])


return windows;

}