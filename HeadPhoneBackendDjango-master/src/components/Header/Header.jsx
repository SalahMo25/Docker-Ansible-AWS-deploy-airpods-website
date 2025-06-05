import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from './headerData';
import { useGlobalContext } from '../../AppContexts/StoreContext';


const Header = () => {

    const {amount} = useGlobalContext()
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        setIsOpen(false)
    }, [location])

return (
    <section className='navbar flex justify-center flex-wrap'>
            <button className={`navbar-toggler md:hidden ${isOpen ? 'rotate' : ''}`}  onClick={() => setIsOpen(!isOpen)}><i class="fa-solid fa-bars"></i></button>
            <div className={`${isOpen ? 'block' : 'hidden'} navbar-nav md:flex flex-row justify-center py-3 px-10 mt-10 gap-6 text-xl uppercase text-center`}>
                {data.map((link) => {
                    const { id, name, to } = link;
                    return (
                        <div className='navbar-link' key={id}>
                            <ul>
                                <li className='py-4 md:py-0'>
                                    <Link to={to} onClick={handleLinkClick}>{name}</Link>
                                </li>
                            </ul>
                        </div>
                    );
                })}
                <div>
                    <Link to='cart'>
                        <button className='cart-btn py-4 md:py-0'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className='text-white text-xl ml-1'>{amount}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
)
}

export default Header
