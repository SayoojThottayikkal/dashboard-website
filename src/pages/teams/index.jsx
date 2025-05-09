import img1 from "../../assets/Images/author/img1.png";
import img2 from "../../assets/Images/author/img2.png";
import img3 from "../../assets/Images/author/img3.png";
import img4 from "../../assets/Images/author/img4.png";
import img5 from "../../assets/Images/author/img5.png";
import img6 from "../../assets/Images/author/img6.png";

export default function DashboardTables() {
  const orders = [
    {
      customer: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      product: 'Smart TV 55"',
      category: "Electronics",
      photo: img1,
      status: "Done",
    },
    {
      customer: "Michael Smith",
      email: "michael.smith@example.com",
      product: "Organic Apples - 1kg",
      category: "Grocery",
      photo: img2,
      status: "Online",
    },
    {
      customer: "Emily Davis",
      email: "emily.davis@example.com",
      product: "Running Shoes",
      category: "Footwear",
      photo: img3,
      status: "Canceled",
    },
    {
      customer: "David Lee",
      email: "david.lee@example.com",
      product: "Washing Machine",
      category: "Home Appliances",
      photo: img4,
      status: "Working",
    },
    {
      customer: "Olivia Brown",
      email: "olivia.brown@example.com",
      product: "Gaming Laptop",
      category: "Electronics",
      photo: img5,
      status: "Done",
    },
    {
      customer: "James Wilson",
      email: "james.wilson@example.com",
      product: "Leather Sofa",
      category: "Furniture",
      photo: img6,
      status: "Offline",
    },
  ];

  const statusColors = {
    Online: "bg-green-500",
    Offline: "bg-gray-500",
    Working: "bg-blue-500",
    Canceled: "bg-red-500",
    Done: "bg-emerald-500",
  };

  return (
    <div className="p-5 text-white min-h-screen">
      <div className="bg-[#092045] rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Hypermarket Orders</h2>
        <table className="w-full text-sm text-left">
          <thead className="text-gray-400 uppercase">
            <tr>
              <th className="pb-2">Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => (
              <tr key={index} className="border-t border-slate-700">
                <td className="py-3 flex">
                  <img
                    className="rounded-2xl mr-2 w-10 h-10"
                    src={item.photo}
                    alt={item.customer}
                  />
                  <div>
                    <div className="font-medium">{item.customer}</div>
                    <div className="text-gray-400">{item.email}</div>
                  </div>
                </td>
                <td>
                  <div>{item.product}</div>
                  <div className="text-gray-400 text-sm">{item.category}</div>
                </td>
                <td>
                  <span
                    className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${
                      statusColors[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>14/06/21</td>
                <td>
                  <button className="text-blue-400 hover:underline text-sm cursor-pointer">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
