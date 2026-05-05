'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { quarter: 'Q1', settlement: 50 },
  { quarter: 'Q2', settlement: 100 },
  { quarter: 'Q3', settlement: 160 },
  { quarter: 'Q4', settlement: 120 },
  { quarter: 'PROJ', settlement: 80 },
]

interface SettlementChartProps {
  className?: string
}

export default function SettlementChart({ className = '' }: SettlementChartProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-h3 font-h3">Settlement Analytics (USD)</h3>
        <select className="text-[10px] font-bold border-none bg-gray-50 rounded px-3 py-1 outline-none">
          <option>Current Year</option>
          <option>Last 12 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="quarter"
            tick={{ fill: '#6d7a78', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6d7a78', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            formatter={(value) => `$${value}K`}
          />
          <Bar dataKey="settlement" fill="#F86501" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
