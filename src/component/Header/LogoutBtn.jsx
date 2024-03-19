import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


function LogoutBtn() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        authService.logout()//it send us the promiste therfore we use .then
       .then(()=>{
        dispatch(logout())
       })//to make changes in the store 
    }
  return (
   <button>
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    Logout
   </button>
  )
}

export default LogoutBtn