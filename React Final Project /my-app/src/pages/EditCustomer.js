import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetAll, DeleteInDB, UpdateToDB } from '../firebase/utils';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState([]);
  const [data, setData] = useState({pur : [], pro : []});
  const [newPer, setPer] = useState({ fname: '', lname: '', city: '' })



  const DeleteData = () => {
    dispatch({ type: "DELETECUS", payload:id})
  }



  const UpdateData = () => {
    dispatch({ type: "UPDATECUS", payload: newPer , id : id })
  }



  useEffect(() => {
    const fromUtilsFB = async () => {

      const dataFromPur = await GetAll("purchases");
       const dataFromPro = await GetAll("products");

      setData({pro : dataFromPro , pur : dataFromPur})
    }
    fromUtilsFB();
  }, [id]);



  useEffect(()=>{

    if(data.pro.length > 0){
    const setProName = ()=>{

       const onlyByCus = data.pur.filter((purch) => purch.customerID == id);
     
      let addToPro = [];
      for (let i = 0; i <onlyByCus.length; i++) {

        let pro = data.pro.find((pro) => pro.id == onlyByCus[i].productID);
       
        if(pro){
          addToPro.push(pro);
      }
    }
      return addToPro
    }

    setName(setProName())
  }
  },[data])

 
  return (
    <div style={containerStyle}>
      <h1>Edit Customer</h1>
      <div style={formContainerStyle}>
        <label>New first name :</label>
        <input
          style={inputStyle}
          onChange={(e) => setPer({ ...newPer, fname: e.target.value })}
        ></input>
        <br />
        <label>New last name :</label>
        <input
          style={inputStyle}
          onChange={(e) => setPer({ ...newPer, lname: e.target.value })}
        ></input>
        <br />
        <label>New city person :</label>
        <input
          style={inputStyle}
          onChange={(e) => setPer({ ...newPer, city: e.target.value })}
        ></input>
        <br />
        <button style={buttonStyle} onClick={DeleteData}>
          DELETE
        </button>
        <button
          style={{ ...buttonStyle, ...buttonHoverStyle }}
          onClick={UpdateData}
        >
          UPDATE
        </button>
      </div>


      
      <ul style={customerListStyle}>

        <h4>Product's list of this buyer :</h4>
        {name.map((elem, index) => {
          return (
            <li key={index}>
            {elem.name} 
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
