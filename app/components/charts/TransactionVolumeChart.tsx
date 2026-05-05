'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'JAN', onboarded: 80, prospective: 20 },
  { month: 'FEB', onboarded: 60, prospective: 40 },
  { month: 'MAR', onboarded: 100, prospective: 20 },
  { month: 'APR', onboarded: 80, prospective: 60 },
  { month: 'MAY', onboarded: 100, prospective: 40 },
  { month: 'JUN', onboarded: 120, prospective: 20 },
]

export default function TransactionVolumeChart() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-h3 font-h3">Transaction Volume Trends</h3>
        <div className="flex gap-4 text-[10px] font-label-caps uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-primary"></span> Onboarded
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-secondary"></span> Prospective
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 30 }}>
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
          />
          <Bar dataKey="onboarded" stackId="a" fill="#00938C" />
          <Bar dataKey="prospective" stackId="a" fill="#F86501" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
