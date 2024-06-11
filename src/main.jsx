import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Components/Header/Errorpage.jsx'
import CategoryPage from './Pages/Categories/CategoryPage.jsx'
import Search from './Pages/Search.jsx'
import SingleProduct from './Components/Header/Products/SingleProduct.jsx'
import Recipes from './Components/Header/Products/Recipes.jsx'
import Aboutnav from './Components/Header/Products/Aboutnav.jsx'
import Contact from './Components/Header/Products/Contact.jsx'
import Login from './Components/Header/Login.jsx'
import Signup from './Components/Header/Singup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Errorpage/>,
    children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/categories/:category",
      element:<CategoryPage/>
    },
    {
      path:"/search",
      element:<Search/>
    },
    {
      path:"/items/:id",
      element:<SingleProduct/>,
      loader:({params})=>fetch(`https://recipe-heaven-backend.vercel.app/api/items/${params.id}`)
    },
    {
      path:"/Recipies",
      element:<Recipes/>
    },
    {
      path:"/About",
      element:<Aboutnav/>
    },
    {
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
