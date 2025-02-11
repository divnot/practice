//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React, { Children } from "react"
import {  createBrowserRouter, RouterProvider } from "react-router";
import Center1 from "./center";
import Home from "./home";
import About from "./about";



function App() {

  const route = createBrowserRouter([
    {
      path:"/" , 
      element:<Center1/>,
      Children:[
        {
          path:"/",
          element:<Home/>,

        },
        {
          path:"/About",
          element:<About/>,
        }
      ]
      
    }
  ])
 

  return  <RouterProvider route={route} />
}

export default App
