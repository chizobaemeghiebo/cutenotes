import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNote";
import NotePage, { noteLoader } from "./pages/NotePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/new-note" element={<NewNote />}></Route>
      <Route
        path="/notes/:id"
        element={<NotePage />}
        loader={noteLoader}
      ></Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
