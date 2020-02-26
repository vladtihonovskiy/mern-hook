import React from 'react';
import "react-universal-hooks";
import { AuthContext } from './context/AuthContext'
import 'materialize-css';
import { BrowserRouter as Router } from "react-router-dom";
import { userRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { Navber } from "./components/Navbar";
import { Loader } from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const router = userRoutes(isAuthenticated);
  if(!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
    <Router>
      { isAuthenticated && <Navber /> }
      <div className="container">
        {router}
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
