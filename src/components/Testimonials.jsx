import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

const testimonials = [
  {
    name: "Ayesha Khan",
    photoURL: "https://i.postimg.cc/MpYjjfS5/L-4-page-0001.jpg",
    quote: "FoodCircle helped me share extra meals with neighbors. It’s heartwarming to see food not going to waste!",
    rating: 5,
  },
  {
    name: "Kathy Winslat",
    photoURL: "https://i.postimg.cc/P5HwxzBN/L1-page-0001.jpg ",
    quote: "I received a meal when I needed it the most. Thanks to this amazing community!",
    rating: 4,
  },
  {
    name: "Fatima Ali",
    photoURL: "https://i.postimg.cc/xjWHrS5v/L2-page-0001.jpg ",
    quote: "The platform makes it so easy to help others and reduce food waste. I love it!",
    rating: 5,
  },
  {
    name: "Daniel Fernandes",
    photoURL: "https://i.postimg.cc/9FW87Z3g/G1-page-0001.jpg ",
    quote: "FoodCircle connects people in a beautiful way. Sharing food has never felt this meaningful.",
    rating: 4,
  },
  {
    name: "Sana Mir",
    photoURL: "https://i.postimg.cc/xTMmnFpW/L3-page-0001.jpg",
    quote: "As a student on a tight budget, receiving a free meal through FoodCircle was a huge relief.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    photoURL: "https://i.postimg.cc/YSbqt1Hc/G2-page-0001.jpg",
    quote: "It's a simple idea with a big impact. I’ve met kind people and helped reduce food waste too!",
    rating: 4,
  },
  {
    name: "David Rechard",
    photoURL: "https://i.postimg.cc/MGWpk9gb/G4-page-0001.jpg ",
    quote: "Every time I donate through FoodCircle, I feel like I’m giving back to the planet and the community.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { theme } = useContext(ThemeContext); // consume theme

  return (
    <section
      className={`py-12 transition-all duration-500 ${
        theme === 'light'
          ? 'bg-gradient-to-r from-lime-100 via-amber-100 to-emerald-100 text-gray-800'
          : 'bg-gradient-to-r from-lime-800 via-amber-900 to-emerald-900 text-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 transition-all duration-500">
          What Our Users Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 shadow-sm flex flex-col items-center h-full justify-between transition-all duration-500 ${
                  theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-800 text-gray-200'
                }`}
              >
                <div className="relative mb-4 w-full">
                  <p className="text-sm italic before:content-['“'] after:content-['”'] transition-all duration-500">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <img
                    src={testimonial.photoURL}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mb-2 transition-all duration-500"
                  />
                  <p className="text-base font-semibold transition-all duration-500">{testimonial.name}</p>
                  <div className="flex mt-1 text-amber-500 text-xl">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
