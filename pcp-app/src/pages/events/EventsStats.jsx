import { useEffect } from "react";
import { useApp } from "../../context/AppContext";

export default function EventsStats() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("events");
  }, []);

  const stats = state.events.reduce(
    (acc, e) => {
      acc.total++;
      if (e?.active) acc.active++;
      if (e?.soldOut) acc.soldout++;
      return acc;
    },
    { total: 0, active: 0, soldout: 0 }
  );

  window.appState = stats;

  return (
    <div>
      <p data-testid="total-events">{stats.total}</p>
      <p data-testid="active-events">{stats.active}</p>
      <p data-testid="soldout-events">{stats.soldout}</p>
    </div>
  );
}