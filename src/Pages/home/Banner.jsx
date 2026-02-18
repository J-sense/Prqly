// HeroBanner.jsx
import { Link } from "react-router-dom";
import bg from "../../assets/banner.png";

export default function HeroBanner({
  title = "The Future Of Home Buying is Instant.",
  subtitle = "Preqly leverages AI to deliver rock-solid mortgage pre-approvals in minutes, not days. Give your offer the competitive edge it deserves.",
  ctaText = "Get Pre-Approved Now",
  ctaTo = "/get-pre-approved",
}) {
  return (
    <section className="relative isolate overflow-hidden font-poppins" id="/">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/45 to-secondary/35 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[60vh] items-center justify-center py-16 sm:py-24 md:min-h-[70vh] lg:min-h-[80vh]">
          <div className="text-center">
            <h1 className="font-popins text-[46px] font-bold  sm:text-4xl md:text-5xl lg:text-6xl font-poppins tracking-tight text-white">
              {title}
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base sm:text-lg md:text-[22px] text-[#b8b9cd] font-poppins ">
              {subtitle}
            </p>

            {/* CTA (pill style like your design) */}
            <div className="mt-10">
              <Link
                to={ctaTo}
                className="inline-flex items-center text-black justify-center rounded-2xl bg-[#dbecff] px-6 py-3 text-sm  font-poppins  shadow-lg ring-1 ring-white/60 backdrop-blur hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:px-8 md:py-4 md:text-base "
              >
                {ctaText}
              </Link>

              {/*
              
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
