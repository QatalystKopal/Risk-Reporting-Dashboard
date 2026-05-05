import MetricCard from '../cards/MetricCard'
import SettlementChart from '../charts/SettlementChart'
import { TrendingUp } from 'lucide-react'

export default function VCUManagement() {
  return (
    <section className="mb-16 border-t border-gray-100 pt-12">
      <h2 className="text-h2 font-h2 text-on-surface mb-8">VCU Management</h2>

      {/* VCU Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Total VCUs Card - Featured */}
        <div className="bg-primary text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-4 -top-4 text-white/10 text-8xl">★</div>
          <h3 className="text-label-caps font-label-caps text-white/80 uppercase mb-2">Total Number of VCUs</h3>
          <p className="text-3xl font-black leading-tight mb-2">4,285,910</p>
          <p className="text-[11px] font-medium text-white/70">From onboarded projects only</p>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold">
            <TrendingUp size={14} /> +12.4% MoM
          </div>
        </div>

        {/* Other metrics */}
        <MetricCard
          label="VCUs in Pipeline"
          value="1,245,000"
          description="Pending verification"
          variant="default"
        />
        <MetricCard
          label="Contracted"
          value="850,000"
          description="Active commitments"
          variant="default"
        />
        <MetricCard
          label="Avg. size Per Contract"
          value="100,000"
          description="tCO2e"
          variant="default"
        />
        <MetricCard
          label="Settled VCUs (USD)"
          value="$ 640,000"
          description="Fully transferred"
          variant="default"
        />
      </div>

      {/* Settlement Chart */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
          <SettlementChart />
        </div>
      </div>
    </section>
  )
}
