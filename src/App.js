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
                <Route path="/login" element={<Login />} />
                <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                <Route path="/repassword" element={<RePassword />}></Route>
                <Route path="/restaurant" element={<BookingLayout />}></Route>
            </Routes>
        </div>
    );
}

export default App;
