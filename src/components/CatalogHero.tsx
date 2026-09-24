import HeroGuitar from '../assets/pictures/heroGuitar.png'
import LineHero from '../assets/pictures/LineHero.png'
import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="relative z-20 h-[282px] w-full overflow-visible bg-white">

      <img
        src={LineHero}
        alt=""
        className="absolute top-[20px] w-full"
      />

      <img
        src={HeroGuitar}
        alt="Guitar"
        className="absolute right-0 -top-[35px] z-30 w-[900px]"
      />

      <div className="absolute bottom-[-30px] left-10">
        <h1 className="text-2xl font-bold">
          Guitar Catalog
        </h1>

        <div className="mt-4 flex items-center justify-between text-[18px] text-gray-600">
          <Link to="/">
            Main
          </Link>

          <span className="text-black">
            →
          </span>

          <Link to='/catalog'>
            Catalog
          </Link>
        </div>
      </div>


    </section>
  );
}