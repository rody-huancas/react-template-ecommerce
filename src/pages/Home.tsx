import Slider from "react-slick";
import { Hero, ItemCard } from "@components/index";
import { settingsReactSlickCard } from "@helpers/index";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-tertiary py-5 text-primary text-center uppercase text-2xl font-extrabold font-ace">
        Productos en oferta!!
      </div>

      <div className="w-auto xl:w-6xl mx-auto">
        <div className="slider-container w-full">
          <Slider
            {...settingsReactSlickCard}
            className="w-auto xl:w-6xl px-5 mx-auto flex gap-5 lg:gap-0"
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
