import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ هذا السطر يجعل ResetPasswordPage تظهر أول ما يفتح الموقع */}
        <Route path="/" element={<ResetPasswordPage />} />

        {/* بقية الصفحات */}
        <Route path="/login" element={<SignInPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
