import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'
import { Button ,Typography} from '@material-tailwind/react'
import {useDispatch,useSelector} from 'react-redux'
import { expenseActions } from '../store/NewexpensesSlice'
function DeleteItem() {
    const dispatch = useDispatch()
    const deleteModal = useSelector((state)=>state.expenseFileds.deleteExpenseModal)
    const deleteItem =()=>{
        dispatch(expenseActions.deleteexpenseItem())
        toast.success("Delete successfull",{position:'top-center', theme:"dark"})
    }
    
  return (
    <div>
        <Modal isOpen={deleteModal}>
            <div className='flex items-center justify-center'>
                <div className='w-[35%] h-[40%] border-2 p-5 mt-28'>
                    <Typography variant='h4'>Are you sure you want delete this Expense</Typography>
                    <div className='flex justify-end gap-7 p-10'>
                    <Button color='red'onClick={()=>dispatch(expenseActions.setDeleteExpenseModal())}>Cancle</Button>
                        <Button color='green' onClick={deleteItem}>Yes ,Delete</Button>
                    </div>
                </div>
            </div>
        </Modal>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default DeleteItem