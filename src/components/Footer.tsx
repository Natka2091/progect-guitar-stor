
import footerLine from "../assets/pictures/LineFooter.png";
import logo from "../assets/icons/LogoFooter.svg";
import { socialLinks } from "../data";
import { catalogLinks } from "../data";
import { informationLinks } from "../data";
import footerGuitar from "../assets/pictures/footerGuitar.png";

export function Footer() {
  return (
    <footer className="relative isolate mt-32.5 w-full">

      <img
        src={footerGuitar}
        alt=""
        className="pointer-events-none absolute left-0 bottom-22 z-0 w-250"
      />

      <div className="relative z-10 bg-[#3D3D3D] text-white">

        <img
          src={footerLine}
          alt=""
          className="absolute left-0 -top-3.75 z-30 w-full"
        />

        <div className="mx-auto grid w-full max-w-384 grid-cols-1 gap-10 px-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">

        <div>
            <img src={logo} alt="Guitar Shop" className="w-30"/>

            <div className="mt-16 flex gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#BDBDBD] text-[#3D3D3D]"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm tracking-[0.2em]">
              ABOUT US
            </h3>

            <p className="text-sm leading-5 text-[#D0D0D0]">
              Guitar store,
              <br />
              musical instruments
              <br />
              and guitar workshop
              <br />
              in Saint Petersburg.
            </p>

            <p className="mt-6 text-sm leading-5 text-[#D0D0D0]">
              All instruments are
              <br />
              checked, set up and
              <br />
              carefully prepared for you!
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm tracking-[0.2em]">
              CATALOG
            </h3>

            <ul className="space-y-3 text-sm text-[#D0D0D0]">
              {catalogLinks.map((link) => (
                <li key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm tracking-[0.2em]">
              INFORMATION
            </h3>

            <ul className="space-y-3 text-sm text-[#D0D0D0]">
              {informationLinks.map((link) => (
                <li key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm tracking-[0.2em]">
              CONTACTS
            </h3>

            <p className="text-sm leading-5 text-[#D0D0D0]">
              Saint Petersburg,
              <br />
              Nevsky Prospect,
              <br />
              Kazanskaya St. 6
            </p>

            <p className="mt-5 text-sm text-[#D0D0D0]">
              ☎ +7 812 500-50-50
            </p>

            <p className="mt-6 text-sm leading-5 text-[#D0D0D0]">
              Opening hours:
              <br />
              Mon–Sun, 11:00–20:00
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}