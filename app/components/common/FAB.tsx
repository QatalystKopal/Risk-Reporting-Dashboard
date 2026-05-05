'use client'

import { Plus } from 'lucide-react'

export default function FAB() {
  return (
    <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
      <Plus size={28} />
    </button>
  )
}
