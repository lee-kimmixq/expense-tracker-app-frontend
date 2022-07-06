import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup";
import TxnForm from "./components/pages/TxnForm";
import Transactions from "./components/pages/Transactions";
import Account from "./components/pages/Account";
import { AuthProvider } from "./authentication/AuthContext.js";
import PrivateRoute from "./authentication/PrivateRoute.js";
import Reports from "./components/pages/Reports";

// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<App />}> */}
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="txns/add"
              element={
                <PrivateRoute>
                  <TxnForm />
                </PrivateRoute>
              }
            />
            <Route
              path="txns/:id"
              element={
                <PrivateRoute>
                  <TxnForm />
                </PrivateRoute>
              }
            />
            <Route
              path="txns"
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              }
            />
            <Route
              path="account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="reports"
              element={
                <PrivateRoute>
                  <Reports />
                </PrivateRoute>
              }
            />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
