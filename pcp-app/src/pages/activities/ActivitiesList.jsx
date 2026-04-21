import { useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function ActivitiesList() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("activities");
  }, []);

  if (state.loading) return <Loader />;
  if (state.error) return <Error />;

  return (
    <div>
      {state.activities.map((a, i) => (
        <div key={i} data-testid="activity-item">
          {a?.name || "activity"}
        </div>
      ))}
    </div>
  );
}