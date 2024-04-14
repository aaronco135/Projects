import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ParentPro from '../components/ParentPro';
import { GetAll } from '../firebase/utils';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const total = useSelector((state) => state.total);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsFromDB = await GetAll('products');
        setProducts(productsFromDB);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid DarkViolet', paddingBottom: '10px', margin: '10px' }}>
        Total:  {total}
      </h2>

      {products.map((pro) => (
        <div key={pro.id} style={{ border: '2px solid red', margin: '20px', padding: '10px' }}>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>
             <strong>Name:</strong> <Link to={`/editpro/${pro.id}`}>{pro.name}</Link>
            </li>
            <li>
              <strong>Price:</strong> {pro.price}
            </li>
            <li> 
              <strong>Quantity:</strong> {pro.quantity}
            </li>
          </ul>
          <ParentPro data={pro.id} />
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
