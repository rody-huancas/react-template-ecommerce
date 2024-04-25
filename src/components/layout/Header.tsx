import classNames from "classnames";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiEditLine, RiHeart3Line, RiLockPasswordLine, RiMenu2Line, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import "./header.css"
import { MdOutlineClose } from "react-icons/md";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false)

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

  const onShowMenu = () => {
    setShowMenu(!showMenu);
  }

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

      <nav className={classNames("nav__responsive transition-all duration-300 ease-out", {
        "nav__scrolled": scrollPosition > 30,
        "top-0": showMenu,
        "-top-[100vh] md:top-0": !showMenu
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

      <button className="absolute bottom-5 right-5 bg-tertiary/90 text-white p-3 box-content rounded-full md:hidden" onClick={onShowMenu}>
        {
          !showMenu ? <RiMenu2Line size={25} /> : <MdOutlineClose size={25} />
        }
      </button>
    </header>
  );
};
