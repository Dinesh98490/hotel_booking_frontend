const RoomTable = () => {
    return (<>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">All room(100)</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-full">Available room(20)</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full">Booked(80)</button>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add room</button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Room number</th>
              <th className="py-2 px-4 border-b">Bed type</th>
              <th className="py-2 px-4 border-b">Room floor</th>
              <th className="py-2 px-4 border-b">Room facility</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">#001</td>
              <td className="py-2 px-4 border-b">Double bed</td>
              <td className="py-2 px-4 border-b">Floor -1</td>
              <td className="py-2 px-4 border-b">AC, shower, Double bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Available</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#002</td>
              <td className="py-2 px-4 border-b">Single bed</td>
              <td className="py-2 px-4 border-b">Floor -2</td>
              <td className="py-2 px-4 border-b">AC, shower, Single bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">Booked</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#003</td>
              <td className="py-2 px-4 border-b">VIP</td>
              <td className="py-2 px-4 border-b">Floor -1</td>
              <td className="py-2 px-4 border-b">AC, shower, Double bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">Booked</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#004</td>
              <td className="py-2 px-4 border-b">VIP</td>
              <td className="py-2 px-4 border-b">Floor -1</td>
              <td className="py-2 px-4 border-b">AC, shower, Double bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Reserved</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#005</td>
              <td className="py-2 px-4 border-b">Single bed</td>
              <td className="py-2 px-4 border-b">Floor -1</td>
              <td className="py-2 px-4 border-b">AC, shower, Single bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Reserved</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#006</td>
              <td className="py-2 px-4 border-b">Double bed</td>
              <td className="py-2 px-4 border-b">Floor -2</td>
              <td className="py-2 px-4 border-b">AC, shower, Double bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Waitlist</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#007</td>
              <td className="py-2 px-4 border-b">Double bed</td>
              <td className="py-2 px-4 border-b">Floor -3</td>
              <td className="py-2 px-4 border-b">AC, shower, Double bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Reserved</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">#008</td>
              <td className="py-2 px-4 border-b">Single bed</td>
              <td className="py-2 px-4 border-b">Floor -5</td>
              <td className="py-2 px-4 border-b">AC, shower, Single bed, towel, bathtub, TV</td>
              <td className="py-2 px-4 border-b">
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Blocked</span>
              </td>
              <td className="py-2 px-4 border-b text-right">
                <button className="text-gray-500">⋮</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </>);
  };
  
  export default RoomTable;
  