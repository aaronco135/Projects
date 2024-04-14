import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { AddToDB, GetAll } from "../firebase/utils";

function ChildPro(props) {

    const dispatch = useDispatch()
 const [products , setPro] = useState([])
  const [purByCus, setPur] = useState({
    customerID: 0,
    productID: 0,
    date: new Date().getTime()
  });

  useEffect(()=>{

    const getDataFromDB = async ()=>{

      const products = await GetAll("products")
      setPro(products)
    }
    getDataFromDB()
  },[])

  useEffect(() => {
    if (purByCus.customerID !== 0) {
      AddToDB(purByCus, "purchases");
    }
  }, [purByCus]);

  const addToCus = async (pro) => {

    
    
    if (products[pro.id-1] && products[pro.id-1].quantity != 0) {
      setPur({
        customerID: +props.id,
        productID: +pro.id,
        date:  new Date(),
      });
      
      dispatch({ type: "UPDATEQUANTITY", payload: pro})
      dispatch({ type: "UPDATETOTAL", payload: products[pro.id-1].price})

    } else {
      console.error(`Product with ID ${pro.id} not found or missing quantity property.`);
    }
  };
  

  return (
    <div style={childStyle}>
      <h5 style={headingStyle}>Products :</h5>
      {props.id !== 0 &&
        products.map((pro) => (
          <div key={pro.id} style={productStyle}>
            <span style={productNameStyle}>{pro.name}</span>
            <button onClick={() => addToCus(pro)} style={buttonStyle}>
              Save
            </button>
          </div>
        ))}
    </div>
  );
}

const childStyle = {
  border: "2px solid orange",
  margin: "10px",
  padding: "10px",
};

const headingStyle = {
  marginBottom: "10px",
};

const productStyle = {
  borderBottom: "1px solid #ccc",
  padding: "10px",
  marginBottom: "10px",
};

const productNameStyle = {
  marginRight: "10px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#008CBA",
  color: "white",
  border: "none",
  padding: "8px 16px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "14px",
  margin: "0 5px",
  cursor: "pointer",
  borderRadius: "4px",
};

export default ChildPro;
