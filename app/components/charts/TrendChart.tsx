'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'JAN', accounts: 800 },
  { month: 'MAR', accounts: 1100 },
  { month: 'MAY', accounts: 1500 },
  { month: 'JUL', accounts: 1900 },
  { month: 'AUG', accounts: 2100 },
]

export default function TrendChart() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-h3 font-h3 text-on-surface">Trend: Active Accounts</h3>
        <p className="text-body-sm text-outline">Jan - Aug cumulative growth</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
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
            formatter={(value) => [`${value} accounts`, 'Accounts']}
          />
          <Line
            type="monotone"
            dataKey="accounts"
            stroke="#00938C"
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
