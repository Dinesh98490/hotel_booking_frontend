import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Dashboard/Home";
import Customer from "./Components/Dashboard/Customer/Customer";
import Room from "./Components/Dashboard/Room/Room"; // Import the Room component

const AppLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

const DashboardLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          element: <Landing />,
          path: "/",
          index: true,
        },
        {
          element: <Dashboard />,
          path: "dashboard",
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "customer",
              element: <Customer />,
            },
            {
              path: "room",
              element: <Room />, 
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
