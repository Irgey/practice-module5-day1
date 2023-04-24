import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { EventsPage } from 'pages/EventsPage/EventsPage';
import { EventsSubPage } from 'pages/EventsSubPage/EventsSubPage';
import { Homepage } from 'pages/Homepage/Homepage';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
