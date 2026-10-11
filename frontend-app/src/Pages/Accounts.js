import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    api.get("/account").then((res) => setAccounts(res.data));
  }, []);

  return (
  <div className="container">
    <h2>Accounts</h2>

    {accounts.map((a) => (
      <div
        className="card"
        key={a._id}
        style={{
          borderLeft: a.type === "investor"
            ? "6px solid #1976d2"
            : "6px solid #43a047"
        }}
      >
        <b>{a.name}</b>
        <p>Type: {a.type}</p>
      </div>
    ))}
  </div>
);


}
