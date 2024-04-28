import { FaCartPlus, FaEye } from "react-icons/fa";

export const ItemCard = () => {
  return (
    <div className="pb-5">
      <div className="w-72 mt-20 shadow-lg h-80 rounded-xl overflow-hidden">
        <img src="/hero2.webp" alt="" className="rounded-t-xl" />
        <div className="flex flex-col gap-5 items-center p-2">
          <h4 className="text-lg font-semibold text-tertiary/80">
            Lorem ipsum dolor.
          </h4>
          <p className="text-center">
            Lorem ipsum dolor sit amet, adipisicing elit. Consectetur, iste.
          </p>
          <div className="w-full grid grid-cols-2 gap-5 px-5">
            <button className="flex items-center justify-center gap-2 bg-blue-500 py-2 rounded hover:bg-blue-700 transition-colors duration-500 ease-linear text-primary">
              <FaEye />
              Ver
            </button>
            <button className="flex items-center justify-center gap-2 bg-orange-500 py-2 rounded hover:bg-orange-700 transition-colors duration-500 ease-linear text-primary">
              <FaCartPlus />
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
