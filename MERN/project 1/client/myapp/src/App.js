import { Route , Routes , Link } from "react-router-dom";

import Students from "./Pages/Students";
import UpdateStudent from "./Pages/UpdateStudent";
import DeleteStudent from "./Pages/DeleteStudent";
import AddStudent from "./Pages/AddStudent";
import HomePage from "./Pages/Home";


function App() {
  return (
    <div className="App">
     
     <Link to='/'>Home Page</Link><br/>
    <Link to='/deletepage'>deletepage</Link><br/>
    <Link to='/studentspage'>studentspage</Link><br/>
    <Link to='/updatepage'>updatepage</Link><br/>
    <Link to='/addpage'>addpage</Link><br/>


     <Routes>
     <Route path="/" element={<HomePage/>}/>
      <Route path="/deletepage" element={<DeleteStudent/>}/>
      <Route path="/studentspage" element={<Students/>}/>
      <Route path="/updatepage" element={<UpdateStudent/>}/>
      <Route path="/addpage" element={<AddStudent/>}/>
     </Routes>
    </div>
  );
}

export default App;
