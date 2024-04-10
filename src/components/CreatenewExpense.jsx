import React  from 'react'
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import ReactTimeAgo from 'react-time-ago'
import 'react-toastify/dist/ReactToastify.css';
import { Button,Typography,Input} from '@material-tailwind/react';
import {useDispatch,useSelector} from 'react-redux'
import { expenseActions } from '../store/NewexpensesSlice';

Modal.setAppElement("#root")
function CreatenewExpense() {
    const dispatch = useDispatch()
    const newexpenseItem = useSelector((state)=>state.expenseFileds)
    const seletecategory = useSelector((state)=>state.expenseFileds.category)
    console.log("create", seletecategory);
    const newexpenseModal = useSelector((state)=>state.expenseFileds.newexpenseModal)

    const update = useSelector((state)=>state.expenseFileds.updateExpense)
    // console.log(update);
    const {description ,category, date,amount,name} = newexpenseItem
    // console.log(id);

    const handlecreateexpense =(e)=>{
        e.preventDefault()
        if (!name || name.length < 5 || name.length > 140) {
             toast.error("Name must be between 5 and 140 characters", { theme: "dark" });
             return
        }
        
        if (!description || description.length < 20) {
             toast.error("Description must be at least " + 20 + " characters long", { theme: "dark" });
             return
        }
        const newItem = {
            id:new Date().getTime().toString(),
            name:name,
            description:description,
            category:category,
            date:date,
            amount:amount,
            createdBy:window.sessionStorage.getItem("userName"),
            updated: <ReactTimeAgo date={new Date()} locale="en-US" /> // Display current time using ReactTimeAgo

        }
        console.log(newItem);
        dispatch(expenseActions.addNewItems(newItem))
        toast.success("Successfull Created Expense",{theme:"dark"})
    }
    const updatedExpenses = (e) =>{
        e.preventDefault()
        dispatch(expenseActions.updatedExpense())
        console.log("clicked");
        toast.success("Expense Item updated successfull",{theme:"dark"})
    }

return (
    <div>
        <Modal isOpen={newexpenseModal}>
            <form className='w-[60%] h-[90%] m-auto mt-10' onSubmit={handlecreateexpense}>
                {update ? (
                    <Typography variant='h3'>
                        Edit Expense
                    </Typography> )
                    :( <Typography variant='h3'>
                        Create New Expense
                    </Typography>
                )}

                <div className="mb-1 flex flex-col gap-6 w-[70%]">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Name
                    </Typography>
                    <Input
                        label='Name'
                        value={name}
                        required
                        size="lg"
                        type='text'
                        placeholder="Expense name.."
                        onChange={(e) => dispatch(expenseActions.setName(e.target.value))}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Description
                    </Typography>
                    <Input
                        type="text"
                        label='Description'
                        value={description}
                        onChange={(e)=> dispatch(expenseActions.setDescription(e.target.value))}
                        size="lg"
                    />

                    <Typography variant='h6'>
                        Category
                    </Typography>
                    <select 
                    required
                        label='select category'
                        value={category}
                        onChange={(e) =>
                                  dispatch(expenseActions.setCategory(e.target.value))}
                    >
                        <option disabled value=''>Select category</option>
                        <option value="Books">Books</option>
                        <option value="Health & Fitness">Health & Fitness</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Travel & Vacation">Travel & Vacation</option>
                        <option value="Education">Education</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Dining">Dining</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value='Clothing'>Clothing</option>
                        <option value="Others">Others</option>
                    </select>

                    <Typography variant='h6'>
                        Date of Expense
                    </Typography>

                    <Input
                        label='Date'
                        required
                        type='date'
                        value={date}
                        onChange={(e) => dispatch(expenseActions.setDate(e.target.value))}
                    />

                    <Typography variant='h6'>
                        Expense Amount
                    </Typography>
                    <Input
                        label='Amount'
                        required
                        type='number'
                        value={amount}
                        onChange={(e) => dispatch(expenseActions.setAmount(e.target.value))}
                    />
                </div>

                <div className='w-[70%] flex justify-between mt-4'>
                    <Button variant='outlined' onClick={()=>dispatch(expenseActions.setNewexpenseModal())}>cancle</Button>
                    {update ? ( <Button color="green" onClick={updatedExpenses}>
                            update And save
                            </Button>) : 
                        (<Button color="green" type="submit">
                            Create Expense
                        </Button>
                    )}
                </div>
            </form>
        </Modal>
    </div>
    )
}

export default CreatenewExpense;
