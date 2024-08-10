import { Await, useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';
import { listData } from '../../lib/dummy';
import './list.scss'
import { Suspense } from 'react';

function List(){
  const data = useLoaderData();

  return (
    <div className='list'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          <Suspense fallback={<div>Loading...</div>}>
            <Await
              resolve={data.propertyResponse}
              errorElement={
                <p>Error cargando propiedades!</p>
              }
            >
              {(propertyResponse) => propertyResponse.data.map(property => (
                <Card key={property.id} item={property}/>
            
              ))}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<div>Loading...</div>}>
            <Await
              resolve={data.propertyResponse}
              errorElement={
                <p>Error cargando propiedades!</p>
              }
            >
              {(propertyResponse) => <Map items={propertyResponse.data}/>}
            </Await>
          </Suspense>
      </div>
    </div>
  )
}

export default List;