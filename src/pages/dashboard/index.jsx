import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import img1 from "../../assets/Images/dashboard/head4.png";
import img2 from "../../assets/Images/dashboard/head3.png";
import img3 from "../../assets/Images/dashboard/head2.png";
import img4 from "../../assets/Images/dashboard/head1.png";
import img5 from "../../assets/Images/dashboard/Icon5.png";

import image from "../../assets/Images/dashboard/Icon1.png";
import image1 from "../../assets/Images/dashboard/Icon2.png";
import image2 from "../../assets/Images/dashboard/Icon3.png";
import image3 from "../../assets/Images/dashboard/Icon4.png";

import Avatar1 from "../../assets/Images/dashboard/Avatar1.png";
import Avatar2 from "../../assets/Images/dashboard/Avatar2.png";
import Avatar3 from "../../assets/Images/dashboard/Avatar3.png";
import Avatar4 from "../../assets/Images/dashboard/Avatar4.png";
import Avatar5 from "../../assets/Images/dashboard/Avatar5.png";

import icon1 from "../../assets/Images/project/img1.png";
import icon2 from "../../assets/Images/project/img2.png";
import icon3 from "../../assets/Images/project/img3.png";
import icon4 from "../../assets/Images/project/img4.png";
import icon5 from "../../assets/Images/project/img5.svg";
import icon6 from "../../assets/Images/dashboard/invision1.svg";

import Vectoricon1 from "../../assets/Images/dashboard/Vectoricon1.png";
import Vectoricon2 from "../../assets/Images/dashboard/Vectoricon2.png";
import Vectoricon3 from "../../assets/Images/dashboard/Vectoricon5.png";
import Vectoricon4 from "../../assets/Images/dashboard/iconnew.png";
import Vectoricon5 from "../../assets/Images/dashboard/bell.png";
import check from "../../assets/Images/dashboard/check.png";
import BorderLinearProgress from "../../components/ui/progress/LinearProgressBar";
const hypermarket = [
  {
    title: "Total Sales",
    value: "120,000",
    change: "+18%",
    color: "text-green-400",
    image: img1,
  },
  {
    title: "Daily Customers",
    value: "4,500",
    change: "+10%",
    color: "text-green-400",
    image: img2,
  },
  {
    title: "New Suppliers",
    value: "12",
    change: "+5%",
    color: "text-green-400",
    image: img3,
  },
  {
    title: "Returned Items",
    value: "134",
    change: "-3%",
    color: "text-red-400",
    image: img4,
  },
];

const salesData = [
  { name: "Jan", sales: 15000 },
  { name: "Feb", sales: 18000 },
  { name: "Mar", sales: 22000 },
  { name: "Apr", sales: 25000 },
  { name: "May", sales: 27000 },
  { name: "Jun", sales: 30000 },
];

const projects = [
  {
    company: "Fresh Produce Restock",
    icon: icon1,
    members: [Avatar1, Avatar2],
    budget: "5,000",
    completion: 75,
  },
  {
    company: "Summer Sale Setup",
    icon: icon2,
    members: [Avatar3],
    budget: "2,500",
    completion: 50,
  },
  {
    company: "New Supplier Integration",
    icon: icon3,
    members: [Avatar4, Avatar5],
    budget: "7,000",
    completion: 90,
  },
  {
    company: "Warehouse Reorg",
    icon: icon4,
    members: [Avatar2],
    budget: "Not set",
    completion: 30,
  },
  {
    company: "POS System Upgrade",
    icon: icon5,
    members: [Avatar1, Avatar3],
    budget: "12,000",
    completion: 60,
  },
];

const orders = [
  {
    icon: Vectoricon1,
    text: "Order #894522 delivered",
    date: "06 MAY 9:30 AM",
  },
  {
    icon: Vectoricon2,
    text: "Returned item processed",
    date: "05 MAY 4:50 PM",
  },
  {
    icon: Vectoricon3,
    text: "Inventory check completed",
    date: "05 MAY 12:10 PM",
  },
  {
    icon: Vectoricon4,
    text: "New supplier added",
    date: "04 MAY 3:15 PM",
  },
  {
    icon: Vectoricon5,
    text: "Promo pricing updated",
    date: "03 MAY 6:45 PM",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f24] to-[#0f172a] text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Top Cards */}
        {hypermarket.map((item, index) => (
          <div
            key={index}
            className="bg-[#121a3b] rounded-2xl p-4 shadow-md  flex justify-between items-center"
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-400">
                {item.title}
              </h4>
              <p className="text-3xl font-bold mt-2">{item.value}</p>
              <p className={`text-sm ${item.color} mt-1`}>{item.change}</p>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* first card */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md flex flex-col justify-between text-white relative background overflow-hidden">
          <div className="z-10 relative">
            <p className="text-gray-400 text-xs mb-2">Welcome back,</p>
            <h4 className="text-xl font-semibold mb-2">Mark Johnson</h4>
            <p className="text-gray-400 text-xs mb-6">
              Glad to see you again! <br /> Ask me anything.
            </p>
          </div>

          <div className="z-10 relative text-left text-xs text-gray-400 mt-auto">
            <a href="#" className="flex items-center gap-1 hover:underline">
              Tap to record <span>→</span>
            </a>
          </div>
        </div>
        {/* second card */}
        <div className="bg-[#121a3b] rounded-2xl p-6 text-center shadow-md relative overflow-hidden text-white">
          <h4 className="text-xl font-semibold mb-1">Satisfaction Rate</h4>
          <p className="text-gray-400 text-xs mb-6">From all projects</p>

          <div className="relative w-32 h-16 mx-auto">
            <div className="absolute flex items-center justify-center w-32 h-29 top-[-30%] z-1">
              <svg className="w-full h-full rotate-280" viewBox="0 0 36 36">
                <path
                  className="text-[#1e2b5b]"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <path
                  className="text-blue-400"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="75, 100"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center mt-4">
              <span className="text-2xl">
                <img src={img5} alt="" />
              </span>
            </div>
          </div>

          <div className="mt-8 bg-[#0f172a] rounded-xl py-2 px-4 flex items-center justify-between text-xs text-gray-400 z-10">
            <span>0%</span>
            <div className="text-center">
              <p className="text-white text-xl font-bold leading-tight">95%</p>
              <p>Based on likes</p>
            </div>
            <span>100%</span>
          </div>
        </div>

        {/* third card */}
        <div className="bg-[#121a3b] rounded-2xl p-6 text-center shadow-md">
          <div className="flex justify-between items-start mb-6">
            <h4 className="text-lg font-semibold">Referral Tracking</h4>
            <button className="text-gray-400 hover:text-white text-2xl leading-none">
              •••
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <div className="bg-[#0f172a] rounded-xl p-4 w-40">
                <p className="text-gray-400 text-xs mb-1">Invited</p>
                <p className="font-semibold">
                  145 <span className="font-normal">people</span>
                </p>
              </div>
              <div className="bg-[#0f172a] rounded-xl p-4 w-40">
                <p className="text-gray-400 text-xs mb-1">Bonus</p>
                <p className="font-semibold">1,465</p>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-32 h-32">
              <svg className="w-full h-full rotate-220" viewBox="0 0 36 36">
                <path
                  className="text-[#121a3b]"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />

                <path
                  className="text-green-400"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="75, 100"
                />
              </svg>

              <div className="absolute text-center">
                <p className="text-xs text-gray-400">Safety</p>
                <p className="text-3xl font-bold">9.3</p>
                <p className="text-xs text-gray-400">Total Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        {/* 5th card */}
        <div className="bg-[#121a3b] rounded-2xl p-6 shadow-md text-white">
          <div className="bg-[#0f172a] rounded-xl p-6 mb-6 h-48 flex items-end justify-between">
            {[300, 150, 100, 50, 250, 500, 400, 450, 300, 200, 400, 150].map(
              (height, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full"
                  style={{ width: "6px", height: `${height / 5}px` }}
                ></div>
              )
            )}
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold">Active Users</h4>
            <p className="text-sm text-gray-400">
              <span className="text-green-400 font-semibold">(+23)</span> than
              last week
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div>
                <img src={image} alt="" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Users</p>
              <p className="font-semibold">32,984</p>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <img src={image1} alt="" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Clicks</p>
              <p className="font-semibold">2,42m</p>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <img src={image2} alt="" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Sales</p>
              <p className="font-semibold">2,400$</p>
            </div>

            <div className="flex flex-col items-center">
              <div>
                <img src={image3} alt="" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Items</p>
              <p className="font-semibold">320</p>
            </div>
          </div>
        </div>
      </div>
      {/* 6th card */}
      <div className="flex gap-6  p-6 rounded-3xl text-white text-sm">
        <div className="flex-1 bg-[#0A1A36] p-4 rounded-2xl">
          <div className="flex flex-col mb-4">
            <h3 className="text-lg font-semibold mb-1">Projects</h3>
            <span className="text-green-400 text-sm flex gap-2 items-center">
              <span className="text-center">
                <img src={check} alt="" />
              </span>
              30 done this month
            </span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-xs border-b border-gray-600">
                <th className="pb-2">COMPANIES</th>
                <th>MEMBERS</th>
                <th>BUDGET</th>
                <th>COMPLETION</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 flex items-center gap-2">
                    <img src={proj.icon} alt="" />
                    {proj.company}
                  </td>
                  <td>
                    <div className="flex">
                      {proj.members.map((ico) => (
                        <img src={ico} alt="" />
                      ))}
                    </div>
                  </td>
                  <td>{proj.budget}</td>
                  <td>
                    {/* <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${proj.completion}%` }}
                      ></div>
                      <span className="text-xs text-white ml-1">
                        {proj.completion}%
                      </span>
                    </div> */}
                    <BorderLinearProgress
                      variant="determinate"
                      value={proj.completion}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 7th card */}
        <div className="w-80 bg-[#0A1A36] p-4 rounded-2xl">
          <div className="flex flex-col mb-4">
            <h3 className="text-lg font-semibold mb-1">Orders overview</h3>
            <span className="text-green-400 text-sm flex items-center gap-2">
              <span className="text-center">
                <img src={check} alt="" />
              </span>
              +30% this month
            </span>
          </div>
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className=" p-2">
                  <img src={order.icon} alt="" />
                </div>
                <div>
                  <p>{order.text}</p>
                  <span className="text-gray-400 text-xs">{order.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
