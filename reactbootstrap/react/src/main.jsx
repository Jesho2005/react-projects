import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.jsx'
import Home from './home.jsx'
import Notfound from './notfound.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<Notfound/>
},
{
  path:"/login",
  element:<Login/>
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
