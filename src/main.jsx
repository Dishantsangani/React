import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CallAPI from './CallAPI.jsx'
import Form from './Form.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Home = lazy(() => import('./pages/Home.jsx'));
const Category = lazy(() => import('./pages/Category.jsx'));
const Layout = lazy(() => import('./components/global/Layout.jsx'));
const AdminLayoyt = lazy(() => import('./components/global/AdminLayoyt.jsx'));
const Login = lazy(() => import('./components/admin/Login.jsx'));
const Register = lazy(() => import('./components/admin/Register.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
        ,
      },
      {
        path: "/product",
        element:<Product/>,
      },
      {
        path: "/category",
        element:<Category/>,
      },
    ]
  },
  {
    path:"/admin",
    element:<AdminLayoyt/>,
    children:[
     {
      path:"login",
      element:<Login/>
     },
     {
      path:"register",
      element:<Register/>
     }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Suspense
        fallback={()=><h1>Loading....</h1>}
        >
          <RouterProvider router={router}/>
        </Suspense>

</>


,
)
