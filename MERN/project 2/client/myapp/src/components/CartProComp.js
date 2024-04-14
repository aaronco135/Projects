import React , {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

function CartProComp() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const [total,setTotal] = useState(0)

    useEffect(()=>{

        const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalAmount);
        
    },[cart])
    

    const removeFromCart = (id) => {
        dispatch({ type: "DELETEFROMCART", payload: id });
    };

    const toCheckout = ()=>{

        sessionStorage.setItem("toPay", total)
        navigate('/checkout')
       
    }

    return (
        <div style={styles.container}>
            <h4 style={styles.header}>Shopping Cart</h4>
            <ul style={styles.productList}>
                {cart.map((pro, index) => (
                    <li key={index} style={styles.productItem}>
                        <div>
                            <span style={styles.productName}>Product: {pro.name}</span>
                            <br />
                            <span style={styles.productPrice}>Price: ${pro.price}</span>
                        </div>
                        <button style={styles.removeButton} onClick={() => removeFromCart(pro.id)}>Remove Product</button>
                    </li>
                ))}
            </ul>
            <span style={{fontWeight : "bold" }}>to pay : {total}$</span><br/><br/>
            <button onClick={toCheckout} style={{margin : "10px" , borderRadius: '5px',border : "none", padding: '5px 20px', color : 'white', backgroundColor : 'green' }}>Checkout</button>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    productList: {
        listStyle: 'none',
        padding: '0',
    },
    productItem: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #eee',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productName: {
        fontWeight: 'bold',
    },
    productPrice: {
        color: '#777',
    },
    removeButton: {
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '3px',
        cursor: 'pointer',
    },
};

export default CartProComp;
