import { Link } from "react-router-dom"

interface Iprops {
  to: string
  icon: React.ReactNode
  label: string
  onSelect: () => void
  labelColor: string
}

const SidebarItem: React.FC<Iprops> = ({
  to,
  icon,
  label,
  onSelect,
  labelColor,
}) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center py-3 rounded-md"
      onClick={onSelect}
    >
      {icon}
      <span className={`text-${labelColor} text-base mt-2`}>{label}</span>
    </Link>
  )
}

export default SidebarItem
