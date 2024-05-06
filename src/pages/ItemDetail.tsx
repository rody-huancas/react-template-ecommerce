import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";

const ItemDetail = () => {
  const [selectedImage, setSelectedImage] = useState("/cards/1.png");

  return (
    <section className="w-full flex flex-col xl:w-6xl mx-auto my-10 px-5">
      <h1 className="text-2xl md:text-5xl font-extrabold text-tertiary/90 uppercase font-poppins">
        Detalles de Producto
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 mt-10 ">
        <div className="w-full md:w-1/2">
          {selectedImage && (
            <div className="w-full h-80 shadow-lg flex items-center justify-center rounded-xl">
              <img src={selectedImage} alt="Producto" className="object-cover" />
            </div>
          )}

          <div className="grid grid-cols-3 place-items-center gap-5 mt-10">
            <img
              src="/cards/1.png"
              alt="Producto"
              className="p-2 bg-gray-200 h-24 sm:h-32 w-full object-cover cursor-pointer rounded-xl"
              onClick={() => setSelectedImage("/cards/1.png")}
            />
            <img
              src="/cards/2.png"
              alt="Producto"
              className="p-2 bg-gray-200 h-24 sm:h-32 w-full object-cover cursor-pointer rounded-xl"
              onClick={() => setSelectedImage("/cards/2.png")}
            />
            <img
              src="/cards/3.png"
              alt="Producto"
              className="p-2 bg-gray-200/50 h-24 sm:h-32 w-full object-cover cursor-pointer rounded-xl"
              onClick={() => setSelectedImage("/cards/3.png")}
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-2xl font-black uppercase text-gray-900/90">Zapatilla Adidas R19</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            recusandae obcaecati ipsam in natus blanditiis quos minus dolorem
            totam consectetur, modi necessitatibus maxime quia repudiandae, ea
            quasi, debitis mollitia perferendis?
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase text-xl text-gray-800/90">Sexo</span>
            <span className="flex items-center gap-3 font-medium text-tertiary/80 ml-5">
              <FaRegCheckCircle />
              Hombre
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase text-xl text-gray-800/90">Tallas</span>
            <div className="grid grid-cols-6 place-items-center gap-5 rounded">
              <span className="bg-tertiary w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">39</span>
              <span className="bg-blue-600 w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">40</span>
              <span className="bg-tertiary w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">41</span>
              <span className="bg-tertiary w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">42</span>
              <span className="bg-tertiary w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">43</span>
              <span className="bg-tertiary w-full h-12 text-primary flex items-center justify-center font-medium cursor-pointer ">44</span>
            </div>
          </div>

          <button className='w-full bg-tertiary/95 py-4 rounded text-primary flex items-center justify-center gap-2 hover:bg-tertiary transition-colors duration-500 ease-linear uppercase font-semibold text-lg mt-5'>
            <IoMdCart />
            Agregar al carrito
          </button>
        </div>

      </div>
    </section>
  );
};

export default ItemDetail;
