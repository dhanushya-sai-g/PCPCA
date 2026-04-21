import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrdersList from "./pages/orders/OrdersList";
import OrdersFilter from "./pages/orders/OrdersFilter";
import OrdersStats from "./pages/orders/OrdersStats";

import ActivitiesList from "./pages/activities/ActivitiesList";
import ActivitiesFilter from "./pages/activities/ActivitiesFilter";
import ActivitiesStats from "./pages/activities/ActivitiesStats";

import CoursesList from "./pages/courses/CoursesList";
import CoursesFilter from "./pages/courses/CoursesFilter";
import CoursesStats from "./pages/courses/CoursesStats";

import EventsList from "./pages/events/EventsList";
import EventsFilter from "./pages/events/EventsFilter";
import EventsStats from "./pages/events/EventsStats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/orders/filter" element={<OrdersFilter />} />
        <Route path="/orders/stats" element={<OrdersStats />} />

        <Route path="/activities" element={<ActivitiesList />} />
        <Route path="/activities/filter" element={<ActivitiesFilter />} />
        <Route path="/activities/stats" element={<ActivitiesStats />} />

        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/filter" element={<CoursesFilter />} />
        <Route path="/courses/stats" element={<CoursesStats />} />

        <Route path="/events" element={<EventsList />} />
        <Route path="/events/filter" element={<EventsFilter />} />
        <Route path="/events/stats" element={<EventsStats />} />
      </Routes>
    </BrowserRouter>
  );
}