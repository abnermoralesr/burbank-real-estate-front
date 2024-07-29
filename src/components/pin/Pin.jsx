import {Marker, Popup} from 'react-leaflet';
import {Link} from 'react-router-dom';
import './pin.scss';

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className="popupContainer">
                <img src={item.img} alt={item.title} />
                <div className="textContainer">
                    <Link to={`/propiedad/${item.id}`}>{item.title}</Link>
                    <div >{item.bedroom} cuartos</div>
                    <b>$ {item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin