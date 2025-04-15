import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

import { loader as HomeLoader } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
