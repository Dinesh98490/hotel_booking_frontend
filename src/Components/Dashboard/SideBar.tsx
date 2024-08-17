import { Link, useNavigate } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { MdDashboard, MdPeople, MdOutlinePayment } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-1/5 bg-white border-r border-border p-4 flex flex-col justify-between h-screen">
      <div>
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Hotel logo" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto ml-0" />
        </div>
        <nav className="w-full mt-4">
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard/home" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white">
                <MdDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/customer" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white">
                <MdPeople />
                <span>Customer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/rooms" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white">
                <FaBed />
                <span>Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payment" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white">
                <MdOutlinePayment />
                <span>Payment</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/booking" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-500 hover:text-white">
                <LuCalendarCheck2 />
                <span>Booking</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-4">
        <button 
          onClick={handleLogout} 
          className="flex items-center space-x-2 p-2 rounded hover:bg-red-500 hover:text-white"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
