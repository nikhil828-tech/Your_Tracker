import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Home</Link>
      <Link to="/accounts">Accounts</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/transactions">Money</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
