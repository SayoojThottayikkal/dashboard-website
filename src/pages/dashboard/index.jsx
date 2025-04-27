import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 7000 },
];

const activeUsersData = [
  { name: "Mon", users: 200 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 250 },
  { name: "Thu", users: 400 },
  { name: "Fri", users: 300 },
  { name: "Sat", users: 500 },
  { name: "Sun", users: 600 },
];

const projects = [
  { name: "Crypto Dashboard", budget: "$2,400", completion: 90 },
  { name: "AI Trading Bot", budget: "$1,800", completion: 75 },
  { name: "E-commerce App", budget: "$3,500", completion: 60 },
  { name: "Social Media Site", budget: "$4,200", completion: 80 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f24] to-[#0f172a] text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Top Cards */}
        {[
          {
            title: "Revenue",
            value: "$63,000",
            change: "+8%",
            color: "text-green-400",
          },
          {
            title: "Users",
            value: "2,300",
            change: "+2%",
            color: "text-green-400",
          },
          {
            title: "Sales",
            value: "1,200",
            change: "-1%",
            color: "text-red-400",
          },
          {
            title: "Profit",
            value: "$12,000",
            change: "+5%",
            color: "text-green-400",
          },
        ].map((item, index) => (
          <div key={index} className="bg-[#121a3b] rounded-2xl p-6 shadow-md">
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
            <p className={`text-sm ${item.color} mt-1`}>{item.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Profile and Satisfaction */}
        <div className="bg-[#121a3b] rounded-2xl p-6 text-center shadow-md">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b2be529"
            alt="Profile"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h4 className="text-xl font-semibold">Mark Johnson</h4>
          <p className="text-gray-400">Administrator</p>
        </div>

        <div className="bg-[#121a3b] rounded-2xl p-6 text-center shadow-md">
          <h4 className="text-xl font-semibold">Satisfaction Rate</h4>
          <p className="text-4xl font-bold mt-4">95%</p>
          <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>

        <div className="bg-[#121a3b] rounded-2xl p-6 text-center shadow-md">
          <h4 className="text-xl font-semibold">Referral Rating</h4>
          <p className="text-4xl font-bold mt-4">9.3</p>
          <div className="text-yellow-400 text-4xl mt-2">⭐</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Sales Overview */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md md:col-span-2">
          <h4 className="text-xl font-semibold mb-4">Sales Overview</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#00c6ff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md">
          <h4 className="text-xl font-semibold mb-4">Active Users</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activeUsersData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md">
          <h4 className="text-xl font-semibold mb-4">Projects</h4>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-sm font-semibold">
                <span>{project.name}</span>
                <span className="text-gray-400">{project.budget}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mt-2">
                <div
                  className="bg-green-400 h-3 rounded-full"
                  style={{ width: `${project.completion}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Orders Overview */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md">
          <h4 className="text-xl font-semibold mb-4">Orders Overview</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>New Order Received</li>
            <li>Payment Confirmed</li>
            <li>Order Shipped</li>
            <li>Delivered</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
