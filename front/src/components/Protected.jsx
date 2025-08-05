import React from 'react'
import { isAdmin, isLoggedIn } from './controllers/Acontrollers.js'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  return isLoggedIn()?children: <Navigate to="/"/>
}

const AdminProtectedRoute = ({children}) => {
    return isLoggedIn()&&isAdmin()?children: <Navigate to="/viewU"/>
  }

export {ProtectedRoute,AdminProtectedRoute} 
