import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './pages/App';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import Account, { loader } from './pages/Account';
import Form from './pages/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: '/',
    element : <NavBar/>,
    children:[
      {
        path: "/",
        element: <Form/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
        children:[{
          path:"/contact/add",
          element: <div>CONTACT ADD</div>
        }]
      },
      {
        path:"/account/:accountId",
        element: <Account/>,
        loader: loader
      }
    ],
    errorElement : <div>404 Not Found</div>
  }
]);


root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
