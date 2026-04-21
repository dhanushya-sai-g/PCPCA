import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

export default function ActivitiesFilter() {
  const { state, loadData } = useApp();
  const [q, setQ] = useState("");

  useEffect(() => {
    loadData("activities");
  }, []);

  const filtered = state.activities.filter((a) =>
    a?.name?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input data-testid="filter-input" value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((a, i) => (
        <div key={i}>{a?.name}</div>
      ))}
    </div>
  );
}