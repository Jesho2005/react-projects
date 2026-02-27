import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Course from './course.jsx'
import {Sum} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Course/>
    <Sum/>
  </StrictMode>,
)
