import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './App.jsx'
import Valid from './valid.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/valid', element: <Valid /> }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode> 
   <RouterProvider router={router} />
 </StrictMode>,
)
