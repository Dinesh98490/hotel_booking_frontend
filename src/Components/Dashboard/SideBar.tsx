import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { MdDashboard, MdPeople, MdOutlinePayment } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-white border-r border-border p-4">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Hotel logo" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto ml-0" />
        <nav className="w-full">
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard/home" className="flex items-center space-x-2 p-2 rounded bg-primary text-primary-foreground">
                <MdDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/customer" className="flex items-center space-x-2 p-2 rounded hover:bg-secondary hover:text-secondary-foreground">
                <MdPeople />
                <span>Customer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/rooms" className="flex items-center space-x-2 p-2 rounded hover:bg-secondary hover:text-secondary-foreground">
                <FaBed />
                <span>Rooms</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/payment" className="flex items-center space-x-2 p-2 rounded hover:bg-secondary hover:text-secondary-foreground">
                <MdOutlinePayment />
                <span>Payment</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/booking" className="flex items-center space-x-2 p-2 rounded hover:bg-secondary hover:text-secondary-foreground">
                <LuCalendarCheck2 />
                <span>Booking</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
