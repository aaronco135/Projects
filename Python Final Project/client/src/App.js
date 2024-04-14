import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import MainPage from "./Pages/MainPage";
import EditUser from "./Pages/EditUser";
import ManageUsers from "./Pages/ManageUsers";
import EditMember from "./Pages/EditMember"
import EditMovie from "./Pages/EditMovie";
import PresentMember from "./Pages/PresentMember";
import PresentMovie from "./Pages/PresentMovie";

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path="/"element = {<Login />}></Route>
        <Route path="/create-account" element = {<CreateAccount />}></Route>
        <Route path="/main" element = {<MainPage />}></Route>
        <Route path="/users-managment" element = {<ManageUsers />}></Route>

        <Route path="/edit-member" element = {<EditMember />}></Route>
        <Route path="/edit-movie" element = {<EditMovie />}></Route>
        <Route path="/edit-user" element = {<EditUser />}></Route>

        <Route path="/member/:id" element = {<PresentMember />}></Route>
        <Route path="/movie/:id" element = {<PresentMovie />}></Route>

        
       
       
        </Routes>
     
    </div>
  );
}

export default App;
