import img1 from "../../assets/Images/author/img1.png";
import img2 from "../../assets/Images/author/img2.png";
import img3 from "../../assets/Images/author/img3.png";
import img4 from "../../assets/Images/author/img4.png";
import img5 from "../../assets/Images/author/img5.png";
import img6 from "../../assets/Images/author/img6.png";
export default function DashboardTables() {
  const authors = [
    {
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      role: "Manager",
      org: "Organization",
      photo: img1,
      status: "Online",
    },
    {
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      role: "Programmer",
      org: "Developer",
      photo: img2,
      status: "Offline",
    },
    {
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      role: "Executive",
      org: "Projects",
      photo: img3,
      status: "Online",
    },
    {
      name: "Fredrick Hill",
      email: "fred@simmmple.com",
      role: "Manager",
      org: "Organization",
      photo: img4,
      status: "Online",
    },
    {
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      role: "Programmer",
      org: "Developer",
      photo: img5,
      status: "Offline",
    },
    {
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      role: "Designer",
      org: "UI/UX Design",
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
    <div className="p-5  text-white min-h-screen">
      <div className="bg-[#092045] rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Authors Table</h2>
        <table className="w-full text-sm text-left">
          <thead className="text-gray-400 uppercase">
            <tr>
              <th className="pb-2">Author</th>
              <th>Function</th>
              <th>Status</th>
              <th>Employed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {authors.map((item, index) => (
              <tr key={index} className="border-t border-slate-700">
                <td className="py-3 flex">
                  <img
                    className="rounded-2xl mr-2"
                    src={item.photo}
                    alt={item.name}
                  />
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-gray-400">{item.email}</div>
                  </div>
                </td>
                <td>
                  <div>{item.role}</div>
                  <div className="text-gray-400 text-sm">{item.org}</div>
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
                    Edit
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
