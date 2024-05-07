import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as React from "react";

function Feature() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div className="bg-[#00051E] px-8 pb-8">
      <h1 className=" text-2xl font-bold text-center py-6 text-white">Fitur</h1>

      <div ref={ref} className="keen-slider text-white">
        <div className="keen-slider__slide number-slide1">
          <div className="space-y-3">
            <div className="w-full h-52 bg-slate-100"></div>
            <h2 className="text-lg font-semibold text-white">
              Yamaha Motorcycle Connect
            </h2>
            <p className="text-sm  text-[#ECECEC]">
              Teknologi modern dan informatif yang menghubungkan antara motor
              dengan smartphone untuk menginformasikan rekomendasi perawatan,
              konsumsi BBM, lokasi parkir terakhir, notifikasi malfungsi, dan
              lain-lain. *Hanya tersedia di Connected/ABS Version.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2">
          <div className="space-y-3">
            <div className="w-full h-52 bg-slate-100"></div>
            <h2 className="text-lg font-semibold text-white">
              Yamaha Motorcycle Connect
            </h2>
            <p className="text-sm  text-[#ECECEC]">
              Teknologi modern dan informatif yang menghubungkan antara motor
              dengan smartphone untuk menginformasikan rekomendasi perawatan,
              konsumsi BBM, lokasi parkir terakhir, notifikasi malfungsi, dan
              lain-lain. *Hanya tersedia di Connected/ABS Version.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3">
          <div className="space-y-3">
            <div className="w-full h-52 bg-slate-100"></div>
            <h2 className="text-lg font-semibold text-white">
              Yamaha Motorcycle Connect
            </h2>
            <p className="text-sm  text-[#ECECEC]">
              Teknologi modern dan informatif yang menghubungkan antara motor
              dengan smartphone untuk menginformasikan rekomendasi perawatan,
              konsumsi BBM, lokasi parkir terakhir, notifikasi malfungsi, dan
              lain-lain. *Hanya tersedia di Connected/ABS Version.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4">
          <div className="space-y-3">
            <div className="w-full h-52 bg-slate-100"></div>
            <h2 className="text-lg font-semibold text-white">
              Yamaha Motorcycle Connect
            </h2>
            <p className="text-sm  text-[#ECECEC]">
              Teknologi modern dan informatif yang menghubungkan antara motor
              dengan smartphone untuk menginformasikan rekomendasi perawatan,
              konsumsi BBM, lokasi parkir terakhir, notifikasi malfungsi, dan
              lain-lain. *Hanya tersedia di Connected/ABS Version.
            </p>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <div className="space-y-3">
            <div className="w-full h-52 bg-slate-100"></div>
            <h2 className="text-lg font-semibold text-white">
              Yamaha Motorcycle Connect
            </h2>
            <p className="text-sm  text-[#ECECEC]">
              Teknologi modern dan informatif yang menghubungkan antara motor
              dengan smartphone untuk menginformasikan rekomendasi perawatan,
              konsumsi BBM, lokasi parkir terakhir, notifikasi malfungsi, dan
              lain-lain. *Hanya tersedia di Connected/ABS Version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
