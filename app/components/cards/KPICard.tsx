import { LucideIcon, TrendingUp } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  barValues?: number[]
}

export default function KPICard({ title, value, change, icon: Icon, barValues = [20, 40, 60, 100] }: KPICardProps) {
  const normalizedBars = barValues.map(v => (v / Math.max(...barValues)) * 100)

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-label-caps font-label-caps text-outline uppercase">{title}</h3>
        <Icon className="text-primary" size={24} />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-stat-value font-stat-value text-on-surface">{value}</p>
          <div className="flex items-center gap-1 mt-1">
            <TrendingUp className="text-primary" size={16} />
            <span className="text-primary text-[12px] font-bold">{change}</span>
          </div>
        </div>
        <div className="w-20 h-10 flex items-end gap-1">
          {normalizedBars.map((height, idx) => (
            <div
              key={idx}
              className="w-2 bg-primary rounded-t-sm"
              style={{
                height: `${height * 0.4}px`,
                opacity: 0.2 + (height / 100) * 0.8,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
