import KPICard from '../cards/KPICard'
import TrendChart from '../charts/TrendChart'
import ClientLedger from '../tables/ClientLedger'
import { Users, Leaf, BarChart3, Users2 } from 'lucide-react'

export default function PlatformAnalytics() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-h2 font-h2 text-on-surface">Platform Analytics</h2>
        <div className="text-body-sm text-outline">Last synchronized: 2 mins ago</div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Total Active Accounts"
          value="1,842"
          change="+8.2%"
          icon={Users}
          barValues={[4, 6, 8, 10]}
        />
        <KPICard
          title="Projects Assessed"
          value="432"
          change="+12.5%"
          icon={Leaf}
          barValues={[3, 6, 9, 10]}
        />
        <KPICard
          title="Assessments Performed"
          value="12,840"
          change="+5.1%"
          icon={BarChart3}
          barValues={[6, 8, 9, 10]}
        />
        <KPICard
          title="Registered Users"
          value="24,510"
          change="+12%"
          icon={Users2}
          barValues={[3, 6, 7, 10]}
        />
      </div>

      {/* Trends Row */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
          <TrendChart />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <ClientLedger />
        </div>
      </div>
    </section>
  )
}
