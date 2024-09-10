import React from 'react'


type GreetProps =
{
name?:string;
}
export const Greet : React.FC<GreetProps>=({name}) => {
  return (
    <div>Hello {name}</div>
  )
}
