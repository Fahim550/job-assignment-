import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./components/routers/routers";
function App() {
  const router = createBrowserRouter([...routers]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
