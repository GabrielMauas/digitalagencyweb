import Servicio from './Servicio';

import monitor from '../../public/monitor.svg';
// import shopping from '../../public/shopping.svg';
import grid from '../../public/grid.svg';
// import statistics from '../../public/statistics.svg';
import shoppingCart from '../../public/shoppingCart.svg';
import stats from '../../public/stats.svg';
import webpage from '../../public/webpage.png';
import website from '../../public/website.png';
import ecommerce from '../../public/ecommerce.png';
import seoreport from '../../public/seoreport.png';

function Servicios() {

    const desc = "Diseñamos y producimos tu sitio web 100% personalizado y adaptado a tus necesidades."

    return (
        <div className='servicios' id="servicios">
            {/* <div className='servicios__content'>
                <h2>Servicios</h2>
                <p className='servicios__text'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div> */}
            <div className='servicios__layout'>
                <h2>Nuestros Servicios</h2>
                <div className='servicios__cards'>
                    <Servicio icon={website} title="Sitios Corporativos" text={desc} />
                    <Servicio icon={webpage} title="Landing Page" text={desc} />
                    <Servicio icon={ecommerce} title="E-Commerce" text={desc} />
                    <Servicio icon={seoreport} title="SEO" text={desc} />
                </div>
            </div>

        </div>
    )
}

export default Servicios;
