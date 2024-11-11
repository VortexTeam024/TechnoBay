import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  return (
    <main>
      <section className="hero relative w-full h-heroSize overflow-hidden z-40">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {/* First Slide */}
          <SwiperSlide>
            <div className="relative w-full h-screen lg:h-heroSize">
              <div className="text absolute flex flex-col items-center justify-center h-full w-full z-50 px-4 lg:px-0">
                <h1 className="text-3xl lg:text-5xl font-bold text-white text-center leading-snug lg:leading-relaxed mb-2 lg:mb-3">
                  Discover the Latest in Electronics Shop <br className="hidden lg:block" /> Smart, Live Connected!
                </h1>
                <p className="text-base lg:text-lg font-normal text-white text-center max-w-4xl mx-auto">
                  Explore top electronics: smartphones, laptops, smart home devices, and more. Shop now for great deals!
                </p>
              </div>
              <div className="overlay bg-overlay w-full h-full absolute"></div>
              <img src="./assets/Hero1.png" className="w-full h-full object-cover" alt="Hero Slide 1" />
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="relative w-full h-screen lg:h-heroSize">
              <div className="text absolute flex flex-col items-center justify-center h-full w-full z-50 px-4 lg:px-0">
                <h1 className="text-3xl lg:text-5xl font-bold text-white text-center leading-snug lg:leading-relaxed mb-2 lg:mb-3">
                  Your One-Stop Shop for the Latest Electronics
                </h1>
                <p className="text-base lg:text-lg font-normal text-white text-center max-w-4xl mx-auto">
                  Discover the newest gadgets and tech essentials, from premium laptops to smart home innovations. Shop with ease, enjoy unbeatable prices, and elevate your digital lifestyle today!
                </p>
              </div>
              <div className="overlay bg-overlay w-full h-full absolute"></div>
              <img src="./assets/Hero2.png" className="w-full h-full object-cover" alt="Hero Slide 2" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
};

export default Home;
