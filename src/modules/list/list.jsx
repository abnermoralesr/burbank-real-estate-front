import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData } from '../../lib/dummy';
import './list.scss'

function List(){
  const data = listData;

  return (
    <div className='list'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map(item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default List;