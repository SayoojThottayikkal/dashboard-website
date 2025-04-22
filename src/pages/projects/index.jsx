import React from "react";
import img1 from "../../assets/Images/project/img1.png";
import img2 from "../../assets/Images/project/img2.png";
import img3 from "../../assets/Images/project/img3.png";
import img4 from "../../assets/Images/project/img4.png";
import img5 from "../../assets/Images/project/img5.svg";
export default function Projects() {
  const project = [
    {
      logo: img4,
      name: "Chakra Soft UI Version",
      budget: "$14,000",
      status: "Working",
      progress: 60,
    },
    {
      logo: img1,
      name: "Add Progress Track",
      budget: "$3,000",
      status: "Canceled",
      progress: 10,
    },
    {
      logo: img5,
      name: "Fix Platform Errors",
      budget: "Not set",
      status: "Done",
      progress: 100,
    },
    {
      logo: img3,
      name: "Launch our Mobile App",
      budget: "$32,000",
      status: "Done",
      progress: 100,
    },
    {
      logo: img2,
      name: "Add the New Pricing Page",
      budget: "$400",
      status: "Working",
      progress: 25,
    },
  ];

  return (
    <div className="bg-[#092045] p-6 rounded-2xl text-white shadow-xl mt-6">
      <h2 className="text-lg font-semibold mb-1">Projects</h2>
      <p className="text-sm text-gray-400 mb-4">30 done this month</p>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-xs text-gray-400 uppercase">
              <th className="pb-3">Companies</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Completion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {project.map((item, index) => (
              <tr
                key={index}
                className="border-t border-white/10 text-sm hover:bg-white/5 transition"
              >
                <td className="py-3 flex items-center gap-3">
                  <img src={item.logo} alt={item.name} className="w-6 h-6" />
                  {item.name}
                </td>
                <td className="py-3 text-white font-medium">{item.budget}</td>
                <td className="py-3 text-sm">{item.status}</td>
                <td className="py-3 w-48">
                  <div className="relative h-2 bg-white/20 rounded-full">
                    <div
                      className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-white ml-1">
                    {item.progress}%
                  </span>
                </td>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <td className="py-3 pr-2 ">
                  <button className="text-white text-xl   cursor-pointer">
                    ⋮
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
