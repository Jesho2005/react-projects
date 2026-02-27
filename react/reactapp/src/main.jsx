import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './footer.jsx'
 import { createBrowserRouter,RouterProvider } from 'react-router-dom';
 import Counter from './counter.jsx';
 import Purchase from './purchase.jsx';
 const router=createBrowserRouter([
   { 
    path:"/",
    element:<App/>
   },
   {
    path:"/footer",
    element:<Footer/>
   },
{
  path:"/counter",
  element:<Counter/>
},
{
  path:"/purchase/:id",
  element:<Purchase/>
}
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
