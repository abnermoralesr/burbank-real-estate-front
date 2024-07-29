import './filter.scss';

function Filter() {
  return (
    <div className='filter'>
      <h1>Resultados de busqueda para <b>Benito Juarez</b></h1>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Ubicacion</label>
          <input type="text" id='city' name='city' placeholder='Ciudad'/>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="tipo">Compra/Renta</label>
          <select name="type" id="type">
            <option value="">Todos</option>
            <option value="buy">Compra</option>
            <option value="rent">Renta</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="tipo">Tipo</label>
          <select name="property" id="property">
            <option value="">Todos</option>
            <option value="department">Departamento</option>
            <option value="house">Casa</option>
            <option value="land">Terreno</option>
            <option value="office">Oficina</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Precio Min</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='Todos'/>
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Precio Max</label>
          <input type="text" id='maxPrice' name='maxPrice' placeholder='Todos'/>
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Filter;