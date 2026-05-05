interface MetricCardProps {
  label: string
  value: string
  description: string
  variant?: 'default' | 'primary' | 'accent'
}

export default function MetricCard({
  label,
  value,
  description,
  variant = 'default',
}: MetricCardProps) {
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    primary: 'bg-primary text-white',
    accent: 'bg-gradient-to-br from-primary to-primary-fixed text-white',
  }

  return (
    <div className={`p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)] ${variantStyles[variant]}`}>
      <p className={`text-label-caps font-label-caps ${
        variant === 'default' ? 'text-outline' : 'opacity-80'
      } uppercase mb-2`}>
        {label}
      </p>
      <p className={`text-2xl font-black mb-1 ${
        variant === 'default' ? 'text-on-surface' : ''
      }`}>
        {value}
      </p>
      <p className={`text-[11px] ${
        variant === 'default' ? 'text-outline' : 'opacity-70'
      }`}>
        {description}
      </p>
    </div>
  )
}
