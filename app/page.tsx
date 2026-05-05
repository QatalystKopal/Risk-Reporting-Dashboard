import PlatformAnalytics from './components/sections/PlatformAnalytics'
import CarbonTransactions from './components/sections/CarbonTransactions'
import VCUManagement from './components/sections/VCUManagement'
import FAB from './components/common/FAB'

export default function Dashboard() {
  return (
    <>
      <PlatformAnalytics />
      <CarbonTransactions />
      <VCUManagement />
      <FAB />
    </>
  )
}
