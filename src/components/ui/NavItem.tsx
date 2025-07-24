import type { ReactNode } from "react";

type NavItemProps={
icon: ReactNode;
  label: string;
}
const NavItem = ({ icon, label }: NavItemProps) => {
  return (
    <section className='group/item flex items-center hover:bg-blue-200 group-hover:w-full p-1 rounded-md gap-2 transition-all duration-300'>
      <div className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">
        {icon}
      </div>
      <h4 className="pt-0.5 text-lg text-gray-700 font-semibold hidden group-hover:block group-hover/item:text-blue-700 transition-colors duration-300">
        {label}
      </h4>
    </section>
  )
}

export default NavItem