import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import MyProfile from "./components/MyProfile";
import MyTransactions from "./components/MyTransactions";
import Users from "./components/Users";

function App() {
  return (
    <div className=" max-height: 100vh">
      <NavBar></NavBar>
      <Routes>
        <Route path="*" Component={NotFound} />
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/homepage" Component={HomePage} />
        <Route path="/myProfile" Component={MyProfile} />
        <Route path="/myTransactions" Component={MyTransactions} />
        <Route path="/users" Component={Users} />
      </Routes>
    </div>
  );
}

export default App;
