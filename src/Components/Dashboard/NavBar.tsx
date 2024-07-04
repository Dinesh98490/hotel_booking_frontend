import { CgProfile } from "react-icons/cg";
const NavBar=()=>{
    return(
    <div className="flex justify-between items-center mb-6">
    <input type="text" placeholder="Search for rooms and offers" className="w-1/3 p-2 border border-border rounded"/>
    <div className="flex items-center space-x-4">
      <span>Friday, November 18, 2022</span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Create booking</button>

      <CgProfile  size={50}/>
      

    </div>
  </div>)
}

export default NavBar