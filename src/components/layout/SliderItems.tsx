import Slider from "react-slick";
import { Link } from "react-router-dom";
import { settingsReactSlick } from "@helpers/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderItems = () => {
  return (
    <div className="slider-container w-full bg-tertiary text-primary py-2">
      <Slider {...settingsReactSlick} className="w-auto lg:w-6xl px-5 mx-auto">
        <Link to={"/"}>Zapatos</Link>
        <Link to={"/"}>Accesorios</Link>
        <Link to={"/"}>Novedades</Link>
        <Link to={"/"}>Diseñadores</Link>
        <Link to={"/"}>Colaboraciones</Link>
        <Link to={"/"}>Ofertas</Link>
      </Slider>
    </div>
  );
};
