import './Seccion.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import canchaPadel from '../../assets/canchaPadel.jpg';
import cancha2 from '../../assets/cancha2.jpg';
import cancha3 from '../../assets/cancha3.jpg';

function Seccion() {
    return (
        <section className='seccion'>
            <Link to="/Seccion" />
            <p className="parrafo">En Delta Sports te acercamos diferentes propuestas para que vengas a compartir momentos de calidad con amigos y familia, al mismo tiempo que cuidas de tu salud haciendo deporte.</p>

            <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={canchaPadel} alt="cancha" className='imgcancha' text="First slide" />  
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={cancha2} alt="jugadores" className='imgjugador' text="Second slide"/>  
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={cancha3} alt="jugadores" className='imgjugador'text="Third slide" />
        <Carousel.Caption>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>

        </section>)
};
export default Seccion;