import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

function ProductSingle({ product_single_data }) {
  // State to manage selected variant and color
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // Helper to extract the current variant and color
  const currentVariant = product_single_data.variations?.[selectedVariantIndex];
  const currentColor = currentVariant?.colors?.[selectedColorIndex];

  // Define animation settings
  // Define animation settings correctly
  const imageAnimation = {
    initial: { opacity: 0, x: 20, transition: { duration: 0.2 } },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <section className="mt-8 space-y-5 relative">
      <div className="flex justify-center py-3">
        <h3 className="text-2xl font-bold text-[#0C1D5A]">Varian & Harga </h3>
      </div>
      {/* nama-nama type variant yg aktif akan memiliki bg-blue-brand dan text-white */}

      <div className="space-x-2 flex justify-center">
        {product_single_data.variations.map((variant, index) => (
          <div
            key={variant.id}
            className={`-skew-x-12 px-3 min-w-36 justify-center  py-1 inline-flex ${
              index === selectedVariantIndex ? "bg-blue-brand" : "bg-[#d1d1d1]"
            } cursor-pointer`}
            onClick={() => setSelectedVariantIndex(index)}
          >
            <div className="-skew-x-0 text-white text-lg font-bold text-center">
              <span>{variant.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center relative z-10">
        {/* gambar product untuk tiap warna di tiap type variant */}

        <motion.img
          key={currentColor?.images?.[0]?.imageUrl}
          src={currentColor?.images?.[0]?.imageUrl}
          alt={`${product_single_data.name}-${currentColor.color}`}
          width={450}
          height={450}
          className="-mb-32"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageAnimation}
        />
      </div>
      <div className=" bg-medium-gray space-y-3 pb-8">
        {/* warna-warna yang diambil dari variant */}
        {/* <div className="flex justify-center pt-24 space-x-4">
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-[#000088] -skew-x-12" />
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-black -skew-x-12" />
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-[#B0B0B0] -skew-x-12 border-4 border-gray-900" />
        </div> */}
        <div className="flex justify-center pt-24 space-x-2 ">
          {/* Display color swatches */}
          {currentVariant.colors.map((color, index) => (
            <div
              key={color.id}
              // w-16 h-5
              className={`  w-[102.95px] h-[32px]  -skew-x-12 cursor-pointer border-4 ${
                index === selectedColorIndex
                  ? "border-gray-900"
                  : "border-gray-900/5"
              }`}
              style={{ backgroundColor: `${color.hexCode}` }}
              onClick={() => setSelectedColorIndex(index)}
            />
          ))}
        </div>
        {/* name - variant2 sesuai yg di klik diatas */}
        <h2 className="flex justify-center  text-2xl md:text-3xl text-blue-brand-light font-bold">
          {product_single_data.name} - {currentVariant.type}
        </h2>
        {/* nama warna ditiap variant yang dipilih */}
        <h4 className=" flex justify-center text-lg text-blue-brand font-semibold">
          {currentColor.color}
        </h4>
        {/* harga produk di tiap variant yang dipilih */}
        <h5 className="flex justify-center text-xl md:text-3xl text-blue-brand font-bold">
          Rp{currentVariant.price.toLocaleString("ID")}
        </h5>
      </div>
    </section>
  );
}

export default ProductSingle;
