import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

export default function OrdersFilter() {
  const { state, loadData } = useApp();
  const [q, setQ] = useState("");

  useEffect(() => {
    loadData("orders");
  }, []);

  const filtered = state.orders.filter((o) =>
    o?.status?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input
        data-testid="filter-input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {filtered.map((o, i) => (
        <div key={i}>{o?.status}</div>
      ))}
    </div>
  );
}