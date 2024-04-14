import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetAll, DeleteInDB, UpdateToDB } from '../firebase/utils';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState([]);
  const [data, setData] = useState({pur : [], cus : []});
  const [newPro, setPro] = useState({ name: '', price: 0, quantity: 0 });



  const DeleteProduct = async () => {
    dispatch({ type: "DELETEPRO", payload: newPro.id });
    //utils...
    await DeleteInDB(id, "products");
    console.log("product has been updated")
  };




  const UpdateProduct = async () => {
    dispatch({ type: "UPDATEPRO", payload: newPro, id: id });
    //utils...
    await UpdateToDB(id, newPro, "products");
    console.log("product has been deleted")
  };




  useEffect(() => {
    const fromUtilsFB = async () => {

      const dataFromPur = await GetAll("purchases");
       const dataFromCus = await GetAll("customers");

      setData({cus : dataFromCus , pur : dataFromPur})
    }
    fromUtilsFB();
  }, [id]);



  useEffect(()=>{

    if(data.cus.length > 0){
    const setCusName = ()=>{
      
       const onlyByCus = data.pur.filter((purch) => purch.productID == id);
      let addToCus = [];
      for (let i = 0; i < onlyByCus.length; i++) {

        let cus = data.cus.find((cus) => cus.id == onlyByCus[i].customerID);
        if(cus){
          addToCus.push(cus);
      }
    }
      return addToCus
    }

    setName(setCusName())
  }
  },[data])

  return (
    <div style={containerStyle}>
      <h1>Edit Product</h1>
      <div style={formContainerStyle}>
        <label>New Pro Name:</label>
        <input
          style={inputStyle}
          onChange={(e) => setPro({ ...newPro, name: e.target.value })}
        ></input>
        <br />
        <label>New Pro Price:</label>
        <input
          style={inputStyle}
          type='number'
          onChange={(e) => setPro({ ...newPro, price: +e.target.value })}
        ></input>
        <br />
        <label>New Pro quantity:</label>
        <input
          style={inputStyle}
          type='number'
          onChange={(e) => setPro({ ...newPro, quantity: +e.target.value })}
        ></input>
        <br />
        <button style={buttonStyle} onClick={DeleteProduct}>
          DELETE
        </button>
        <button
          style={{ ...buttonStyle, ...buttonHoverStyle }}
          onClick={UpdateProduct}
        >
          UPDATE
        </button>
      </div>


      
       <ul style={customerListStyle}>

        <h4>Buyer's list of this product :</h4>
        {name.map((elem, index) => {
          return (
            <li key={index}>
            {elem.fname}  {elem.lname}
          </li>
          )
        }
        )}
      </ul> 
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#f8f8f8',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const formContainerStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '10px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const customerListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};


export default EditProduct;
