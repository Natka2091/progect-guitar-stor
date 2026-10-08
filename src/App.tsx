import { Header } from '../src/components/Header'
import { Footer } from '../src/components/Footer'
import { Catalog } from './pajes/Catalog'
import { Hero } from '../src/components/CatalogHero'
import { Home } from '../src/components/MainPage'
import { ShoppingCart } from './pajes/ShoppingCart'
import { Routes, Route} from 'react-router';


function App() {
    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <Hero />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/catalog' element={<Catalog />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App