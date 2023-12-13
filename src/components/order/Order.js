import './Order.css';
import { Link } from "react-router-dom";
import Burger from '../burger/Burger';
import { useState } from 'react';

const Order = () => {
    const BASE_BILL = 3.00;

    const [totalBill, setTotalBill] = useState(BASE_BILL);
    const [ingredients, setIngridients] = useState(baseIngredients);

    const handleQuantityChange = (key, operation) => {
        setIngridients(prevIngredients => {
            const updatedIngredients = { ...prevIngredients };
            const ingredient = updatedIngredients[key];
            const newQuantity = Math.max(0, ingredient.quantity + operation);
        
            return {
              ...updatedIngredients,
              [key]: { ...ingredient, quantity: newQuantity },
            };
        });
        
        setTotalBill(prevTotalBill => prevTotalBill + ingredients[key].price * operation);
    };

    return (
        <>
            <Burger ingredients={ingredients} />
            <div className='build-control-outer'>
                <span className='mb-2'>Current Price: <span className='fw-bold'>${totalBill.toFixed(2)}</span></span>
                { Object.entries(ingredients).map(([key, { name, quantity }]) => (
                    <div key={key}>
                        <div className='build-control-inner'>
                            <span className='build-title'>{name.toUpperCase()}</span>
                            <button className='less-btn text-light' disabled={quantity === 0} onClick={() => handleQuantityChange(key, -1)}>Less</button>
                            <button className='more-btn text-light' onClick={() => handleQuantityChange(key, 1)}>More</button>
                        </div>
                    </div>
                ))}
                <button className='sign-up-btn' disabled={totalBill === BASE_BILL}>
                    <Link className='text-decoration-none sign-up-btn-link' to='login'>SIGN UP TO ORDER</Link>
                </button>
            </div>
        </>
    );
}

const baseIngredients = {
    lettuce: {
        name: 'lettuce',
        price: 0.50,
        quantity: 0
    },
    bacon: {
        name: 'bacon',
        price: 0.70,
        quantity: 0
    },
    cheese: {
        name: 'cheese',
        price: 0.40,
        quantity: 0
    },
    meat: {
        name: 'meat',
        price: 1.30,
        quantity: 0
    }
}

export default Order;
