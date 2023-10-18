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
import UsersList from "./components/UsersList";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { checkToken } from "./api/auth";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(checkToken()); //هني خليت اليوزر هو ترو او فالس  الخاص بالتوكن
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
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
          <Route path="/users" Component={UsersList} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
