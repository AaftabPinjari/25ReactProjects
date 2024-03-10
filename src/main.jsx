import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Accordian, Home, LoadMore, NestedMenu, RandomColorGenerator, StarRating } from './Components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="accordian" element={<Accordian />} />
      <Route path="random-color-generator" element={<RandomColorGenerator />} />
      <Route path="star-rating" element={<StarRating />} />
      <Route path="random-color-generator" element={<RandomColorGenerator />} />
      <Route path="load-more" element={<LoadMore />} />
      <Route path="nested-menu" element={<NestedMenu />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
