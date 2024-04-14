import CustomersPage from "./Pages/CustomersPage";
import AddProComp from "./components/AddProComp";
import CartProComp from "./components/CartProComp";
import ShowProComp from "./components/ShowProComp";
import ProductsPage from "./Pages/ProductsPage";
import { Route,Routes } from "react-router-dom";
import CheckoutComp from "./components/CheckoutComp";


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<CustomersPage />} />
     <Route path="/checkout" element={<CheckoutComp />} />
     <Route path="/ProductsPage" element={<ProductsPage />} />
     <Route path="/productlist" element={<ShowProComp />} />
     <Route path="/addnewpro" element={<AddProComp />} />
     <Route path="/cart" element={<CartProComp/>} />
     </Routes>
    </div>
  );
}

export default App;
