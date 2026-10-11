import { useState } from "react";

export default function InterestCalculator() {
  const [p, setP] = useState(0);
  const [r, setR] = useState(0);
  const [t, setT] = useState(0);

  const interest = (p * r * t) / 100;

  return (
  <div className="container">
    <div className="card">
      <h2>Interest Calculator</h2>

      <input placeholder="Principal Amount" onChange={e => setP(e.target.value)} />
      <input placeholder="Interest Rate (%)" onChange={e => setR(e.target.value)} />
      <input placeholder="Time (months)" onChange={e => setT(e.target.value)} />

      <div className="card" style={{ background: "#fffde7" }}>
        <p><b>Total Interest:</b> ₹{interest}</p>
        <p><b>Total Payable:</b> ₹{Number(p) + interest}</p>
      </div>
    </div>
  </div>
);


}
