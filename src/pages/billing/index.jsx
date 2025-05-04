import React from "react";
import img from "../../assets/Images/billing/icon.png";
import img3 from "../../assets/Images/billing/Circles.png";
import img2 from "../../assets/Images/billing/atm.svg";
import img5 from "../../assets/Images/billing/Vector1.png";
import img4 from "../../assets/Images/billing/Vector.svg";
import imgcard from "../../assets/Images/billing/Shadow.png";
function Billing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 text-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl p-5 shadow-lg">
            <div className="flex justify-between py-5">
              <h2 className="text-sm font-semibold mb-5">Vision UI</h2>
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
                <div>05/24</div>
              </div>
              <div>
                <div className="text-gray-400">CVV</div>
                <div>09X</div>
              </div>
            </div>
          </div>

          <div className="bg rounded-2xl p-6 shadow-lg">
            <div className="flex justify-between">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Credit Balance</h3>
                <div className="text-2xl font-bold mb-4">$25,215</div>
              </div>
              <div className="h-20 w-1/2">
                <img src={imgcard} alt="" />
              </div>
            </div>
            <div className="text-sm flex items-center justify-between">
              <div className="">
                <div className="text-gray-400 text-xs mb-2">NEWEST</div>
                <div className="flex gap-1">
                  <div className="w-10 h-10">
                    <img src={img} alt="" />
                  </div>
                  <span className="text-green-400">
                    Bills & Taxes <br />
                    <p className="text-gray-400 text-sm">Today, 16:36</p>
                  </span>
                </div>
              </div>
              <span className="text-red-400">-154.50</span>
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
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-lg bg-[#0f172a] flex justify-between items-start"
              >
                <div>
                  <h4 className="font-bold text-sm">Oliver Liam</h4>
                  <p className="text-xs text-gray-400">
                    Company: Viking Burrito
                  </p>
                  <p className="text-xs text-gray-400">
                    Email: oliver@acmesomewhere.com
                  </p>
                  <p className="text-xs text-gray-400">VAT: FRB1233X75</p>
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
            {[
              "March 01, 2020",
              "February 10, 2020",
              "April 05, 2020",
              "June 25, 2019",
              "March 01, 2019",
            ].map((date, index) => (
              <div
                key={index}
                className="flex justify-between text-sm py-1 border-b border-slate-700 last:border-none"
              >
                <span>{date}</span>
                <span className="text-blue-400">BGF</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
            <h3 className="text-sm font-semibold mb-4">Your Transactions</h3>
            {[
              { name: "Netflix", date: "June 22, 2022", amount: "+$2500" },
              { name: "Apple", date: "March 01, 2022", amount: "+$2500" },
              { name: "Stripe", date: "May 13, 2022", amount: "+$5323" },
              { name: "WowToo", date: "April 07, 2022", amount: "+$900" },
              { name: "Microsoft", date: "May 15, 2022", amount: "+$3400" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 border-b border-slate-700 last:border-none"
              >
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.date}</div>
                </div>
                <div className="text-green-400 text-sm font-semibold">
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
