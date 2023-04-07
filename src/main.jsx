import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componets/About/About';
import Home from './componets/Home/Home';
import Contact from './componets/Contact/Contact';
import Header from './componets/Header/Header';
import Start from './componets/Start/Start';
import Users from './componets/Users/Users';
import UserDetails from './componets/UserDetails/UserDetails';

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path:'about',
    element: <About></About>
  },
  {
    path: 'home',
    element: <Home></Home>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }

]); */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Start></Start>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/user/:userId',
        element: <UserDetails></UserDetails>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
