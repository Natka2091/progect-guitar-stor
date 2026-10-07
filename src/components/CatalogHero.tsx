import HeroGuitar from '../assets/pictures/heroGuitar.png'
import LineHero from '../assets/pictures/LineHero.png'
import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="relative z-20 h-70.5 w-full mb-10 overflow-visible bg-white">

      <img
        src={LineHero}
        alt=""
        className="absolute top-5 w-full"
      />

      <img
        src={HeroGuitar}
        alt="Guitar"
        className="absolute right-0 -top-8.75 z-30 w-225"
      />

      <div className="absolute -bottom-7.5 left-10">
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