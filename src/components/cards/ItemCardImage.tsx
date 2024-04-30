import { useState } from 'react';
import { IoMdCart, IoMdEye } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const ItemCardImage = () => {
  const [mainImage, setMainImage] = useState("/cards/2.png");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (newImage: string, index: number) => {
    setMainImage(newImage);
    setSelectedIndex(index);
  };

  return (
    <div className="w-80 shadow-xl rounded-xl p-5 overflow-hidden flex flex-col gap-5">
      <div className="bg-gray-200 h-60 flex items-center justify-center relative rounded-xl">
        <img src={mainImage} alt="" className="object-cover rounded-xl" />

        <div className="absolute bottom-4 flex items-center gap-5">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className={`rounded-full p-1 transition-all duration-500 ease-linear ${selectedIndex === index ? 'w-7 bg-gray-700' : 'w-1 bg-gray-700/80'}`}
              onClick={() => handleImageClick(`/cards/${index + 2}.png`, index)}
            >
              {""}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-3">
        {[0, 1, 2].map((index) => (
          <div key={index} onClick={() => handleImageClick(`/cards/${index + 2}.png`, index)}>
            <img
              src={`/cards/${index + 2}.png`}
              alt=""
              className="w-20 h-20 object-cover bg-gray-200 rounded-xl p-1 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <h3 className="text-center text-lg uppercase font-bold text-gray-900/70">
        Zapatillas Adidas
      </h3>

      <div className="w-full flex items-center justify-between text-gray-700">
        <div className="flex items-center gap-3">
          <span className="font-bold">S/169</span>
          <p className="flex items-center gap-2">
            <span className="text-gray-400 font-semibold line-through">
              S/169
            </span>
            <span className="text-green-500 font-bold">20% off</span>
          </p>
        </div>
        <p className="text-gray-400 font-semibold">4 colores</p>
      </div>

      <div className='grid grid-cols-2 gap-5 place-items-center'>
        <Link to={"/detail"} className='w-full bg-tertiary/90 py-2.5 rounded text-primary flex items-center justify-center gap-2 hover:bg-tertiary transition-colors duration-500 ease-linear'>
          <IoMdEye />
          Detalles
        </Link>
        <button className='w-full bg-tertiary/90 py-2.5 rounded text-primary flex items-center justify-center gap-2 hover:bg-tertiary transition-colors duration-500 ease-linear'>
          <IoMdCart />
          Agregar
        </button>
      </div>
    </div>
  );
};
