import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Todos from "./pages/Todos"


function App() {


  return (
    <>
    <BrowserRouter basename="/appdev1-final-exam">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
