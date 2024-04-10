import React  from 'react'
import { Button,Input ,Typography} from '@material-tailwind/react'
import {useDispatch,useSelector} from 'react-redux'
import { expenseActions } from '../store/NewexpensesSlice'
function Actionbuttons() {
    const createnewexpense = useSelector((state)=>state.expenseFileds.newexpenseModal)
    const searchExpenseByname = useSelector((state)=>state.expenseFileds.searchExpenseByname)
    console.log(createnewexpense);
    const dispatch = useDispatch()
    const addHandler =()=>{
        dispatch(expenseActions.setNewexpenseModal())
    } 
  return (
    <>
        <div className='flex p-4'>
            <div className='flex justify-between w-[99%]'>
                <Typography variant='h1' className='uppercase sm:text-xs md:text-2xl'>My Expense Manager</Typography>
                    <div className='flex gap-4'>
                        <Button variant="outlined" onClick={()=>dispatch(expenseActions.sortByDate())}>Filter By Date of Expense</Button>
                        <div className="w-72">
                            <Input label="Search Expense by Name" 
                                value={searchExpenseByname}
                                onChange={(e)=>dispatch(expenseActions.setSearchExpenseByname(e.target.value))}
                            />
                        </div>
                    </div>
            </div>
            <Button color='green' className='w-72 ml-4 text-base' onClick={addHandler}>New expense</Button>
        </div>
    </>
  )
}

export default Actionbuttons