interface ClientLedgerProps {
  maxHeight?: string
}

const clients = [
  { name: 'Global Renewables', status: 'Active', date: 'Oct 12' },
  { name: 'Carbon Offset Ltd', status: 'Pending', date: 'Oct 24' },
  { name: 'Nature Vaults Corp', status: 'Active', date: 'Nov 02' },
  { name: 'EcoSystem Partners', status: 'Active', date: 'Nov 05' },
  { name: 'Solaris Energy', status: 'Pending', date: 'Nov 08' },
]

export default function ClientLedger({ maxHeight = 'max-h-[320px]' }: ClientLedgerProps) {
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
      <div className="p-8 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-h3 font-h3 text-on-surface">Managed Clients Ledger</h3>
          <a className="text-primary font-bold text-sm hover:opacity-80 transition-opacity" href="#">View All</a>
        </div>
      </div>
      <div className={`flex-1 overflow-y-auto custom-scrollbar ${maxHeight}`}>
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-y border-gray-100 sticky top-0">
            <tr>
              <th className="px-8 py-3 text-[10px] font-label-caps text-outline uppercase">Client Entity</th>
              <th className="px-4 py-3 text-[10px] font-label-caps text-outline uppercase text-center">Status</th>
              <th className="px-8 py-3 text-[10px] font-label-caps text-outline uppercase text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {clients.map((client) => (
              <tr key={client.name} className="hover:bg-gray-50 transition-colors">
                <td className="px-8 py-4">
                  <p className="text-sm font-bold">{client.name}</p>
                </td>
                <td className="px-4 py-4 text-center">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    client.status === 'Active'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-orange-100 text-secondary'
                  }`}>
                    {client.status}
                  </span>
                </td>
                <td className="px-8 py-4 text-right text-xs text-outline">{client.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
