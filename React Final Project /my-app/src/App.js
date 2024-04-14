import './App.css';
import { Route, Routes ,  Outlet , useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

// add your comp...
import MenuPage from './pages/MenuPage';
import CustomersPage from './pages/CustomersPage';
import PurchasesPage from './pages/PurchasesPage';
import ProductsPage from './pages/ProductsPage';
import EditProduct from './pages/EditProduct';
import EditCustomer from './pages/EditCustomer'
import LoginPage from './pages/LoginPage';

function App() {


  const nav = useNavigate();

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    

    try {
      const { data } = await axios.post("http://localhost:8000/auth/verify", { token: token });

      if (!data.auth) {
        nav("/login")
      }
    }
    catch (e) {
      nav("/login")
      console.log(e);
    }
  }

  useEffect(() => {
    verifyToken();
  }, [])

  
  return (
    <div className="App">

      <Routes>
        
      <Route path="/login" element={<LoginPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/purchases" element={<PurchasesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<MenuPage />} />



        <Route  path="/editpro/:id" element={< EditProduct/>} />
        <Route  path="/editcus/:id" element={< EditCustomer/>} />
      </Routes>

      <Outlet/>

    </div>
  );
}

export default App;
