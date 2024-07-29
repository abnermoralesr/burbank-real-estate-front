import SearchBar from '../../components/searchBar/SearchBar'
import './home.scss'

function Home() {
  return (
    <div className='home'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">
                    Encuentra aqui tu lugar ideal
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel commodo dui. Sed consectetur vestibulum vehicula. Sed cursus dapibus libero at fermentum. Phasellus euismod arcu eget est auctor, sed fringilla eros congue. Donec auctor lacinia arcu. Curabitur mollis molestie turpis, sed ultricies orci rutrum eget. Donec purus tellus, semper nec lorem et, lacinia auctor quam. Suspendisse tempor diam sed nisi condimentum feugiat. Donec hendrerit tempor gravida. Proin elementum at nunc nec sodales. Ut egestas vitae elit quis ultricies.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Años de Experienca</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Propiedades Colocadas</h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Propiedades Disponibles</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="background" />
        </div>
    </div>
  )
}

export default Home;