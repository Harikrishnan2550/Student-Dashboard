import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { gradeDistribution } from '../data/sampleData.js'

const COLORS = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6'];

function PieCharts() {
  
  return (
    <div className="bg-white p-4 rounded shadow md:col-span-2">
      <h2 className="text-lg font-semibold mb-10">Grade Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={gradeDistribution}
            dataKey="value"
            nameKey="grade"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {gradeDistribution.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCharts
