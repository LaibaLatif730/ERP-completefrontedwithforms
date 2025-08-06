"use client";

export default function AddCutsomerForm() {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-semibold mb-4">Add Customer</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Customer ID" className="w-full p-2 border" />
        <input type="text" placeholder="Customer Name" className="w-full p-2 border" />
        <input type="text" placeholder="Customer Email" className="w-full p-2 border" />
        <input type="text" placeholder="Customer Address" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
