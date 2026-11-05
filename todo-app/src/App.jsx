// import React, { useEffect, useState } from 'react'
// import Card from './components/Card'
import { RouterProvider } from 'react-router-dom'
import { myrouter } from './router'

const App = () => {
  // const [data, setData]=useState([])

  // const getCountries=async()=>{
  //   const res=await fetch('https://6a9fd7a03e0d88d3d7e51344.mockapi.io/products')
  //   const data=await res.json()
  //   console.log(data);
  //   setData(data)
  // }
  // useEffect(()=>{
  //   getCountries()
  // },[]) 
  return (
    // <div className='d-flex justify-content-between flex-wrap'>
    //   {data.map((country)=>{
    //    return <Card {...country}/>
    //   })}
      <RouterProvider router={myrouter}/>
    // </div>
  )
}

export default App