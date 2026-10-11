import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Accounts from "./Pages/Accounts";
import AccountDetails from "./Pages/AccountDetails";
import InterestCalculator from "./Pages/InterestCalculator";
import Transactions from "./Pages/Transactions";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/accounts/:id" element={<AccountDetails />} />

        <Route path="/calculator" element={<InterestCalculator />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
