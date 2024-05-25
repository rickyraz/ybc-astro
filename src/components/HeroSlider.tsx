import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

function HeroSlider({ loop_status, hero_data, position_hero }) {
  const hero_Detail = hero_data[0];

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      loop: loop_status,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section ref={sliderRef} className="keen-slider">
      {position_hero === "product_detail" && (
        <div className="keen-slider__slide">
          <img
            src={hero_Detail.imageUrl}
            alt="Benner 1"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            decoding="async"
            loading="lazy"
          />
        </div>
      )}

      {position_hero !== "product_detail" &&
        hero_data.map(
          (
            item: { imageUrl: string; product: { slug: any } },
            index: React.Key
          ) => (
            <div key={index} className="keen-slider__slide">
              <a href={`/product/${item.product.slug}`} target="_blank">
                <img
                  src={item.imageUrl}
                  alt={`Banner ${item.product.slug}`}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  decoding="async"
                  loading="lazy"
                />
              </a>
            </div>
          )
        )}

      {/* <div className="keen-slider__slide">
        <img
          src="/banner/hero-3.jpg"
          alt="Benner 3"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="keen-slider__slide">
        <img
          src="/banner/hero-4.jpg"
          alt="Benner 4"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          decoding="async"
          loading="lazy"
        />
      </div> */}
    </section>
  );
}

export default HeroSlider;
