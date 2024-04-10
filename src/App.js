import React from 'react'
import Login from './pages/Login'
import ExpensesPage from './pages/ExpensesPage'

function App() {
   const auth  = window.sessionStorage.getItem("userName")
  return (
    <>
        {auth ? <ExpensesPage/>  :  <Login/> }
    </>
  )
}

export default App


