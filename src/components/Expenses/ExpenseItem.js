import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpeseItem = (props) => {

const [title, setTitle] = useState(props.title);

const clickHandler = ()=>{
    setTitle('Updated');
}

    return <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'></div>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
    </Card>;
}

export default ExpeseItem;