import React, { useState, useEffect } from "react";
import { GetAll, GetByID } from "../firebase/utils";
import ChildPro from "./ChildPro";
import { Link } from "react-router-dom";


// Fix showing of time pur issue 


function ParentPro(props) {
  const [proBuyers, setBuyers] = useState([]);
  const [openChildIds, setOpenChildIds] = useState([])



  useEffect(() => {
    const recoverBuyers = async () => {
      const purchases = await GetAll("purchases");
     
      const purchasedPro = purchases.filter((pur) => pur.productID == props.data);

      let arr = [];
      for (let i = 0; i < purchasedPro.length; i++) {
        let buyerProId = String(purchasedPro[i].customerID);
       
        let buyerPro = await GetByID("customers", buyerProId);
        let purDate = purchases.find((elm)=> elm.customerID == buyerPro.id &&  elm.productID == props.data)
       // newPurDate = purDate.find((elm)=> elm.)

       let a = {...buyerPro , time : purDate.date}
        arr.push(a);
        
      }
      setBuyers(arr);

     
    };
    recoverBuyers();
  }, [props.data]);


  const toChild = (id) => {
    if (openChildIds.includes((id))) {
      let childs = openChildIds.filter(openId => openId !== id);
      setOpenChildIds(childs)
    } else {
      setOpenChildIds([...openChildIds, id])
    }
  };

  return (
    <div style={parentStyle}>
      {proBuyers.map((buyer, index) => (
        <div key={index} style={buyerStyle}>
          <span style={nameStyle}>Name: <Link to={`/editcus/${buyer.id}`}>{buyer.fname} {buyer.lname} </Link></span><br/>
          <span style={nameStyle}>Purchased at :{buyer.time.seconds} </span><br/><br/>
          <button onClick={() => toChild(index)} style={buttonStyle}>
            Add
          </button>
          {openChildIds.includes(index)&& <ChildPro id={buyer.id} />}
        </div>
      ))}
    </div>
  );
}

const parentStyle = {
  border: "2px solid gray",
  margin: "20px",
  padding: "10px",
};

const buyerStyle = {
  borderBottom: "1px solid #ccc",
  padding: "10px",
  marginBottom: "10px",
};

const nameStyle = {
  marginRight: "10px",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
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

export default ParentPro;
