
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Roots from './Layout/Roots';
import ShopNow from './Page/ShopNow/ShopNow';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import SingleProducts from './Componant/SharedComponant/SingleProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
            {
        path: "/shopnow",
        element: <ShopNow></ShopNow>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },

      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/shopnow/:id",
        element: <SingleProducts></SingleProducts>,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
