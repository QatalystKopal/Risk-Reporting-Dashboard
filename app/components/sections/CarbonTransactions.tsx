import MetricCard from '../cards/MetricCard'
import TransactionVolumeChart from '../charts/TransactionVolumeChart'
import { ShoppingCart, Store, Leaf } from 'lucide-react'

export default function CarbonTransactions() {
  return (
    <section className="mb-16 border-t border-gray-100 pt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-h2 font-h2 text-on-surface">Carbon Credit Transactions</h2>
      </div>

      {/* Transaction Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-label-caps font-label-caps text-outline uppercase">Buyers</h3>
            <ShoppingCart className="text-primary" size={20} />
          </div>
          <p className="text-3xl font-black mb-2">142</p>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
            <div className="bg-primary h-full" style={{ width: '60%' }}></div>
            <div className="bg-secondary h-full" style={{ width: '40%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold">
            <span className="text-primary">84 ONBOARDED</span>
            <span className="text-secondary">58 PROSPECTIVE</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-label-caps font-label-caps text-outline uppercase">Sellers</h3>
            <Store className="text-primary" size={20} />
          </div>
          <p className="text-3xl font-black mb-2">96</p>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
            <div className="bg-primary h-full" style={{ width: '65%' }}></div>
            <div className="bg-secondary h-full" style={{ width: '35%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold">
            <span className="text-primary">62 ONBOARDED</span>
            <span className="text-secondary">34 PROSPECTIVE</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-label-caps font-label-caps text-outline uppercase">Projects</h3>
            <Leaf className="text-primary" size={20} />
          </div>
          <p className="text-3xl font-black mb-2">218</p>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex">
            <div className="bg-primary h-full" style={{ width: '61%' }}></div>
            <div className="bg-secondary h-full" style={{ width: '39%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold">
            <span className="text-primary">134 ONBOARDED</span>
            <span className="text-secondary">84 PROSPECTIVE</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
        <TransactionVolumeChart />
      </div>
    </section>
  )
}
