import  React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import './App.css'

function App() {
//console.log(process.env.REACT_APP_APPWRITE_URL)proces works for cretae react app but we have creted it using vite
// console.log(import.meta.env.VITE_APPWRITE_URL)
const[loading,setLoading]=useState(true)
const dispatch=useDispatch()
useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData)
    {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))
})

  return !loading?
  (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <Footer/>
    </div>
  </div>
  ):null//if loading means its is still processing 
}

export default App
