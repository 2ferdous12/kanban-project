import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root';
import './index.css'
import Home from './componenet/home';
import Mainhome from './componenet/mainhome';
import Sitebar from './componenet/sitebar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/mainhome",
        element: <Mainhome></Mainhome>
      },
      {
        path: "/sitebar",
        element: <Sitebar></Sitebar>
      }
  
  
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
