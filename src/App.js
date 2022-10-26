import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper1',
      amount: 924.12,
      date: new Date(2020, 1, 10),
    },
    {
      id: 'e1',
      title: 'Toilet Paper2',
      amount: 944.12,
      date: new Date(2020, 4, 14),
    },
    {
      id: 'e1',
      title: 'Toilet Paper3',
      amount: 394.12,
      date: new Date(2020, 7, 12),
    },
    {
      id: 'e1',
      title: 'Toilet Paper4',
      amount: 941.12,
      date: new Date(2020, 7, 4),
    },
    {
      id: 'e1',
      title: 'Toilet Paper5',
      amount: 924.12,
      date: new Date(2020, 7, 15),
    },
    {
      id: 'e1',
      title: 'Toilet Paper6',
      amount: 194.12,
      date: new Date(2020, 9, 24),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2001, 2, 28),
    },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },{
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2000, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler =(expense)=>{
    setExpenses((prevState)=>{  
      console.log(expense);
      return [expense, ...prevState];

    });
  };

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>

    </div>
  );
};

export default App;
