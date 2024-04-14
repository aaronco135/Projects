import React from "react";



function CompPur(props) {
    
   
    return (
        <div>
            <table>
            <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
            {props.data.map((data,index)=>{
                return (
                    <tr key={index}>
                    <td>{data.customers.fname}</td>
                    <td>{data.products.name}</td>
                    <td>{data.purchases.date}</td>
                  </tr>
                )
            })


            }
             </tbody>
            </table>
        </div>
    )
}
export default CompPur