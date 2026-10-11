import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
  <div className="container">
    <div className="card">
      <h2>Profile</h2>
      <p><b>Name:</b>Jatin</p>
      <p><b>Account Type:</b> Customer</p>
      <button onClick={logout}>Logout</button>
    </div>
  </div>
);

}
