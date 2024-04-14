import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddProComp() {
    const dispatch = useDispatch();
    const [newPro, setPro] = useState({ name: '', price: 0, sku: '', img: '', id: 0 });

    const addToStore = () => {
        dispatch({ type: "ADD", payload: newPro });
        setPro({ name: "", price: 0, sku: "", img: "", id: 0 });
    };

    return (
        <div style={styles.container}>
            <h4 style={styles.header}>New Product Data:</h4>
            <div style={styles.form}>
                <label style={styles.label}>Product ID:</label>
                <input
                    style={styles.input}
                    type='number'
                    onChange={(e) => setPro({ ...newPro, id: +e.target.value })}
                /><br />

                <label style={styles.label}>Product Name:</label>
                <input
                    style={styles.input}
                    onChange={(e) => setPro({ ...newPro, name: e.target.value })}
                /><br />

                <label style={styles.label}>Product Price:</label>
                <input
                    style={styles.input}
                    type='number'
                    onChange={(e) => setPro({ ...newPro, price: +e.target.value })}
                /><br />

                <label style={styles.label}>Product SKU:</label>
                <input
                    style={styles.input}
                    onChange={(e) => setPro({ ...newPro, sku: e.target.value })}
                /><br />

                <label style={styles.label}>Product IMG Source:</label>
                <input
                    style={styles.input}
                    onChange={(e) => setPro({ ...newPro, img: e.target.value })}
                /><br />

                <button style={styles.addButton} onClick={addToStore}>Add Product</button>
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
        fontSize: '20px',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        marginBottom: '10px',
        padding: '5px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        width: '100%',
    },
    addButton: {
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        padding: '10px',
        borderRadius: '3px',
        cursor: 'pointer',
        width: '100px',
        alignSelf: 'flex-start',
    },
};

export default AddProComp;
