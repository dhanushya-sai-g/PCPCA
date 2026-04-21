import { useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function EventsList() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("events");
  }, []);

  if (state.loading) return <Loader />;
  if (state.error) return <Error />;

  return (
    <div>
      {state.events.map((e, i) => (
        <div key={i} data-testid="event-item">
          {e?.name || "event"}
        </div>
      ))}
    </div>
  );
}