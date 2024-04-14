import React, { useState } from "react";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

function CheckoutComp() {

    const toPay = sessionStorage.getItem("toPay");
    const [formData, setFormData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: '',
    });

    const setCard = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendToServer = () => {
        // Envoyer les détails de la carte au serveur pour le paiement
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <div style={{ maxWidth: '400px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
                <Cards
                    number={formData.number}
                    name={formData.name}
                    expiry={formData.expiry}
                    cvc={formData.cvc}
                    focused={formData.focused}
                />
                <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} type="text" name="number" placeholder="Card Number" onChange={setCard} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} type="text" name="name" placeholder="Name" onChange={setCard} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} type="text" name="expiry" placeholder="MM/YY Expiry" onChange={setCard} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <input style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} type="text" name="cvc" placeholder="CVC" onChange={setCard} />
                </div>
                <p style={{ fontSize: '18px', marginTop: '20px' }}>Total: {toPay}$</p>
                <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'  }} onClick={sendToServer}>Submit Payment</button>
            </div>
        </div>
    );
}

export default CheckoutComp;
