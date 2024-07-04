import { FaLocationDot } from "react-icons/fa6";
function Footer(){
    return(

       
        <div className="bg-card text-card-foreground p-0 bg-black">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2 text-white">
          <FaLocationDot  size={30}/>
            <div>
              <p className="text-sm">Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-muted-foreground text-lg font-semibold text-white">About us</h3>
            <p className="text-sm text-white">Where hospitality meets perfection.</p>
          </div>
          <div className="text-right">
            <h2 className="text-muted-foreground text-lg font-semibold text-white">Contact us</h2>
            <p className="text-sm text-white">+977 981234567890</p>
          </div>
        </div>
      </div>
      
    );
}
export default Footer;