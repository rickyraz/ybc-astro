import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as React from "react";

function ArticleHome() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 16,
    },
  });
  return (
    <div className="bg-blue-smooth-light px-8 pb-8 ">
      <div className="max-w-6xl mx-auto justify-start">
        <h2 className=" text-2xl font-bold  py-6 text-[#0C1D5A]">INFO</h2>
      </div>

      <div ref={ref} className="keen-slider text-[#112769]  max-w-6xl mx-auto">
        <div className="keen-slider__slide number-slide1">
          <div className="space-y-3">
            <div className="w-full h-40 bg-[#6888D2]"></div>
            <h2 className="text-lg font-semibold ">
              Peluncuran Model Motor Terbaru di Dealer Moto XYZ Memikat Para
              Penggemar Otomotif
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="space-y-3">
            <div className="w-full h-40 bg-[#6888D2]"></div>
            <h2 className="text-lg font-semibold ">
              Dealer Moto ABC Memperkenalkan Skema Kredit Menarik untuk
              Pembelian Motor Baru
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="space-y-3">
            <div className="w-full h-40 bg-[#6888D2]"></div>
            <h2 className="text-lg font-semibold ">
              Kemitraan Dealer Moto 123 dengan Brand Terkemuka Bawa Inovasi
              Layanan Purnajual
            </h2>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="space-y-3">
            <div className="w-full h-40 bg-[#6888D2]"></div>
            <h2 className="text-lg font-semibold ">
              Dealer Moto QRS Mengadakan Event Safety Riding Gratis untuk
              Komunitas Motor Lokal
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleHome;
