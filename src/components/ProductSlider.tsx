import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleArrowRight } from "lucide-react";

function ProductSlider({ title }) {
  // 768px
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
    },
  });
  return (
    <section className="md:mb-8  mx-4 md:mx-0 mb-4">
      <div className="flex justify-start mb-4 mt-6  max-w-6xl mx-auto ">
        <h2 className="md:text-xl text-lg font-bold text-[#0C1D5A]">{title}</h2>
      </div>
      <div className="max-w-6xl mx-auto hover:cursor-grab">
        <div ref={ref} className="keen-slider ">
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" from-white to-gray-50 bg-gradient-to-b  px-4 pb-4 mt-12 border  rounded-xl relative  border-gray-100  ">
              <div className="md:px-8 flex justify-center md:mx-0">
                <img
                  src="/product/aerox.png"
                  alt="produk-aerox"
                  width={178}
                  height={178}
                  className="-mt-14"
                />
              </div>
              <div className="space-y-2 -mt-3">
                <p className="text-[#3D59A4] text-lg font-bold">Aerox 155</p>
                <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                  <div className="-skew-x-0 text-white">
                    <span>RP. 2.550.000</span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex space-x-2">
                    <img
                      src="/brand/yamaha.png"
                      width={50}
                      height={24}
                      alt="Yamaha logo"
                    />
                    <img
                      src="/brand/bahana.png"
                      width={50}
                      height={24}
                      alt="Bahana logo"
                    />
                  </div>
                  <CircleArrowRight className="text-blue-950/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;