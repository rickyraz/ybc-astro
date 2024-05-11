import React from "react";

function ProductSingle() {
  return (
    <section className="mt-8 space-y-5 relative">
      <div className="flex justify-center py-3">
        <h3 className="text-2xl font-bold text-[#0C1D5A]">Varian & Harga </h3>
      </div>
      <div className="flex justify-center space-x-4 text-xl">
        <div className="bg-blue-brand -skew-x-12  px-3 py-1 inline-flex">
          <div className="-skew-x-0 text-white font-bold">
            <span>Standard</span>
          </div>
        </div>
        <div className="text-blue-950 bg-[#E3E3E3]  -skew-x-12 px-3 py-1 inline-flex">
          <div className="-skew-x-0  font-bold">
            <span>Connected/ABS</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative z-10">
        <img
          src={"/product/aerox.png"}
          alt="produk-aerox"
          width={450}
          height={450}
          className="-mb-32"
        />
      </div>
      <div className=" bg-medium-gray space-y-3 pb-8">
        <div className="flex justify-center pt-24 space-x-4">
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-[#000088] -skew-x-12" />
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-black -skew-x-12" />
          <div className="w-16 h-5 md:w-[102.95px] md:h-[24.5px] bg-[#B0B0B0] -skew-x-12 border-4 border-gray-900" />
        </div>
        <h2 className="flex justify-center  text-2xl md:text-3xl text-blue-brand-light font-bold">
          Aerox 155 - Standard
        </h2>
        <h4 className=" flex justify-center text-lg text-blue-brand font-semibold">
          Prestige Silver
        </h4>
        <h5 className="flex justify-center text-xl md:text-2xl text-blue-brand font-bold">
          Rp19.000.000
        </h5>
      </div>
    </section>
  );
}

export default ProductSingle;
