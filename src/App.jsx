import React from 'react'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Faculty from './Pages/Faculty';
import Search from './Pages/Search';

const Container=styled.div`
    background-color: rgb(238, 238, 238);
    width:100%;
    height:100vh;
`


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/faculty",
    element: <Faculty/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
]);

const App = () => {
  return (
    <Container>
      <Navbar/>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
