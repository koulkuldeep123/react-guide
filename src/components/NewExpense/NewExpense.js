import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);    
        
    }
    const [showForm, setShowForm] = useState(false);

    const onClickHandler = () => {
        setShowForm(true);
    };

    const cancleExpenseHandler = () => {
        setShowForm(false);
    };
 
    const content  = showForm ? 
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancleExpense = {cancleExpenseHandler}/> : 
    <button onClick={onClickHandler}>Add New Expense</button>


    return <div className="new-expense">
        {content}
    </div>;

};

export default NewExpense;