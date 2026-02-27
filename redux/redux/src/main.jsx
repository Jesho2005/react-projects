import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './App.jsx'
import Display from './display.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import Store from './app/store'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Form/>
  },{
    path:'/disp',
    element:<Display/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Provider store={Store}>
  <RouterProvider router={router}/>
 </Provider>
     
     
  </StrictMode>,
)
