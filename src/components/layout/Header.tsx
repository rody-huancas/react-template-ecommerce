import classNames from "classnames";
import { useEffect, useState } from "react";
import { RiEditLine, RiHeart3Line, RiLockPasswordLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./header.css"

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full font-poppins text-tertiary/80">
      <div className="lg:w-6xl px-10 lg:px-0 mx-auto flex justify-between items-center text-xs uppercase font-semibold py-2">
        <Link to={"/"} className="flex items-center gap-2">
          <span>Registrarse</span>
          <RiEditLine />
        </Link>
        <Link to={"/"} className="flex items-center gap-2">
          <span>Iniciar Sesión</span>
          <RiLockPasswordLine />
        </Link>
      </div>

      <hr className="border border-gray-900/30" />

      <nav className={classNames("md:w-full md:mx-auto md:flex md:justify-center md:bg-white nav__responsive", {
        "nav__scrolled": scrollPosition > 30
      })}>
        <div className="text-tertiary/70 items__menu">
          <Link to="/" className="text-4xl uppercase font-extrabold text-tertiary/90 font-ace">Logo</Link>

          <div className="items">
            <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Hombre</Link>
            <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Mujer</Link>
            <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Niños</Link>
          </div>
                  
          <div className="flex items-center gap-4">
            <button>
              <RiHeart3Line className="hover:text-tertiary transition-colors duration-300" />
            </button>
            <button>
              <RiShoppingCartLine className="hover:text-tertiary transition-colors duration-300" />
            </button>
            <button>
              <RiSearchLine className="hover:text-tertiary transition-colors duration-300" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
