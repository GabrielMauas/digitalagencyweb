import Link from 'next/link';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero__content'>
                <h1>Construimos los sitios que construyen tu negocio.</h1>
                <p className='hero__text'>
                    Somos una agencia digital que brinda soluciones digitales a emprendedores y profesionales. 
                    Trabajamos lado a lado con nuestros clientes para satsifacer todos sus requisitos. 
                </p>
                <div className='hero__btncont'>
                    <button className='hero__button'><Link href="#servicios" replace>Conoce más</Link></button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero;
