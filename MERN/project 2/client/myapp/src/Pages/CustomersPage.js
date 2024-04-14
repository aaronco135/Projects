import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import utils from '../utils';

function CustomersPage() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await utils.getAll();
            setUsers(data);
        };
        getData();
    }, []);

    const toProPage = () => {
        navigate('/ProductsPage');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Customers Page</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Name</th>
                        <th style={styles.tableHeader}>Email</th>
                        <th style={styles.tableHeader}>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((per, index) => (
                        <tr key={index}>
                            <td style={styles.tableCell}>{per.name}</td>
                            <td style={styles.tableCell}>{per.email}</td>
                            <td style={styles.tableCell}>{per.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={styles.button} onClick={toProPage}>Product Page</button>
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
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    tableHeader: {
        background: '#3498db',
        color: '#fff',
        textAlign: 'left',
        padding: '10px',
    },
    tableCell: {
        borderBottom: '1px solid #ccc',
        padding: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#3498db',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default CustomersPage;
