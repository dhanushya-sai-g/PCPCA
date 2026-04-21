import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

export default function CoursesFilter() {
  const { state, loadData } = useApp();
  const [q, setQ] = useState("");

  useEffect(() => {
    loadData("courses");
  }, []);

  const filtered = state.courses.filter((c) =>
    c?.title?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <input data-testid="filter-input" value={q} onChange={(e) => setQ(e.target.value)} />
      {filtered.map((c, i) => (
        <div key={i}>{c?.title}</div>
      ))}
    </div>
  );
}