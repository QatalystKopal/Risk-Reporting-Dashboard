'use client'

import { Search, Bell, HelpCircle, Settings } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 flex justify-between items-center px-8">
      {/* Search Bar */}
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" size={18} />
          <input
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
            placeholder="Search accounts, projects, or metrics..."
            type="text"
          />
        </div>
      </div>

      {/* Action Buttons and User Profile */}
      <div className="flex items-center gap-6 ml-8">
        {/* Notifications */}
        <button className="text-gray-600 hover:text-primary active:opacity-80 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
        </button>

        {/* Help */}
        <button className="text-gray-600 hover:text-primary active:opacity-80 transition-colors">
          <HelpCircle size={20} />
        </button>

        {/* Settings */}
        <button className="text-gray-600 hover:text-primary active:opacity-80 transition-colors">
          <Settings size={20} />
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-bold text-on-surface leading-none">Admin User</p>
            <p className="text-[10px] text-outline font-label-caps uppercase mt-1">Lead Auditor</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              alt="User Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnEC96iLX2y6u5TV22PEBETzubMJ7rn5Xowx-b7AlIEwdIXAX2m9e94OTdmtdOrLlh_QnvnR8S1dCntc5zsL6etYu73v2OZ_Il_90vo6sXwYTEItGl0XrmfttoKo-wzliTKomHN3BJoUq6TqHJ2nS9l6HxB77rKzoqtC_5YcnImBBE6fZom2YOGccvh9cQQzoHC49T1vFcdXJu8tAzPgbvBjBNVtYCfjEnMfluT54RXEZXYYjF5mvBcniQtErGX7cwSYGxH04OeM"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
