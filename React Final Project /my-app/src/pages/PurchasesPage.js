import React, { useEffect, useState } from 'react';
import { GetAll } from '../firebase/utils';

function PurchasesPage() {
  const [data, setData] = useState({ customers: [], products: [], purchases: [] });
  const [selectedData, setSelected] = useState({ customer: null, product: null, purchase: null });
  const [isVisible, setVis] = useState(false);
  const [showWrong, setWrong] = useState(false);

  useEffect(() => {
    const getFromDB = async () => {
      const cus = await GetAll('customers');
      const pro = await GetAll('products');
      const pur = await GetAll('purchases');

      
      
      setData({ customers: cus, products: pro, purchases: pur });

     
    };

    getFromDB();
  }, []);

  const findElem = () => {

    const findPur = data.purchases.find((pur)=> pur.date.seconds == selectedData.purchase)

    if (findPur.customerID == selectedData.customer && findPur.productID == selectedData.product) {
     
      setVis(true);
        setWrong(false);
    }
    else {
      setWrong(true);
      setVis(false);
    }

    // if (selectedData.purchase !== null) {
    //   const founded = data.purchases.filter(
    //     (pur) => pur.customerID == selectedData.purchase.customerID && pur.productID == selectedData.product
    //   );
    //  console.log(selectedData)

      // if (founded.length > 0) {
      //   setVis(true);
      //   setWrong(false);
      // } else {
      //   setWrong(true);
      //   setVis(false);
      // }
   // }
  };

  return (
    <div style={styles.purchasesPageContainer}>
      <select
        id="cus"
        onChange={(e) => setSelected({ ...selectedData, customer: e.target.value })}
        style={styles.selectBox}
      >
        <option disabled selected value>
          Select a customer
        </option>
        {data.customers.map((cus, index) => (
          <option value={cus.id} key={index}>
            {cus.fname} {cus.lname}
          </option>
        ))}
      </select>
      <br />
      <select
        id="pro"
        onChange={(e) => setSelected({ ...selectedData, product: e.target.value })}
        style={styles.selectBox}
      >
        <option disabled selected value>
          Select a product
        </option>
        {data.products.map((pro, index) => (
          <option value={pro.id} key={index}>
            {pro.name}
          </option>
        ))}
      </select>
      <br />
      <select
        id="pur"
        onChange={(e) =>  setSelected({ ...selectedData, purchase: e.target.value })}
        style={styles.selectBox}
      >
        <option disabled selected value>
          Select a purchase
        </option>
        {data.purchases.map((pur, index) => (
          <option value={pur.date.seconds} key={index}>
            {pur.date.seconds}
          </option>
        ))}
      </select>
      <br />
      <button onClick={findElem} style={styles.findButton}>
        Find
      </button>

      {isVisible ? (
        <div style={styles.resultContainer}>
          <h3>Purchase Founded :</h3>
          <p>Client : {selectedData.customer}</p>
          <p>Product : {selectedData.product}</p>
          <p>Purchased at : {selectedData.purchase && selectedData.purchase.date}</p>
        </div>
      ) : false}
      {showWrong && <h5 style={styles.errorText}>There are problems in the filled information !!</h5>}

      {isVisible ? false :  <table style={styles.table} border={1}>
      <thead>
        <tr style={styles.tableHeader}>
          <td>Customers</td>
          <td>Products</td>
          <td>Purchases</td>
        </tr>
      </thead>
      <tbody>
        {data.customers.map((customer, index) => (
          <tr key={index}>
            <td style={styles.tableCell}>
              {data.customers[index]?.fname} {data.customers[index]?.lname}
            </td>
            <td style={styles.tableCell}>{data.products[index]?.name}</td>
            <td style={styles.tableCell}>{data.purchases[index]?.date.seconds}</td>
          </tr>
        ))}
      </tbody>
    </table>}
    </div>
  );
}

const styles = {
  purchasesPageContainer: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
  },
  selectBox: {
    marginBottom: '10px',
    backgroundColor: 'white',
    color: 'black',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid white',
  },
  findButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '10px',
    marginTop: '10px',
  },
  resultContainer: {
    marginTop: '20px',
    color: 'orange',
  },
  errorText: {
    color: 'red',
    marginTop: '10px',
  },
  table: {
    borderCollapse: 'collapse',
    marginTop: '20px',
    width: '100%',
  },
  tableHeader: {
    backgroundColor: 'DarkViolet',
    color: 'white',
    padding: '10px',
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid white',
  },
};



export default PurchasesPage;
