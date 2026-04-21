import { useEffect } from "react";
import { useApp } from "../../context/AppContext";

export default function ActivitiesStats() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("activities");
  }, []);

  const stats = state.activities.reduce(
    (acc, a) => {
      acc.total++;
      if (a?.goalAchieved) acc.achieved++;
      else acc.notAchieved++;
      return acc;
    },
    { total: 0, achieved: 0, notAchieved: 0 }
  );

  window.appState = stats;

  return (
    <div>
      <p data-testid="total-activities">{stats.total}</p>
      <p data-testid="goal-achieved">{stats.achieved}</p>
      <p data-testid="goal-not-achieved">{stats.notAchieved}</p>
    </div>
  );
}