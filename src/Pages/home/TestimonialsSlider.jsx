import { useState } from "react";
import imgOne from "../../assets/firstOne.jpg"
import imgTwo from "../../assets/larah.jpg"
import imgthree from "../../assets/michel.jpg"
const testimonials = [
  {
    id: 1,
    name: "Priya K.",
    title: "Repeat Buyer",
    quote:
      "I Usually Dread Paperwork, But This Platform Made It Effortless. Everything Was Online, Fast, And Accurate!",
    image:imgOne
    
  },
  {
    id: 2,
    name: "Michael R.",
    title: "First-Time Buyer",
    quote:
      "The team guided me through every step of the process. I couldn't have asked for a better experience!",
    image: imgTwo,
  },
  {
    id: 3,
    name: "Sarah L.",
    title: "Investment Property Owner",
    quote:
      "Their expertise in investment properties helped me build a portfolio I never thought possible.",
    image: imgthree,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from clients who made their home-ownership dreams come true.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg border-0">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Image */}
                <div className="">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden ">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {currentTestimonial.name}, {currentTestimonial.title}
                  </h3>
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 z-10 flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 z-10 flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-gray-900"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
