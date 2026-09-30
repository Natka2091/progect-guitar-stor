import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { Catalog } from './pajes/Catalog'
import { Hero } from '../src/components/CatalogHero'
import { Home } from '../src/components/MainPage'
import { Routes, Route} from 'react-router';

function App() {
    return (
        <div className="min-h-screen">

            <Header />
            <Hero />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/catalog' element={<Catalog />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App