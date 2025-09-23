import { cn } from '../../lib/cn'

export default function Badge({ variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-blue-600 text-white',
    outline: 'border border-slate-300 text-slate-700',
    secondary: 'bg-gray-200 text-gray-800',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
