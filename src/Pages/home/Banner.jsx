import { Link } from "react-router-dom";
import image from "../../assets/banner2.jpg";
export default function HeroBanner() {
  return (
    <section
      className="relative w-full -mt-32 h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Content Container */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl md:text-6xl lg:text-[46px] font-bold tracking-tight mb-6 text-yellow-400">
                THE FUTURE OF HOME
              </h1>
              <h1 className="text-3xl md:text-6xl lg:text-[46px] font-bold tracking-tight mb-6 text-yellow-400">
                BUYING IS INSTANT
              </h1>

              {/* Underline */}
              <div className="h-1 w-24 bg-yellow-400" />
            </div>

            <p className="text-lg md:text-xl text-gray-200 w-4xl leading-relaxed">
              Preqly leverages AI to deliver rock-solid mortgage pre-approvals
              in minutes, not days. Give your offer the competitive edge it
              deserves.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/pre-approval"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-yellow-400 text-slate-900 font-bold text-base hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Pre-approved Now
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-yellow-400 text-yellow-400 font-bold text-base hover:bg-yellow-400/10 transition-all duration-200"
              >
                How it Works
              </a>
            </div>
          </div>

          {/* Right Content - Neon House (hidden on mobile, visible on lg) */}
          <div className="hidden lg:flex items-center justify-end" />
        </div>
      </div>
    </section>
  );
}
