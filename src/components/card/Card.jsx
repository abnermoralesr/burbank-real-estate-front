import {Link} from 'react-router-dom';
import './card.scss';

function Card({item}) {
  return (
    <div className='card'>
      <Link to={`/propiedad/${item.id}`} className="imageContainer">
        <img src={item.img} alt={item.title} />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link to={`/propiedad/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className='address'>
            <img src="/pin.png" alt="" />
            <span>{item.address}</span>
        </p>
        <p className='price'>
          <Link to={`/propiedad/${item.id}`}>
            <span>${item.price}</span>
          </Link>
        </p>
        <div className='bottom'>
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} cuartos</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} baños</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;