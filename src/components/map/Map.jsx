import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Pin from '../pin/Pin';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

function Map({items}) {
  const position = [52.4797, -1.90269];

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item => (
            <Pin item={item} key={item.id}/>
        ))}
    </MapContainer>
  )
}

export default Map;