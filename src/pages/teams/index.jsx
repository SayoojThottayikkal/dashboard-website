export default function DashboardTables() {
  const authors = [
    {
      name: "Esthera Jackson",
      email: "esthera@simmmple.com",
      role: "Manager",
      org: "Organization",
      status: "Online",
    },
    {
      name: "Alexa Liras",
      email: "alexa@simmmple.com",
      role: "Programmer",
      org: "Developer",
      status: "Offline",
    },
    {
      name: "Laurent Michael",
      email: "laurent@simmmple.com",
      role: "Executive",
      org: "Projects",
      status: "Online",
    },
    {
      name: "Fredrick Hill",
      email: "fred@simmmple.com",
      role: "Manager",
      org: "Organization",
      status: "Online",
    },
    {
      name: "Daniel Thomas",
      email: "daniel@simmmple.com",
      role: "Programmer",
      org: "Developer",
      status: "Offline",
    },
    {
      name: "Mark Wilson",
      email: "mark@simmmple.com",
      role: "Designer",
      org: "UI/UX Design",
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
    <div className="p-6  text-white min-h-screen">
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
                <td className="py-4">
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
                  <button className="text-blue-400 hover:underline text-sm">
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
