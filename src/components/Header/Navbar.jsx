import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo-figmaland.svg'
import icon_twitter from '../../assets/images/icon-twitter.svg'
import icon_facebook from '../../assets/images/icon-facebook.svg'
import icon_linkedin from '../../assets/images/icon-linkedin.svg'
import icon_hamburger from '../../assets/images/icon-hamburger.svg'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="container mx-auto px-6 py-4 md:px-10 lg:px-20 xl:px-28 flex items-center justify-between text-white">
            {/* Menu Items */}
            <div className="hidden md:flex space-x-4">
                <Link to="#" className="links">Home</Link>
                <Link to="#" className="links">Product</Link>
                <Link to="#" className="links">Pricing</Link>
                <Link to="#" className="links">About</Link>
                <Link to="#" className="links">Contact</Link>
            </div>

            {/* Logo */}
            <div>
                <img src={logo} alt='Figma Land Logo' />
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex space-x-2">
                <img src={icon_twitter} alt='Twitter Icon' />
                <img src={icon_facebook} alt='Facebook Icon' />
                <img src={icon_linkedin} alt='LinkedIn Icon' />
            </div>

            {/* Hamburger Icon */}
            <button className="block md:hidden" onClick={() => setToggleMenu(!toggleMenu)}
            >
                <img src={icon_hamburger} alt="Hamburger Icon" />
            </button>

            {/* Mobile Menu */}
            <div className={toggleMenu ? 'block md:hidden' : 'hidden'}>
                <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow- text-black rounded-lg shadow-lg">
                    <Link to="#" className="links">Home</Link>
                    <Link to="#" className="links">Product</Link>
                    <Link to="#" className="links">Pricing</Link>
                    <Link to="#" className="links">About</Link>
                    <Link to="#" className="links">Contact</Link>
                </div>
            </div>
        </nav>
    )
}
