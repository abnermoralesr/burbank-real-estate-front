import Slider from '../../components/slider/Slider'
import './single.scss'
import { singlePostData, userData } from '../../lib/dummy'
import Map from "../../components/map/Map";
import { useLoaderData } from 'react-router-dom';
import DOMPurify from 'dompurify';

function Single() {
  const propertyData = useLoaderData();

  console.log(propertyData);

  return (
    <div className='single'>
      <div className="details">
        <div className="wrapper">
          <Slider images={propertyData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{propertyData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{propertyData.address}</span>
                </div>
                <div className="price">$ {propertyData.price}</div>
              </div>
              <div className="user">
                <img src={propertyData.UserAssigned.avatar || "/noavatar.jpeg"} alt="" />
                <span>{propertyData.UserAssigned.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(propertyData.description)}}></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Reparaciones</span>
                <p>Realizado por Casero</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politica Mascotas</span>
                <p>Mascostas permitidas</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Cuota de propiedad</span>
                <p>Debe tener un ingreso de 3x superior a costo total de la renta</p>
              </div>
            </div>
          </div>
          <p className="title">Medidas</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 M2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 cuartos</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 baño</span>
            </div>
          </div>
          <p className="title">Lugares Cercanos</p>
          <div className="listHorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m distancia</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m distancia</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restarante</span>
                <p>200m distancia</p>
              </div>
            </div>
          </div>
          <p className="title">Ubicacion</p>
          <div className="mapContainer">
            <Map items={[propertyData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Enviar Mensaje
            </button>
            <button>
              <img src="/save.png" alt="" />
              Guardar Propiedad
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single