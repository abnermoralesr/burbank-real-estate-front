import { useState } from 'react'
import './searchbar.scss'
import { Link } from 'react-router-dom';

const searches = ["buy", "rent"]

function SearchBar() {
  const [query, setQuery] = useState({
    search:"buy",
    city:"",
    minPrice:0,
    maxPrice:0
  });


  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const switchType = (val) => {
    setQuery((prev) => ({...prev, search: val}));
  };

  return (
    <div className='searchBar'>
        <div className="type">
            {searches.map((search) => (
                <button 
                    key={search}
                    onClick={() => switchType(search)}
                    className={query.search == search ? "active" : ""}
                >
                    {search == 'buy' ? 'Compra' : 'Renta'}
                </button>
            ))}
        </div>
      <form>
            <input type="text" name="city" placeholder="Ciudad" onChange={handleChange}/>
            <input type="numner" name="minPrice" min={0} max={100000} placeholder="Precio Min" onChange={handleChange}/>
            <input type="numner" name="maxPrice" min={0} max={100000} placeholder="Precio Max" onChange={handleChange} />
            <Link to={`/propiedades/?${new URLSearchParams(query).toString()}`}>
              <button>
                <img src="/search.png" alt="" />
              </button>
            </Link>
        </form>
    </div>
  )
}

export default SearchBar