import { useState } from 'react'
import './searchbar.scss'

const types = ["buy", "rent"]

function SearchBar() {
  const [query, setQuery] = useState({
    type:"buy",
    location:"",
    minPrirce:0,
    maxPrice:0
  });

  const switchType = (val) => {
    setQuery((prev) => ({...prev, type: val}));
  };

  return (
    <div className='searchBar'>
        <div className="type">
            {types.map((type) => (
                <button 
                    key={type}
                    onClick={() => switchType(type)}
                    className={query.type == type ? "active" : ""}
                >
                    {type == 'buy' ? 'Compra' : 'Renta'}
                </button>
            ))}
        </div>
        <form>
            <input type="text" name="location" placeholder="Ciudad"/>
            <input type="numner" name="minPrice" min={0} max={100000} placeholder="Precio Min"/>
            <input type="numner" name="maxPrice" min={0} max={100000} placeholder="Precio Max"/>
            <button>
                <img src="/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar