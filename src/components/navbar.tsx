import Image from "next/image";
import Logo from '../../public/rdap-iso.svg';
import './navbar.css';

function Navbar () {
    return (
        <nav className="nav sticky top-0 z-50">
            <div className="nav-container flex items-center justify-between">
                <div className="nav-wrapper flex items-center gap-6">
                    <div className="nav-brand">
                        <a href="/">
                            <Image
                            className="w-10"
                            src={Logo}
                            alt="Rdap Logo"
                            priority
                            />
                        </a>
                    </div>
                    <div className="nav-links flex items-center gap-8 text-gray-400 text-sm">
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <div>
                            <a href="/music">Music</a>
                        </div>
                        <div>
                            <a href="/shop">Merch</a>
                        </div>
                        <div>
                            <a href="/services">Services</a>
                        </div>
                        <div>
                            <a href="/portfolio">Portfolio</a>
                        </div>
                    </div>
                </div>
                <div className="nav-wrapper">
                    <div className="nav-buttons flex items-center gap-4">
                        <div className="nav-button flex items-center gap-2">
                            <i className="fi fi-rr-handshake"></i>
                            <a href="">Hire</a>
                        </div>
                        <div className="nav-button flex items-center gap-2">
                            <i className="fi fi-rr-heart"></i>
                            <a href="">Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;