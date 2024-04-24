import { RiEditLine, RiHeart3Line, RiLockPasswordLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full font-poppins text-tertiary/80">
      <div className="w-6xl mx-auto flex justify-between items-center text-xs uppercase font-semibold py-2">
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

      <nav className="w-6xl mx-auto flex items-center justify-between py-2 text-tertiary/70">
        <div className="font-semibold uppercase flex items-center gap-3">
          <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Hombre</Link>
          <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Mujer</Link>
          <Link to={"/"} className="text-sm hover:text-tertiary transition-colors duration-300">Niños</Link>
        </div>

        <Link to="/" className="text-4xl uppercase font-extrabold text-tertiary/90 font-ace">Logo</Link>

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
      </nav>
    </header>
  );
};
