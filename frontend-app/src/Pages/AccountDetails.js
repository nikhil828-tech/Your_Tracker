import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

export default function AccountDetails() {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get(`/transaction/${id}`).then((res) => {
      setTransactions(res.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Account Details</h2>

      {transactions.length === 0 && <p>No transactions found</p>}

      {transactions.map((t) => (
        <div key={t._id} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
          <p>Amount: ₹{t.amount}</p>
          <p>Interest: {t.interestRate}%</p>
          <p>Start Date: {new Date(t.startDate).toDateString()}</p>
        </div>
      ))}
    </div>
  );
}
