const OverView=()=>{
    return(
<div className="bg-card p-4 rounded mb-6 outline-blue-500">
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-5 gap-4 border-black">
            <div className="flex flex-col items-center">
              <span>Today's Check-in</span>
              <span className="text-2xl font-bold text-primary">23</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Today's Check-out</span>
              <span className="text-2xl font-bold text-primary">13</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Total In hotel</span>
              <span className="text-2xl font-bold text-primary">60</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Total Available room</span>
              <span className="text-2xl font-bold text-primary">10</span>
            </div>
            <div className="flex flex-col items-center">
              <span>Total Occupied room</span>
              <span className="text-2xl font-bold text-primary">90</span>
            </div>
          </div>
        </div>
        

    )
}
export default OverView