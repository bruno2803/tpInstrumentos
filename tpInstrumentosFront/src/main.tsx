import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instrumentos from "./components/Instrumentos";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Instrumentos />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
