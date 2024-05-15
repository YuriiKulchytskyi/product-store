// import './App.css'

import { Route, Routes } from "react-router-dom"
import { ListPage } from "./components/pages/ListPage"
import { BucketPage } from "./components/pages/BucketPage"
import { Layout } from "./components/Layout/Layout"

function App() {


  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/bucket" element={<BucketPage/>} />
      </Routes>
    </>
  )
}

export default App
