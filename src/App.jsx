import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNote";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/new-note" element={<NewNote />}></Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
