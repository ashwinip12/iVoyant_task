//import React from 'react';
import {useEffect,useState} from 'react';


export const useLocation=()=>
{
  const [location,setLocation]=useState<{lat:number,log:number}>({lat:0,log:0})

  useEffect(()=>
  {
      if(!navigator.geolocation)
      {
      console.log('data not available')
      return;
      }
      const success=(position:GeolocationPosition)=>
      {
       const lat=position.coords.latitude;
       const log=position.coords.longitude;
       setLocation({lat,log})
       //console.log(lat,log)
      }
  navigator.geolocation.getCurrentPosition(success)
  },[])
  return {location};
}
