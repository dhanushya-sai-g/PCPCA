import { useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function OrdersList() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("orders");
  }, []);

  if (state.loading) return <Loader />;
  if (state.error) return <Error />;

  return (
    <div>
      {state.orders.map((o, i) => (
        <div key={i} data-testid="order-item">
          {o?.status || "unknown"}
        </div>
      ))}
    </div>
  );
}