import { DatabaseZap, House, UserRoundCheck } from 'lucide-react';
import appLogo from '../../assets/logo.png';
import NavItem from './NavItem';
const SideBar = () => {
    const asidebase='bg-white min-h-screen shadow-md w-16 group';
    const asideHover= 'hover:w-40 transition-all duration-300'
    return (
        <aside className={`${asidebase} ${asideHover}`}> 
            <div className='flex items-center justify-center gap-2 m-2'>
                <img src={appLogo} alt="Gi" className='w-11 h-11' />
                <span className='text-2xl font-bold hidden opacity-0 text-gray-700 group-hover:opacity-100 group-hover:block transition-all duration-500'>
                    STUDIFY
                </span>
            </div>

            <div className='flex flex-col items-center group-hover:items-baseline m-2 gap-3 mt-6'>
                <NavItem icon={<House size={20} strokeWidth={2} />} label="Home" />
                <NavItem icon={<DatabaseZap size={20} strokeWidth={2} />} label="Master" />
                <NavItem icon={<UserRoundCheck size={20} strokeWidth={2} />} label="Gemba" />
            </div>
        </aside>

    )
}

export default SideBar