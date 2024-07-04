function Customer(){
    return(<>

<div className="p-4">
  <div className="flex justify-between items-center mb-4">
    <div className="flex space-x-2">

    </div>
  </div>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Customer Id</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Room Number</th>
          <th className="py-2 px-4 border-b">Total amount</th>
          <th className="py-2 px-4 border-b">Amount paid</th>
          <th className="py-2 px-4 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#5644</td>
          <td className="py-2 px-4 border-b">Alexander</td>
          <td className="py-2 px-4 border-b">A647</td>
          <td className="py-2 px-4 border-b">$ 467</td>
          <td className="py-2 px-4 border-b">$ 200</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Clean</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#6112</td>
          <td className="py-2 px-4 border-b">Pegasus</td>
          <td className="py-2 px-4 border-b">A456</td>
          <td className="py-2 px-4 border-b">$ 645</td>
          <td className="py-2 px-4 border-b">$ 250</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">Dirty</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#6141</td>
          <td className="py-2 px-4 border-b">Martin</td>
          <td className="py-2 px-4 border-b">A645</td>
          <td className="py-2 px-4 border-b">$ 686</td>
          <td className="py-2 px-4 border-b">$ 400</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">Dirty</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#6535</td>
          <td className="py-2 px-4 border-b">Cecil</td>
          <td className="py-2 px-4 border-b">A684</td>
          <td className="py-2 px-4 border-b">$ 8413</td>
          <td className="py-2 px-4 border-b">$ 2500</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Inspected</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#6541</td>
          <td className="py-2 px-4 border-b">Luke</td>
          <td className="py-2 px-4 border-b">B464</td>
          <td className="py-2 px-4 border-b">$ 841</td>
          <td className="py-2 px-4 border-b">$ 400</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Clean</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#9846</td>
          <td className="py-2 px-4 border-b">Yadrin</td>
          <td className="py-2 px-4 border-b">C648</td>
          <td className="py-2 px-4 border-b">$ 684</td>
          <td className="py-2 px-4 border-b">$ 300</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Clean</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#4921</td>
          <td className="py-2 px-4 border-b">Kiand</td>
          <td className="py-2 px-4 border-b">D644</td>
          <td className="py-2 px-4 border-b">$ 984</td>
          <td className="py-2 px-4 border-b">$ 513</td>
          <td className="py-2 px-4 border-b">
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pick up</span>
          </td>
        </tr>
        <tr className="hover:bg-zinc-100">
          <td className="py-2 px-4 border-b">#9841</td>
          <td className="py-2 px-4 border-b">Turen</td>
          <td className="py-2 px-4 border-b">B641</td>
          <td className="py-2 px-4 border-b">$ 984</td>
          <td className="py-2 px-4 border-b">$ 600</td>
          <td className="py-2 px-4 border-b">
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">Dirty</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </>)
}
export  default Customer;