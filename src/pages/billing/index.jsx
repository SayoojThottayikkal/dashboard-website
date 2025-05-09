import React from "react";
import img from "../../assets/Images/billing/icon.png";
import img3 from "../../assets/Images/billing/Circles.png";
import img2 from "../../assets/Images/billing/atm.svg";
import img5 from "../../assets/Images/billing/Vector1.png";
import img4 from "../../assets/Images/billing/Vector.svg";
import imgcard from "../../assets/Images/billing/Shadow.png";
const information = [
  {
    name: "Emma Hudson",
    company: "FreshMart Hypermarket",
    email: "emma@freshmart.com",
    vat: "HPMT4578GZ",
  },
  {
    name: "Liam Carter",
    company: "Daily Needs Co.",
    email: "liam@dailyneeds.com",
    vat: "DNCX8943TR",
  },
  {
    name: "Sophia Lee",
    company: "UrbanPro Supplies",
    email: "sophia@urbanpro.com",
    vat: "UPS3495LMN",
  },
];
const invoice = [
  "May 01, 2025",
  "April 10, 2025",
  "March 25, 2025",
  "February 15, 2025",
  "January 05, 2025",
];
const transcation = [
  {
    name: "Bulk Vegetables",
    date: "May 02, 2025",
    amount: "-320.45",
  },
  {
    name: "Cleaning Supplies",
    date: "May 01, 2025",
    amount: "-215.90",
  },
  {
    name: "Bakery Purchase",
    date: "April 30, 2025",
    amount: "+1203.00",
  },
  {
    name: "Customer Refund",
    date: "April 28, 2025",
    amount: "+450.00",
  },
  {
    name: "Daily Sales",
    date: "April 27, 2025",
    amount: "+24,400.00",
  },
];
function Billing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 text-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl p-5 shadow-lg">
            <div className="flex justify-between py-5">
              <h2 className="text-sm font-semibold mb-5">HyperMarket Pay</h2>
              <div className="w-10">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="text-xl font-bold tracking-widest mb-2">
              7812 2139 0823 XXXX
            </div>
            <div className="flex gap-3 text-xs">
              <div>
                <div className="text-gray-400">VALID THRU</div>
                <div>12/26</div>
              </div>
              <div>
                <div className="text-gray-400">CVV</div>
                <div>08X</div>
              </div>
            </div>
          </div>

          <div className="bg rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Credit Balance</h3>
                <div className="text-2xl font-bold mb-4">$18,930</div>
              </div>
              <div className="h-20 w-1/2">
                <img src={imgcard} alt="" />
              </div>
            </div>
            <div className="text-sm flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-xs mb-2">NEWEST</div>
                <div className="flex gap-1">
                  <div className="w-10 h-10">
                    <img src={img} alt="" />
                  </div>
                  <span className="text-green-400">
                    Groceries & Essentials <br />
                    <p className="text-gray-400 text-sm">Today, 16:36</p>
                  </span>
                </div>
              </div>
              <span className="text-red-400">-320.50</span>
            </div>
          </div>

          <div className="col-span-2 bg-[#1e293b] rounded-2xl p-6 shadow-lg ">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold">Payment Method</h3>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-xs font-bold">
                ADD A NEW CARD
              </button>
            </div>
            <div className="flex flex-col justify-around md:flex-row gap-4 ">
              <div className="bg-[#0f172a] border-1 relative border-amber-50 px-4 py-2 w-1/2 rounded-lg text-sm flex gap-5">
                <img src={img2} alt="" />
                7812 2139 0023-XXXX
                <div className="absolute right-3 top-3">
                  <img src={img5} alt="" />
                </div>
              </div>
              <div className="bg-[#0f172a] border-1  relative border-amber-50 px-4 py-2 w-1/2 rounded-lg text-sm flex gap-5">
                <img src={img4} alt="" />
                7812 2139 0823-XXXX
                <div className="absolute right-3 top-3">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-[#1e293b] rounded-2xl p-6 shadow-lg">
            <h3 className="text-sm font-semibold mb-4">Billing Information</h3>
            {information.map((info, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg bg-[#0f172a] flex justify-between items-start"
              >
                <div>
                  <h4 className="font-bold text-sm">{info.name}</h4>
                  <p className="text-xs text-gray-400">
                    Company: {info.company}
                  </p>
                  <p className="text-xs text-gray-400">Email: {info.email}</p>
                  <p className="text-xs text-gray-400">VAT: {info.vat}</p>
                </div>
                <div className="flex gap-4 text-xs">
                  <button className="text-red-500 font-bold">DELETE</button>
                  <button className="text-blue-400 font-semibold">EDIT</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold">Invoices</h3>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-xs font-bold">
                VIEW ALL
              </button>
            </div>
            {invoice.map((date, index) => (
              <div
                key={index}
                className="flex justify-between text-sm py-1 border-b border-slate-700 last:border-none"
              >
                <span>{date}</span>
                <span className="text-blue-400">HYP</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
            <h3 className="text-sm font-semibold mb-4">Your Transactions</h3>
            {transcation.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 border-b border-slate-700 last:border-none"
              >
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.date}</div>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    item.amount.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
