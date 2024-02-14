import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"

import "./index.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Error from './components/error/Error'
import CityToggle from './components/cityToggle/CityToggle'
import Sandwich from './components/sandwich/Sandwich'
import Product from './features/products/product/Product'
import ProductPage from './features/products/productPage/ProductPage'


ReactDOM.createRoot(document.getElementById("root")!).render(
  // мы оборачиваем react приложение в компонент <Provider> и предаем в него store
  // без этого у вас не заработает redux на проекте
  <Provider store={store}>
    <BrowserRouter>

    <Routes>
    {/* <Route path='/' element={<Layout />}> */}
      <Route path='React-RTK-router' element={<Layout />}>
        <Route index element={<h1>Home page</h1>} />
        <Route path='products' element={<ProductPage />} />
        <Route path='city-toggle' element={<CityToggle />} />
        <Route path='sandwich' element={<Sandwich />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </Provider>
)
