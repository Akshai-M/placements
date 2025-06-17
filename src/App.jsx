import {React,  useState, useEffect} from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [latestRow, setLatestRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('academy_placements') 
        .select('*')
        .limit(1);

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setLatestRow(data[0]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
     
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Academy Placement Success Process
          </h1>
          <p className="text-gray-600 mt-2">
            Comprehensive placement and learning journey tracking
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Placement Overview - Top Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
            Placement Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Placed via External
              </h3>
              <div className="text-3xl font-bold">{latestRow?.Placed_via_External ?? "N/A"}</div> 
              <p className="text-green-100 text-sm mt-1">
                Through external channels
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Placed via Nxtwave</h3>
              <div className="text-3xl font-bold">{latestRow?.Placed_via_Nxtwave ?? "N/A"}</div>
              <p className="text-blue-100 text-sm mt-1">Direct placements</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Total Placements</h3>
              <div className="text-3xl font-bold">{Number(latestRow?.Placed_via_External ?? 0) + Number(latestRow?.Placed_via_Nxtwave ?? 0)}</div>
              <p className="text-purple-100 text-sm mt-1">
                Combined success rate
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mr-3"></div>
            Student Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold">{latestRow?.Below_Grads_2024 ?? "N/A"}</div> 
              <p className="text-green-100 text-sm mt-1">2024 & Below Grads</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold">{latestRow?.Grads_2025 ?? "N/A"}</div>
              <p className="text-blue-100 text-sm mt-1">2025 Grads</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold">{latestRow?.Below_2026_and_YOG  ?? "N/A"}</div> 
              <p className="text-purple-100 text-sm mt-1">2026 YOG & Below</p>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
              <div className="text-3xl font-bold">{latestRow?.Completed_GC5 ?? "N/A"}</div>
              <p className="text-purple-100 text-sm mt-1">Completed GC5</p>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-3"></div>
            Learning Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Responsible Person
                </h3>
                <p className="text-orange-700 font-medium">Vamshi Gadagoju</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Responsible Team
                </h3>
                <p className="text-blue-700">Success Coach</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Team Objective
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Increase the pool of users who completed curriculum up to GC 5
                and clear all the course exams
              </p>
              <div className="mt-4 flex items-center"></div>
            </div>
          </div>
        </div>

        {/* Placement Preparation */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-3"></div>
            Placement Preparation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Responsible Manager
                </h4>
                <p className="text-green-700 font-medium">Syed</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Team Name</h4>
                <p className="text-blue-700 font-medium">Placement Prep POD</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Team Members
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Placement Success Coach:
                    </span>
                    <span className="text-purple-700 font-medium">
                      Sahana, Sai Keerthi, Amrutha
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">BOA:</span>
                    <span className="text-purple-700 font-medium">Santosh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Technical Mentor:</span>
                    <span className="text-purple-700 font-medium">Akshai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
            <h4 className="font-semibold mb-2">Team Target</h4>
            <p>Increase alpha users count from 30 to 100 for next month</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-3 h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full mr-3"></div>
              Current Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {latestRow?.Current_Alpha_Users ?? "N/A"} {/*value 7*/}
                </div>
                <h3 className="font-semibold text-gray-900">
                  Current Alpha Users
                </h3>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{latestRow?.Monthly_Target ?? "N/A"}</div> 
                <h3 className="font-semibold text-gray-900">Monthly Target</h3>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {latestRow?.Currently_Active_in_Prep ?? "N/A"}
                </div>
                <h3 className="font-semibold text-gray-900">
                  Currently Active in Prep
                </h3>
              </div>
            </div>
          </div>
          {/* Technical Preparation */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-3 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full mr-3"></div>
              Technical Preparation
            </h2>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                MERN & DSA Crash Course
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-cyan-700 mb-2">
                    MERN Stack, Python, SQL
                  </h4>
                  <p className="text-sm text-gray-600">
                    HTML, CSS, Bootstrap, Java Script, Express, React, Node.js, Python and SQL
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-blue-700 mb-2">DSA Focus</h4>
                  <p className="text-sm text-gray-600">
                    Data Structures & Algorithms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assessments */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-3 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full mr-3"></div>
              Assessments
            </h2>

            <div className="space-y-6">
              <div className="bg-violet-50 rounded-lg p-6 border-l-4 border-violet-500">
                <h3 className="text-lg font-semibold text-violet-900 mb-3">
                  Level 1
                </h3>
                <ul className="space-y-2 text-violet-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Clear NxtMocks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Submit own projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    6 DSA exams
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">
                    Level 2
                  </h3>
                  <p className="text-purple-700">Offline assessments</p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                    Level 3
                  </h3>
                  <p className="text-indigo-700">1:1 tech expert interview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-3 h-8 bg-gradient-to-b from-pink-500 to-rose-600 rounded-full mr-3"></div>
              Soft Skills
            </h2>

            <div className="bg-pink-50 rounded-lg p-6 border border-pink-200 text-center">
              <div className="text-pink-600 mb-2">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Yet to Plan
              </h3>
              <p className="text-pink-700">
                Soft skills training program in development
              </p>
            </div>
          </div>

          {/* Current Status */}
        </div>

        {/* Actual Placements */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-3"></div>
            Actual Placements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ISE Team
              </h3>
              <p className="text-amber-700 font-medium">Responsible: Amrutha</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                CRM Team
              </h3>
              <p className="text-orange-700 font-medium">Responsible: Simha</p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Placement Success Managers
              </h3>
              <p className="text-red-700 font-medium">PSM Team</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Interview Coordination (Managed by ISEs)
              </h4>
              <li className="text-sm text-blue-700">Interview scheduling</li>
              <li className="text-sm text-blue-700">
                Guidance Meet for interview preparation
              </li>
              <li className="text-sm text-blue-700">HR round coordination</li>
              <li className="text-sm text-blue-700">
                Final round facilitation
              </li>
              <li className="text-sm text-blue-700">
                Offline drive facilitation
              </li>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Job Applications (Handled by CRM)
              </h4>
              <li className="text-sm text-green-700">
                Company research & targeting
              </li>
              <li className="text-sm text-green-700">
                Application submission tracking
              </li>
              <li className="text-sm text-green-700">Follow-up coordination</li>
              <li className="text-sm text-green-700">
                Application optimization
              </li>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Resume Building and Process Management (Handled by PSM)
              </h4>
              <li className="text-sm text-purple-700">
                Professional resume preparation
              </li>
              <li className="text-sm text-purple-700">
                Feedback collection & analysis
              </li>
              <li className="text-sm text-purple-700">Performance tracking</li>
              <li className="text-sm text-purple-700">
                Continuous improvement
              </li>
              <li className="text-sm text-purple-700">Success celebration</li>
            </div>
          </div>
        </div>

        {/* Placement Community Building */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full mr-3"></div>
            Placement Community Building
          </h2>

          <div className="bg-teal-50 rounded-lg p-8 border border-teal-200 text-center">
            <h4 className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm text-sm text-black font-medium">
                Alumni Network - Yet to plan
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm text-sm text-black font-medium">
                Content Creation - Yet to plan
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm text-sm text-black font-medium">
                Peer Support - Yet to plan
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm text-sm text-black font-medium">
                Referral Network - Yet to plan
              </div>
            </h4>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-3 h-8 bg-gradient-to-b from-orange-500 to-yellow-600 rounded-full mr-3"></div>
            Key Implementation Focus  
          </h2>

          <div className="bg-orange-50 rounded-lg p-8 border border-orange-200 text-center">
            <div className="  rounded-lg p-4 shadow-sm">
             <p className="text-sm text-black pb-3">
                <span className="font-medium">Dedicated Target:</span> Scale
                from 30 to 100 students monthly in placement preparation stage
              </p>
             <p className="text-sm text-black pb-3">
                <span className="font-medium">Prioritize Alpha Users for Placements:</span> Share alpha candiadates with company, track outcomes, collect feedback and optimize placement prep
              </p>
              <p className="text-sm text-black mb-1">
                <span className="font-medium">New Placement Team for Academy Includes:</span> ISE's + CRM's + PSM's +
                Product Manager + Curriculum Team + PCB Representatives
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';

// // 🔧 Supabase config — use your own keys here
// const supabaseUrl = 'https://gczgbtjdumeyyvzxahlh.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjemdidGpkdW1leXl2enhhaGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNDQ5MTYsImV4cCI6MjA2NTcyMDkxNn0.c036O8pMRQjITYJ2xCDvxsi1qQIRVryYeuaaUaweolc';
// const supabase = createClient(supabaseUrl, supabaseKey);

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchSheetData = async () => {
//       const { data, error } = await supabase
//         .from('academy_placements') // ✅ update table name without hyphens
//         .select('*');

//       console.log("Fetched data:", data);
//       if (error) {
//         console.error('❌ Error fetching data:', error.message);
//       } else {
//         setData(data);
//       }
//     };

//     fetchSheetData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8 font-sans">
//       <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Supabase Sheet Data</h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 text-center shadow-lg bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Value 1</th>
//               <th className="border p-2">Value 2</th>
//               <th className="border p-2">Value 3</th>
//               <th className="border p-2">Value 4</th>
//               <th className="border p-2">Value 5</th>
//               <th className="border p-2">Value 6</th>
//               <th className="border p-2">Value 7</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.length > 0 ? (
//               data.map((row) => (
//                 <tr key={row.id}>
//                   <td className="border p-2">{row.id}</td>
//                   <td className="border p-2">{row.value1}</td>
//                   <td className="border p-2">{row.value2}</td>
//                   <td className="border p-2">{row.value3}</td>
//                   <td className="border p-2">{row.value4}</td>
//                   <td className="border p-2">{row.value5}</td>
//                   <td className="border p-2">{row.value6}</td>
//                   <td className="border p-2">{row.value7}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="p-4 text-gray-500">No data available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;
