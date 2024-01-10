import React from 'react'
import Register from '../components/Auth/Register'
import Login from '../components/Auth/Login'
import FormData from '../components/DataForm/FormData'
import {Routes,Route} from "react-router-dom"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/form-data" element={<FormData/>}></Route>
    </Routes>
  )
}

export default AllRoutes