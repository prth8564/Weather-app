import React from 'react'

//function Greet()
//{
  //  return <h1>Hello World</h1>
//}

export const Greet =(props) =>
{
  console.log(props)
  return( 
  <div><h1>Hey {props.name}</h1>
  {props.children}</div>)
}

//export default Greet