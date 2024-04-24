import { Link } from "react-router-dom";
import pattern from "@assets/hero.webp"

export const Hero = () => {
  return (
    <>
      <div className="bg-tertiary py-3 text-primary/80">
        <div className="w-6xl mx-auto flex justify-center gap-5 text-xs uppercase font-semibold">
          <Link to={"/"} className="hover:text-primary transition-colors duration-300">Zapatos</Link>
          <Link to={"/"} className="hover:text-primary transition-colors duration-300">Accesorios</Link>
          <Link to={"/"} className="hover:text-primary transition-colors duration-300">Novedades</Link>
          <Link to={"/"} className="hover:text-primary transition-colors duration-300">Diseñadores</Link>
          <Link to={"/"} className="hover:text-primary transition-colors duration-300">Colaboraciones</Link>
        </div>
      </div>

      <div className="w-full">
        <img src={pattern} alt="Imagen slider" />
      </div>
    </>
  );
};
