import { useSearchParams } from 'react-router-dom';
import './filter.scss';
import { useState } from 'react';

function Filter() {
  const [searchParams, searchSetParams] = useSearchParams();
  const [query, setQuery] = useState({
    search: searchParams.get('search') || "",
    city: searchParams.get('city') || "",
    type: searchParams.get('type') || "",
    minPrice: searchParams.get('minPrice') || 1,
    maxPrice: searchParams.get('maxPrice') || 100000000,
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value
    });
  }

  const handleFilter = () => {
    searchSetParams(query);
  }


  return (
    <div className='filter'>
      <h1>Resultados de busqueda {searchParams.get('city') && (<>para <b>{searchParams.get('city')}</b></>)}</h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Ubicacion</label>
          <input type="text" id='city' name='city' placeholder='Ciudad' onChange={handleChange} defaultValue={query.city} />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="search">Compra/Renta</label>
          <select name="search" id="search" onChange={handleChange} defaultValue={query.search}>
            <option value="">Todos</option>
            <option value="buy">Compra</option>
            <option value="rent">Renta</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="tipo">Tipo</label>
          <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
            <option value="">Todos</option>
            <option value="department">Departamento</option>
            <option value="house">Casa</option>
            <option value="land">Terreno</option>
            <option value="office">Oficina</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Precio Min</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='Todos' onChange={handleChange} defaultValue={query.minPrice}/>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Precio Max</label>
          <input type="text" id='maxPrice' name='maxPrice' placeholder='Todos' onChange={handleChange} defaultValue={query.maxPrice}/>
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter;