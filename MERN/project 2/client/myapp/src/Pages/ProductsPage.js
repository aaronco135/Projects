import React from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Products Page</h3>
            <Link to="/productlist" style={styles.link}>List of Products</Link><br />
            <Link to="/addnewpro" style={styles.link}>Add Product</Link><br />
            <Link to="/cart" style={styles.link}>Shopping Cart</Link>
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
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    link: {
        display: 'block',
        fontSize: '18px',
        color: '#3498db',
        textDecoration: 'none',
        marginBottom: '10px',
    },
};

export default ProductsPage;
