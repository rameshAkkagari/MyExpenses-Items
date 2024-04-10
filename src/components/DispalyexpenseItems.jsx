import React from 'react'
import classes from './DispalyexpenseItems.module.css';
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import {useSelector,useDispatch} from 'react-redux'
import { expenseActions } from '../store/NewexpensesSlice';
import DeleteItem from './DeleteItem';


function DispalyexpenseItems() {
    const expenses = useSelector((state)=>state.expenseFileds.expenses)
    console.log(expenses.length);
    const searchvalue = useSelector((state)=>state.expenseFileds.searchExpenseByname)
    console.log(searchvalue);
    const dispatch = useDispatch()
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Date of Expense</th>
                    <th>Amount</th>
                    <th>Updated at</th>
                    <th>Created by</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.filter((item)=>{
                    return searchvalue.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchvalue)
                }).map((item,index)=>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.date}</td>
                        <td>INR {item.amount}</td>
                        <td>{item.updated}</td>
                        <td>{item.createdBy}</td>
                        <td className={classes.icons}>
                            <MdModeEdit className={classes.editexpenses} size={30} onClick={()=>dispatch(expenseActions.setEditExpenseModal(item))}/>
                            <RiDeleteBin5Line className={classes.deleteexpense} size={30} color='orange' onClick={()=>dispatch(expenseActions.setDeleteExpenseModal(item.id))}/>
                        </td>
                    </tr>
                )}

                {expenses.filter((item) => {
                    return searchvalue.toLowerCase() === "" ? item : item.name.toLowerCase().includes(searchvalue);
                }).length === 0 && (
                    <tr>
                        <td colSpan="7" className="text-center text-3xl">No expenses found</td>
                    </tr>
                )}
            </tbody>
    </table>
        <DeleteItem/>
    </div>
  )
}

export default DispalyexpenseItems