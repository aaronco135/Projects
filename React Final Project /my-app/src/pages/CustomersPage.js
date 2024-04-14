import React, { useState , useEffect} from 'react'
import {GetAll} from '../firebase/utils'
import { Link } from 'react-router-dom';

function CustomersPage() {

  const [data,setData] = useState({customers : [], products : [], purchases :[]})
  const [tableData , setTable] = useState([])


  useEffect(() => {
    const getFromDB = async () => {
     
        const cus = await GetAll("customers");
        const pro = await GetAll("products");
        const pur = await GetAll("purchases");

        setData({ customers: cus, products: pro, purchases: pur });
     
    };

    const setTableData = () => {
      if (data.purchases.length > 0) {
        const newTableData = data.purchases.map((purchase) => {
          const actualCusId = purchase.customerID;
          const foundedBuyer = data.customers.find((user) => user.id == actualCusId);
          const actualProId = purchase.productID;
          const foundedPro = data.products.find((pro) => pro.id == actualProId);
          return { buyer: foundedBuyer, product: foundedPro, date: purchase.date };
        });

        setTable(newTableData);
      } 
    };

    getFromDB();
    setTableData();
  }, [data]);

  const pageStyle = {
    backgroundColor: 'black',
    color: 'orange',
    padding: '200px',
  };

  
  return (
    <div style={pageStyle}>
      <table border={1} style={{  borderColor: 'darkviolet', border: '1px solid white' }}>
        <thead>
          <tr>
            <td>NAME</td>
            <td>PURCHASED PRODUCT</td>
            <td>AT :</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((elm, index) => (
            <tr key={index}>
              <td>{elm.buyer?.fname} {elm.buyer?.lname}</td>
              <td> <Link to={`/editpro/${elm.product?.id}`}>{elm.product?.name}</Link></td>
              <td>{elm.date?.seconds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersPage