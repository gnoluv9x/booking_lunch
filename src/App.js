import Login from "./feature/validate/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./feature/validate/ForgotPassword";
import RePassword from "./feature/validate/RePassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/repassword" element={<RePassword />}></Route>
      </Routes>
    </div>
  );
}

export default App;
