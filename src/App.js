import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./features/validate/ForgotPassword";
import Login from "./features/validate/Login";
import RePassword from "./features/validate/RePassword";
import BookingLayout from "./layouts/Layout";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />}>
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="repassword" element={<RePassword />} />
                <Route path="/restaurant" element={<BookingLayout />} />
            </Routes>
        </div>
    );
}

export default App;
