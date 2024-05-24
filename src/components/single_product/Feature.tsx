import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import * as React from "react";

function Feature({ feature_data }) {
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
          {feature_data.map((feature) => (
            <div key={feature.id} className="keen-slider__slide">
              <div className="space-y-3">
                <img
                  src={feature.featureImage}
                  alt={feature.title}
                  className="w-full h-52 object-cover"
                />
                <h2 className="text-lg font-semibold text-white">
                  {feature.title}
                </h2>
                <p className="text-sm text-[#ECECEC]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
