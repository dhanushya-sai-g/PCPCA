import { useEffect } from "react";
import { useApp } from "../../context/AppContext";

export default function CoursesStats() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("courses");
  }, []);

  const stats = state.courses.reduce(
    (acc, c) => {
      acc.total++;
      if (c?.active) acc.active++;
      else acc.inactive++;
      return acc;
    },
    { total: 0, active: 0, inactive: 0 }
  );

  window.appState = stats;

  return (
    <div>
      <p data-testid="total-courses">{stats.total}</p>
      <p data-testid="active-courses">{stats.active}</p>
      <p data-testid="inactive-courses">{stats.inactive}</p>
    </div>
  );
}