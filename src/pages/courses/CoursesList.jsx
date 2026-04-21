import { useEffect } from "react";
import { useApp } from "../../context/AppContext";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function CoursesList() {
  const { state, loadData } = useApp();

  useEffect(() => {
    loadData("courses");
  }, []);

  if (state.loading) return <Loader />;
  if (state.error) return <Error />;

  return (
    <div>
      {state.courses.map((c, i) => (
        <div key={i} data-testid="course-item">
          {c?.title || "course"}
        </div>
      ))}
    </div>
  );
}