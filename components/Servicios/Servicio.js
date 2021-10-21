import Image from 'next/image';


function Servicio({ icon, title, text }) {


    return (
        <div className='servicios__card'>
            <Image src={icon} alt="Icon" width={100} height={100} className="servicios__icon"/>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#" className='servicios__link'>Saber Más</a>
        </div>
    )
}

export default Servicio;
