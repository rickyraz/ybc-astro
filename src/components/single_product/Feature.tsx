import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as React from "react";

function Feature() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",

    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
  });
  return (
    <section className="bg-[#00051E] px-8 pb-10">
      <h2 className=" text-2xl font-bold text-center py-8 text-white">Fitur</h2>

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="keen-slider text-white ">
          <div className="keen-slider__slide number-slide1">
            <div className="space-y-3">
              <div className="w-full h-52 bg-blue-gray-100"></div>
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
              <div className="w-full h-52 bg-blue-gray-100"></div>
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
              <div className="w-full h-52 bg-blue-gray-100"></div>
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
              <div className="w-full h-52 bg-blue-gray-100"></div>
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
              <div className="w-full h-52 bg-blue-gray-100"></div>
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
    </section>
  );
}

export default Feature;
