import React, { useRef } from 'react';
import Slider from 'react-slick';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../shared/SectionHeading';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center py-8">
        {/* Large Quote Mark */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-playfair text-electric-violet/30 leading-none">
            "
          </span>
        </div>

        {/* Quote */}
        <blockquote className="font-playfair italic text-2xl md:text-3xl lg:text-4xl text-off-white leading-relaxed mb-10">
          {testimonial.quote}
        </blockquote>

        {/* Rating */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Author */}
        <div>
          <div className="font-space font-bold text-lg text-off-white">
            {testimonial.author}
          </div>
          <div className="font-inter text-warm-gray">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomArrow = ({ direction, onClick }) => {
  const Icon = direction === 'prev' ? HiChevronLeft : HiChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-electric-violet flex items-center justify-center text-electric-violet hover:bg-electric-violet hover:text-off-white transition-all duration-300 ${
        direction === 'prev' ? 'left-0 md:left-4' : 'right-0 md:right-4'
      }`}
      aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

const TestimonialsSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <section
      className="py-24 lg:py-32 bg-jet-black relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-violet/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          tag="TESTIMONIALS"
          title="What Clients Say"
          alignment="center"
        />

        {/* Slider */}
        <div className="relative mt-12 px-8 md:px-16">
          <CustomArrow
            direction="prev"
            onClick={() => sliderRef.current?.slickPrev()}
          />

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>

          <CustomArrow
            direction="next"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
