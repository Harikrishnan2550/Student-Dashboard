// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { studentProgress } from "../data/sampleData.js";

// function LineCharts() {
//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h2 className="text-lg font-semibold mb-10">Student Progress Over Time</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={studentProgress}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="score"
//             stroke="#10b981"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default LineCharts;


import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  ReferenceLine
} from "recharts";
import { studentProgress } from "../data/sampleData.js";

function LineCharts() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Student Progress Over Time</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={studentProgress}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              domain={[60, 100]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <ReferenceLine y={75} stroke="#f59e0b" strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="score"
              name="Test Score"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8, stroke: '#10b981', strokeWidth: 2, fill: '#ffffff' }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineCharts;