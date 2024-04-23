import { RiEditLine, RiHeart3Line, RiLockPasswordLine, RiSearchLine, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full py-5 px-10 font-poppins text-tertiary/80">
      <div className="w-full flex justify-between items-center text-xs uppercase font-semibold py-1">
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

      <nav className="w-full flex items-center justify-between py-6">
        <div className="font-semibold uppercase flex items-center gap-3">
          <Link to={"/"} className="text-sm">Hombre</Link>
          <Link to={"/"} className="text-sm">Mujer</Link>
          <Link to={"/"} className="text-sm">Niños</Link>
        </div>

        <Link to="/" className="text-4xl uppercase font-extrabold text-tertiary/90">Logo</Link>

        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <RiHeart3Line />
          </Link>
          <Link to={"/"}>
            <RiShoppingCartLine />
          </Link>
          <Link to={"/"}>
            <RiSearchLine />
          </Link>
        </div>
      </nav>
    </header>
  );
};
