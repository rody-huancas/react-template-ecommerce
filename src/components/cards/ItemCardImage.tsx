export const ItemCardImage = () => {
  return (
    <div className="w-80 shadow-xl rounded-xl p-5 overflow-hidden flex flex-col gap-5">
      <div className="bg-gray-200 h-60 flex items-center justify-center relative rounded-xl">
        <img src="/cards/2.png" alt="" className="object-cover rounded-xl" />

        <div className="absolute bottom-4 flex items-center gap-5">
          <span className="w-7 rounded-full bg-gray-700/80 p-1">{""}</span>
          <span className="w-2 rounded-full bg-gray-700/80 p-1">{""}</span>
          <span className="w-2 rounded-full bg-gray-700/80 p-1">{""}</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-3">
        <img
          src="/cards/2.png"
          alt=""
          className="w-20 h-20 object-cover bg-gray-200 rounded-xl p-1 cursor-pointer"
        />
        <img
          src="/cards/3.png"
          alt=""
          className="w-20 h-20 object-cover bg-gray-200 rounded-xl p-1 cursor-pointer"
        />
        <img
          src="/cards/4.png"
          alt=""
          className="w-20 h-20 object-cover bg-gray-200 rounded-xl p-1 cursor-pointer"
        />
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
    </div>
  );
};
