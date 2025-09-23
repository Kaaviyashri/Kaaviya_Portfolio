import { cn } from '../../lib/cn'

export default function Button({
  asChild,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) {
  const Tag = asChild ? 'span' : 'button'
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors'
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900',
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  }
  return (
    <Tag className={cn(base, variants[variant], sizes[size], className)} {...props} />
  )
}
