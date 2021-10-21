import { useState } from 'react';

function Navbar() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='navbar'>
            <h1>G<span>M</span></h1>
            <button className='navbar__contact'>Contactános</button>
            <button className='navbar__button' onClick={handleOpen}>
                <div className={open ? "active" : ""} />
            </button>

            <div className={open ? "navbar__mobile active" : "navbar__mobile"}>
                <h1>GM <span>Digital</span></h1>
                <ul className='navbar__list' onClick={handleOpen}>
                    <li>
                        <a href="#">
                            Quienes Somos
                        </a>
                    </li>
                    <li>
                        <a href="#servicios">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="contacto"> 
                            Contacto
                        </a>
                    </li>
                </ul>
                <div className={open ? "navbar__bg active" : "navbar__bg"} onClick={handleOpen}/>
            </div>
           
        </div>
    )
}

export default Navbar
