import FenderPrecisionBassOlympicWhite from '../src/assets/pictures/FenderPrecisionBassOlympicWhite.png'
import JacksonWarriorWRX24SatinBlack from '../src/assets/pictures/JacksonWarriorWRX24SatinBlack.png'
import FenderPlayerIIJazzBass3ColorSunburst from '../src/assets/pictures/FenderPlayerIIJazzBass3ColorSunburst.png'
import HöfnerVintage500162Mersey from '../src/assets/pictures/HöfnerVintage500162Mersey.png'
import ClassicResonatorAcoustic from '../src/assets/pictures/ClassicResonatorAcoustic.png'
import MorrisR14GSeethroughBlue from '../src/assets/pictures/MorrisR14GSeethroughBlue.png'
import FenderPlayerIITelecasterButterscotchBlonde from '../src/assets/pictures/FenderPlayerIITelecasterButterscotchBlonde.png'
import FenderJazzmasterSunburst from '../src/assets/pictures/FenderJazzmasterSunburst.png'
import ClassicHollowBodySunburst from '../src/assets/pictures/ClassicHollowBodySunburst.png'
import FenderConcertTone59 from '../src/assets/pictures/FenderConcertTone59.png'
import GretschG9126ACEGuitarUkulele from '../src/assets/pictures/GretschG9126ACEGuitarUkulele.png'
import SterlingbyMusicManAxisAX50QMYucatanBlue from '../src/assets/pictures/SterlingbyMusicManAxisAX50QMYucatanBlue.png'
import JacksonWarriorRed from '../src/assets/pictures/JacksonWarriorRed.png'
import DiamondHeadDU150Soprano from '../src/assets/pictures/DiamondHeadDU150Soprano.png'
import Córdoba15CCataloniaGreen from '../src/assets/pictures/Córdoba15CCataloniaGreen.png'
import SterlingbyMusicManSUBStingRayBlack from '../src/assets/pictures/SterlingbyMusicManSUBStingRayBlack.png'

import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

import type { HeaderMenuItem } from '../src/types';
import type { ProductCard } from '../src/types'

export const headerMenu: HeaderMenuItem[] = [
    {
        name: 'Catalog',
        path: '/catalog'
    },
    {
        name: 'Where to Buy?',
        path: '/whereToBuy'
    },
    {
        name: 'About the Company',
        path: '/aboutTheCompany'
    },
    {
        name: 'Service Centers',
        path: '/serviceCenters'
    }
];

export const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "#",
  },
];

export const catalogLinks = [
  "Acoustic guitars",
  "Classical guitars",
  "Electric guitars",
  "Bass guitars",
  "Ukuleles",
];

export const informationLinks = [
  "Where to buy?",
  "Blog",
  "FAQ",
  "Returns",
  "Service centers",
];

export const productCards: ProductCard[] = [
  {
    id: 1,
    slug: "gretsch-g9126-ace-guitar-ukulele",
    name: "Gretsch G9126 A.C.E. Guitar Ukulele",
    price: 279,
    type: "Guitalele",
    image: GretschG9126ACEGuitarUkulele,
    rating: 5,
    reviews: 31,
    numberOfStrings: 6,
    article: "GIT0046678-000",
  },

  {
    id: 2,
    slug: "cordoba-15c-catalonia-green",
    name: "Córdoba 15C Catalonia Green",
    price: 149,
    type: "Ukulele",
    image: Córdoba15CCataloniaGreen,
    rating: 4.8,
    reviews: 24,
    numberOfStrings: 4,
    article: "99-761-0600",
  },

  {
    id: 3,
    slug: "diamond-head-du-150",
    name: "Diamond Head DU-150 Soprano",
    price: 39,
    type: "Ukulele",
    image: DiamondHeadDU150Soprano,
    rating: 4.2,
    reviews: 10,
    numberOfStrings: 4,
    article: "DU-150",
  },

  {
    id: 4,
    slug: "fender-concert-tone-59-banjo",
    name: "Fender Concert Tone 59",
    price: 899,
    type: "Banjo",
    image: FenderConcertTone59,
    rating: 4.6,
    reviews: 12,
    numberOfStrings: 5,
    article: "BAN-CT59-001",
  },

  {
    id: 5,
    slug: "jackson-warrior-red",
    name: "Jackson Warrior Red",
    price: 649,
    type: "Electric guitars",
    image: JacksonWarriorRed,
    rating: 4.7,
    reviews: 18,
    numberOfStrings: 6,
    article: "JCK-WAR-RED-001",
  },

  {
    id: 6,
    slug: "classic-hollow-body-sunburst",
    name: "Classic Hollow Body Sunburst",
    price: 579,
    type: "Hollow-body guitars",
    image: ClassicHollowBodySunburst,
    rating: 4.5,
    reviews: 16,
    numberOfStrings: 6,
    article: "HBG-SUN-001",
  },

  {
    id: 7,
    slug: "sterling-axis-ax50qm-yucatan-blue",
    name: "Sterling by Music Man Axis AX50QM Yucatan Blue",
    price: 749,
    type: "Electric guitars",
    image: SterlingbyMusicManAxisAX50QMYucatanBlue,
    rating: 4.8,
    reviews: 3,
    numberOfStrings: 6,
    article: "ST-AX50QM-YUB-M2",
  },

  {
    id: 8,
    slug: "fender-jazzmaster-sunburst",
    name: "Fender Jazzmaster Sunburst",
    price: 899,
    type: "Electric guitars",
    image: FenderJazzmasterSunburst,
    rating: 4.7,
    reviews: 21,
    numberOfStrings: 6,
    article: "FEN-JM-SB-001",
  },

  {
    id: 9,
    slug: "fender-player-ii-telecaster-butterscotch-blonde",
    name: "Fender Player II Telecaster Butterscotch Blonde",
    price: 809,
    type: "Electric guitars",
    image: FenderPlayerIITelecasterButterscotchBlonde,
    rating: 4.7,
    reviews: 18,
    numberOfStrings: 6,
    article: "GIT0061904-010",
  },

  {
    id: 10,
    slug: "fender-player-ii-jazz-bass-sunburst",
    name: "Fender Player II Jazz Bass 3-Color Sunburst",
    price: 849,
    type: "Bass guitars",
    image: FenderPlayerIIJazzBass3ColorSunburst,
    rating: 4.6,
    reviews: 4,
    numberOfStrings: 4,
    article: "JBASS-P2-3TS-001",
  },

  {
    id: 11,
    slug: "hofner-vintage-500-1-62-mersey",
    name: "Höfner Vintage 500/1 '62 Mersey",
    price: 2990,
    type: "Bass guitars",
    image: HöfnerVintage500162Mersey,
    rating: 5,
    reviews: 17,
    numberOfStrings: 4,
    article: "145035",
  },

  {
    id: 12,
    slug: "classic-resonator-acoustic",
    name: "Classic Resonator Acoustic",
    price: 699,
    type: "Resonator guitars",
    image: ClassicResonatorAcoustic,
    rating: 4.5,
    reviews: 9,
    numberOfStrings: 6,
    article: "RES-CLASSIC-001",
  },

  {
    id: 13,
    slug: "fender-precision-bass-olympic-white",
    name: "Fender Precision Bass Olympic White",
    price: 899,
    type: "Bass guitars",
    image: FenderPrecisionBassOlympicWhite,
    rating: 4.7,
    reviews: 15,
    numberOfStrings: 4,
    article: "FEN-PB-OW-001",
  },

  {
    id: 14,
    slug: "jackson-warrior-wrx24-satin-black",
    name: "Jackson Warrior WRX24 Satin Black",
    price: 625,
    type: "Electric guitars",
    image: JacksonWarriorWRX24SatinBlack,
    rating: 4.6,
    reviews: 7,
    numberOfStrings: 6,
    article: "536374",
  },

  {
    id: 15,
    slug: "sterling-sub-stingray-black",
    name: "Sterling by Music Man SUB StingRay Black",
    price: 399,
    type: "Bass guitars",
    image: SterlingbyMusicManSUBStingRayBlack,
    rating: 4.5,
    reviews: 11,
    numberOfStrings: 4,
    article: "SUB-RAY-BLK-001",
  },

  {
    id: 16,
    slug: "morris-r-14g-see-through-blue",
    name: "Morris R-14G See-through Blue",
    price: 1199,
    type: "Acoustic-electric guitars",
    image: MorrisR14GSeethroughBlue,
    rating: 5,
    reviews: 13,
    numberOfStrings: 6,
    article: "R-14G-SBU",
  },
];