import LogoHeader from '../assets/icons/LogoHeader.svg'
import  icon_basket  from '../assets/icons/icon_basket.svg'

import { Link, NavLink } from 'react-router'
import { headerMenu } from '../data'
import { FiMapPin, FiSearch } from "react-icons/fi";


export function Header() {
    return (
    <header className="relative z-10 h-[110px] w-full bg-[#1E0906]/15">
        <div className="mx-auto flex h-full items-center justify-between px-16">
            <Link to='/'>
               <img src={LogoHeader} alt='Guitar shop' className="h-auto w-[70px]" />
            </Link>

            <nav className="flex items-center gap-8">
                {headerMenu.map((item) => (
                    <NavLink key={item.path} to={item.path} className="text-[14px] text-black">
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="flex items-center gap-8">
                <Link to='/whereToBuy'>
                    <FiMapPin />
                </Link>

                <button type='button'>
                    <FiSearch />
                </button>

                <Link to='/shopping-cart'>
                    <img src={icon_basket} alt='icon-basket' />
                </Link>
            </div>
        </div>
    </header>
    )
}
