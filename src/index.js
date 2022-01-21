import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { ConfigProvider } from "antd";
import viVn from "antd/lib/locale/vi_VN";

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={viVn}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
