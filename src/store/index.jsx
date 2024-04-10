import {configureStore} from '@reduxjs/toolkit'
import NewExpenses from './NewexpensesSlice';
const store = configureStore({
    reducer:{
        expenseFileds:NewExpenses.reducer,
    }
})

export default store