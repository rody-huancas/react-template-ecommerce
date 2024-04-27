import { Link } from "react-router-dom";
import Slider from "react-slick";
import pattern from "@assets/hero.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
   <>
      <div className="slider-container w-full bg-tertiary text-primary py-2">
        <Slider {...settings} className="w-auto lg:w-6xl px-5 mx-auto">
          <Link to={"/"}>Zapatos</Link>
          <Link to={"/"}>Accesorios</Link>
          <Link to={"/"}>Novedades</Link>
          <Link to={"/"}>Diseñadores</Link>
          <Link to={"/"}>Colaboraciones</Link>
          <Link to={"/"}>Ofertas</Link>
        </Slider>
      </div>

      <div className="flex bg-white py-20 lg:py-0 lg:h-[calc(100vh-130px)]">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-5xl font-ace">
              Lo mejor en <span className="text-indigo-600">moda</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <Link to={"/"} className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">
                Ver las ofertas
              </Link>
              <Link to={"/"} className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">Nuevas Tendencias</Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"}}>
          <div className="h-full object-cover" style={{backgroundImage: `url(${pattern})`}}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
   </>
      
  );
};
