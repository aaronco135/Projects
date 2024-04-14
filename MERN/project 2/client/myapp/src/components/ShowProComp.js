import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ShowProComp() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const addToCart = (id) => {
        dispatch({ type: "ADDTOCART", payload: id });
    };

    const delFromStore = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>List of Products</h3>
            <div style={styles.productList}>
                {products.map((pro, index) => (
                    <div key={index} style={styles.productItem}>
                        <img src={pro.img} alt={pro.name} style={styles.productImage} />
                        <div style={styles.productInfo}>
                            <p style={styles.productName}>{pro.name}</p>
                            <p style={styles.productPrice}>Price: ${pro.price}</p>
                        </div>
                        <div>
                            <button style={styles.addButton} onClick={() => addToCart(pro.id)}>Add To Cart</button>
                            <button style={styles.deleteButton} onClick={() => delFromStore(pro.id)}>Delete Product</button>
                        </div>
                    </div>
                ))}
            </div>
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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
    },
    productItem: {
        padding: '10px',
        border: '1px solid #eee',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    productImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
    },
    productInfo: {
        marginBottom: '10px',
    },
    productName: {
        fontWeight: 'bold',
        marginBottom: '5px',
        textDecoration: "underline"
    },
    productPrice: {
        color: '#777',
        marginBottom: '5px',
    },
    addButton: {
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '5px',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ShowProComp;
