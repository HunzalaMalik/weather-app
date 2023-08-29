import { Link } from "react-router-dom"

interface Iprops {
  to: string
  icon: React.ReactNode
  label: string
  onSelect?: () => void
  labelColor: string
  disabled?: boolean
}

const SidebarItem: React.FC<Iprops> = ({
  to,
  icon,
  label,
  onSelect,
  labelColor,
  disabled,
}) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center py-3 rounded-md"
      onClick={onSelect}
      style={disabled ? { pointerEvents: "none" } : {}}
    >
      {icon}
      <span className={`text-${labelColor} text-base mt-2`}>{label}</span>
    </Link>
  )
}

export default SidebarItem
