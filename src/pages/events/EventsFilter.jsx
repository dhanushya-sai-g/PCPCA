import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

export default function EventsFilter() {
  const { state, loadData } = useApp();
  const [q, setQ] = useState("");

  useEffect(() => {
    loadData("events");
  }, []);

  const filtered = state.events.filter((e) =>
    e?.name?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input data-testid="filter-input" value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((e, i) => (
        <div key={i}>{e?.name}</div>
      ))}
    </div>
  );
}