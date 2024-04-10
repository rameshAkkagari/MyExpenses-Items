import React from 'react'
import Actionbuttons from '../components/Actionbuttons'
import DispalyexpenseItems from '../components/DispalyexpenseItems'
import CreatenewExpense from '../components/CreatenewExpense'
function ExpensesPage() {
  return (
    <div className='w-[90%] h-[90vh] border-2 border-black  m-auto mt-4 p-5'>
       <Actionbuttons/>
       <DispalyexpenseItems/>
       <CreatenewExpense/>
    </div>
  )
}

export default ExpensesPage