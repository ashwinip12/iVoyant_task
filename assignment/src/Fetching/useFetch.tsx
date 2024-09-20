import React from 'react';
import { useFetch } from './fetch';


export const Fetch=()=>
{
  const {data}=useFetch("https://jsonplaceholder.typicode.com/users")

  const filteredData=(data:[])=>
  {
    return data
    .filter((item: { email: string }) => item.email)
   
    .sort((a: { email: string }, b: { email: string }) => a.email.localeCompare(b.email));
  }


 const fetch=filteredData(data);


return (
<>
<h3>Fetched data</h3>

<ul>
{fetch.map((item:{name:string,username:string,email:string},index)=>
{
  return <li key={index}>{item.name}
  <p>{item.username}</p>
  <p>{item.email}</p>
  {/* <p>{item.address.street}</p> */}
  </li>})}

</ul>
</>

)


}