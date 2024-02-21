import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const ProductInfo = styled.div`
    margin-bottom: 10px;
    color: #333;
    font-size: 18px;
`;

const PaymentButton = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: #333;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #007BFF;
    }
`;

const Button = styled.button`
    background-color: #333;
    color: white;
    padding: 5px 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #007BFF;
    }
`;
// ... tus estilos aquí ...

const CartModal = ({ onClose }) => {
    const [cartItems, setCartItems] = useState([{ id: 1, name: 'Producto por defecto', quantity: 1 }]);

    const resetCart = () => {
        setCartItems([]);
    };

    const addToCart = (productId) => {
        setCartItems(prevItems => prevItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === productId) {
                return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item;
            } else {
                return item;
            }
        }));
    };
    return (
        <ModalContainer>
            <ModalContent>
                {cartItems.map(item => (
                    <ProductInfo key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Cantidad: {item.quantity}</p>
                        <Button onClick={() => addToCart(item.id)}>+</Button>
<Button onClick={() => removeFromCart(item.id)}>-</Button>
                       </ProductInfo>
                ))}
                <button onClick={resetCart}>Reset</button>
                <PaymentButton onClick={onClose}>Checkout</PaymentButton>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </ModalContent>
        </ModalContainer>
    );
};

export default CartModal;