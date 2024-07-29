import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Dashboard/Home";
import Customer from "./Components/Dashboard/Customer/Customer";
import Room from "./Components/Dashboard/Room/Room"; // Import the Room component
import Payment from "./Components/Dashboard/Payment/Payment";
import Booking from "./Components/Dashboard/Booking/Booking";

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
              path: "rooms",
              element: <Room />, 
            },
            {
              path: "payment",
              element: <Payment/>,
            },
            {
             path: "booking",
             element: <Booking/>,
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
