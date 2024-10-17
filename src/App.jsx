import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home.jsx";
import { routers } from "./components/routers/routers.jsx";

function App() {
  const router = createBrowserRouter([...routers]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
