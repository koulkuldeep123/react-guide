import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020'); 
    const expenseFilterHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter(expense=>{ 
        return expense.date.getFullYear().toString()===filteredYear;
    });

    return(<div>
        
        <ExpensesFilter selected={filteredYear} onExpenseFilter={expenseFilterHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <Card className="expenses">
        <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
};

export default Expenses;