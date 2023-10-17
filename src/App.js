import React from "react";
import Login from "./components/Login2";
import Register from "./components/Register";
// import "./App.css";

import { selectUser } from "./slices/userSlice";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import BuyerOrders from "./components/BuyerOrders";
import ViewProducts from "./components/ViewProducts";
import CreateProduct from "./components/CreateProduct";
const App = () => {

    const user = useSelector(selectUser);
    console.log(user);

    return (

        <div className="app">
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/signin" element={<SignIn></SignIn>} />
                    <Route path="/signup" element={<SignUp></SignUp>} />
                    <Route path="/buyerorders" element={
                        user ? <BuyerOrders></BuyerOrders> : <SignIn />
                    } />
                    <Route path="/createproduct" element={
                      <CreateProduct></CreateProduct> 
                    } />

                    <Route path="/products" element={<ViewProducts />}></Route>
                    <Route path="/" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> :
                            <Login />

                    } />
                    <Route path="/logout" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Login />
                    } />

                    <Route path="/register" element={
                        //only show the logout component if the user is logged in
                        user ? <Logout /> : <Register />
                    } />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>

    );
};

export default App;
