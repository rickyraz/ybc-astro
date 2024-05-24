import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleArrowRight } from "lucide-react";

function ProductSlider({ title, per_view_desk, product_spesific_data }) {
  // 768px
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: per_view_desk,
          spacing: 16,
        },
      },
    },
  });

  console.log(
    "product_spesific_data di dalam product Slider",
    product_spesific_data
  );

  if (!Array.isArray(product_spesific_data)) {
    return <div>Invalid data</div>; // Handles non-array data types gracefully
  }

  return (
    <section className="md:mb-8  mx-4 md:mx-0 mb-4">
      <div className="flex justify-start mb-4 mt-6  max-w-6xl mx-auto ">
        <h2 className="md:text-xl text-lg font-bold text-[#0C1D5A]">{title}</h2>
      </div>
      <div className="max-w-6xl mx-auto hover:cursor-grab">
        <div ref={ref} className="keen-slider">
          {product_spesific_data.map((product, index) => {
            const harga = product.variations[0].price;
            const hargaRupiah = harga.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            });
            return (
              <div key={index} className="keen-slider__slide number-slide1">
                <a key={product.id} href={`/product/${product.slug}`}>
                  <div className="from-white to-gray-50 bg-gradient-to-b px-4 pb-4 mt-12 border rounded-xl relative border-gray-100">
                    <div className="md:px-8 flex justify-center md:mx-0">
                      <img
                        src={product.images[1]?.imageUrl || ""}
                        alt={`product-${product.name}`}
                        width={178}
                        height={178}
                        className="-mt-14"
                      />
                    </div>
                    <div className="space-y-2 -mt-3">
                      <p className="text-[#3D59A4] text-lg font-bold">
                        {product.name}
                      </p>
                      <div className="bg-[#08154B] -skew-x-12 text-sm px-3 py-1 inline-flex">
                        <div className="-skew-x-0 text-white">
                          <span>{hargaRupiah}</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
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
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
