import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-10 text-sm font-light bg-gray-200 text-gray-800'>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive}) => isActive ? activeStyle : undefined}>
                            Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/clothes"
                        className={({ isActive}) => isActive ? activeStyle : undefined}>
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronics"
                        className={({ isActive}) => isActive ? activeStyle : undefined}>
                            Electronics
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-gray-600'>
                    correo@example.com
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar