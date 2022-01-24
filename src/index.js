import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import viVn from "antd/lib/locale/vi_VN";
import AppProvider from "../src/Context/ListDishContext";
ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={viVn}>
            <BrowserRouter>
                <AppProvider>
                    <App />
                </AppProvider>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
