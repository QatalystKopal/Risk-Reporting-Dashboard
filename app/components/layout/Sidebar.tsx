'use client'

import Link from 'next/link'
import { BarChart3, LayoutDashboard } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-gray-200 bg-white z-50 flex flex-col py-6">
      {/* Logo Section */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
            <BarChart3 className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black text-primary tracking-tight">CarbonControl</h1>
            <p className="text-[10px] font-label-caps text-outline uppercase">Industrial Intelligence</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 text-primary font-bold border-r-4 border-primary bg-primary/5 transition-all duration-200 rounded"
        >
          <LayoutDashboard size={20} />
          <span className="font-body-sm">Dashboard</span>
        </Link>
      </nav>

      {/* Quota Status */}
      <div className="px-6 mt-auto">
        <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
          <p className="text-[11px] font-label-caps text-outline mb-2">QUOTA STATUS</p>
          <div className="w-full bg-gray-200 h-1.5 rounded-full mb-2">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '72%' }}></div>
          </div>
          <p className="text-[11px] font-body-sm text-on-surface-variant">72% of limit used</p>
        </div>
      </div>
    </aside>
  )
}
