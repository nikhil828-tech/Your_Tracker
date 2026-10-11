export default function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="card" style={{ background: "#e3f2fd" }}>
        <p><b>Total Given</b></p>
        <h3>₹45,000</h3>
      </div>

      <div className="card" style={{ background: "#fce4ec" }}>
        <p><b>Total Taken</b></p>
        <h3>₹30,000</h3>
      </div>

      <div className="card" style={{ background: "#e8f5e9" }}>
        <p><b>Total Interest</b></p>
        <h3>₹12,000</h3>
      </div>
    </div>
  );
}


