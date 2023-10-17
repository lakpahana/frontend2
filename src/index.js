import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import Test from './components/Test'
import Home from "./components/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            {/* <Test></Test> */}
            {/* <Home></Home> */}
        </Provider>
    </React.StrictMode>
)

