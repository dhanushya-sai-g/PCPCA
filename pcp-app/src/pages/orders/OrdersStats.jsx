import { useEffect } from "react";
import { useApp } from "../../context/AppContext";

export default function OrdersStats() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("orders");
  }, []);

  const stats = state.orders.reduce(
    (acc, o) => {
      acc.total++;
      if (o?.status === "delivered") acc.delivered++;
      if (o?.status === "cancelled") acc.cancelled++;
      return acc;
    },
    { total: 0, delivered: 0, cancelled: 0 }
  );

  window.appState = stats;

  return (
    <div>
      <p data-testid="total-orders">{stats.total}</p>
      <p data-testid="delivered-orders">{stats.delivered}</p>
      <p data-testid="cancelled-orders">{stats.cancelled}</p>
    </div>
  );
}