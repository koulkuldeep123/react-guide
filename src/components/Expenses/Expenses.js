import './Expenses.css';
import ExpeseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020'); 
    const expenseFilterHandler = (year) => {
        setFilteredYear(year);
        console.log(year);

    };

    return(<div>
        <ExpensesFilter selected={filteredYear} onExpenseFilter={expenseFilterHandler}/>
        <Card className="expenses">
            {props.expenses.map(item => <ExpeseItem title = {item.title } date={item.date} amount={item.amount} />)}
        </Card>
        </div>
    );
};

export default Expenses;