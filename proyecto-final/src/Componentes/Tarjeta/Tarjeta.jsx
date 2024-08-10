import Card from 'react-bootstrap/Card';
import quinchoprimera from '../../assets/quinchoprimera.jpg'

function Tarjetaquincho() {
  return (
    <img src={quinchoprimera} alt="fotoquincho" />
    // <Card className="tarjeta1 bg-dark text-white">
    //   <Card.Img src={quinchoprimera} alt="Card image" className='imagen' />
    //   <Card.ImgOverlay>
    //     <Card.Title>Card title</Card.Title>
    //     <Card.Text>
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </Card.Text>
    //     <Card.Text>Last updated 3 mins ago</Card.Text>
    //   </Card.ImgOverlay>
    // </Card>
  );
}

export default Tarjetaquincho;