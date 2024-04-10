import { createSlice } from '@reduxjs/toolkit';
import { expensesData } from '../components/DummyData'; // Importing dummy expense data
import ReactTimeAgo from 'react-time-ago'; // Importing ReactTimeAgo component for displaying time

// Create a slice named "NewExpenses" to manage expense-related state
const NewExpenses = createSlice({
    name: "expenseFileds", // Name of the slice
    initialState: {
        newexpenseModal: false, // Flag to control visibility of new expense modal
        deleteExpenseModal: false, // Flag to control visibility of delete expense modal
        editExpenseModal: false, // Flag to control visibility of edit expense modal
        updateExpense: false, // Flag to indicate if an expense is being updated
        deleteItemID: "", // ID of the item to be deleted
        updateItemID: "", // ID of the item to be updated
        expenses: expensesData, // Array to store expense items, initialized with dummy data
        name: "", // Name of the expense item
        description: "", // Description of the expense item
        category: '', // Category of the expense item
        date: new Date().toISOString().split('T')[0], // Current date as default
        amount: "", // Amount of the expense item
        searchExpenseByname: "" // Search query to filter expenses by name
    },
    reducers: {
        // Reducer to toggle visibility of new expense modal and reset input fields
        setNewexpenseModal(state, action) {
            state.newexpenseModal = !state.newexpenseModal;
            state.updateExpense = false;
            state.editExpenseModal = false;
            state.name = "";
            state.description = "";
            state.category = "";
            state.date = "";
            state.amount = "";
        },

        // Reducer to toggle visibility of delete expense modal and set deleteItemID
        setDeleteExpenseModal(state, action) {
            state.deleteExpenseModal = !state.deleteExpenseModal;
            state.deleteItemID = action.payload;
        },

        // Reducer to set edit expense modal and populate input fields with existing data
        setEditExpenseModal(state, action) {
            state.newexpenseModal = true;
            const editID = action.payload;
            state.updateExpense = true;
            state.updateItemID = editID.id;
            state.name = editID.name;
            state.description = editID.description;
            state.amount = editID.amount.toString();
            state.category = editID.category;
            state.date = editID.date;
        },

        // Reducer to set name of the expense item
        setName(state, action) {
            state.name = action.payload;
        },

        // Reducer to set description of the expense item
        setDescription(state, action) {
            state.description = action.payload;
        },

        // Reducer to set category of the expense item
        setCategory(state, action) {
            state.category = action.payload;
        },

        // Reducer to set date of the expense item
        setDate(state, action) {
            state.date = action.payload;
        },

        // Reducer to set amount of the expense item
        setAmount(state, action) {
            state.amount = action.payload;
        },

        // Reducer to set search query to filter expenses by name
        setSearchExpenseByname(state, action) {
            state.searchExpenseByname = action.payload;
        },

        // Reducer to add a new expense item to the expenses array
        addNewItems(state, action) {
            state.expenses.push(action.payload);
            state.newexpenseModal = false;
            state.name = "";
            state.description = "";
            state.category = "";
            state.date = "";
            state.amount = "";
        },

        // Reducer to delete an expense item from the expenses array
        deleteexpenseItem(state, action) {
            const id = state.deleteItemID;
            state.expenses = state.expenses.filter((item) => item.id !== id);
            state.deleteExpenseModal = false;
        },

        // Reducer to update an expense item in the expenses array
        updatedExpense(state, action) {
            const update = state.expenses.map((item) => {
                if (item.id === state.updateItemID) {
                    return {
                        id: state.updateItemID,
                        name: state.name,
                        description: state.description,
                        category: state.category,
                        date: state.date,
                        amount: state.amount,
                        createdBy: window.sessionStorage.getItem("userName"),
                        updated: <ReactTimeAgo date={new Date()} locale="en-US" /> // Display current time using ReactTimeAgo
                    };
                } else {
                    return item;
                }
            });
            state.expenses = update;
            state.newexpenseModal = false;
            state.updateExpense = false;
            state.name = "";
            state.description = "";
            state.category = "";
            state.date = "";
            state.amount = "";
        },

        // Reducer to sort expenses array by date in descending order
        sortByDate(state, action) {
            state.expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }
});

// Exporting action creators generated by createSlice
export const expenseActions = NewExpenses.actions;

// Exporting the reducer generated by createSlice
export default NewExpenses;
