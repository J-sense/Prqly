const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            About Preqly
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Revolutionizing the Path to{" "}
            <span className="text-blue-600">Homeownership</span>
          </h3>
          <div className="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Element: Image with overlapping cards */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb81?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Architecture"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* AI Highlight Card */}
            <div className="absolute -top-8 -right-4 md:right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-[200px]">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-bold text-gray-800">
                  Instant Verification
                </p>
                <p className="text-xs text-gray-500 mt-1">Powered by AI</p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute -bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-700">
                "Move with the confidence of cash."
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="prose prose-lg text-gray-600">
              <p className="leading-relaxed">
                At Preqly, we believe the traditional mortgage process is
                broken. Waiting days for a loan officer to review paperwork can
                mean the difference between winning your dream home and losing
                out to a faster bidder.
              </p>

              <div className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm my-8">
                <p className="italic text-gray-800 font-medium text-xl">
                  "We’ve built a bridge between sophisticated AI technology and
                  the real estate market."
                </p>
              </div>

              <p className="leading-relaxed">
                By automating the heavy lifting of financial verification, we
                empower buyers to move with the{" "}
                <span className="text-gray-900 font-bold">
                  confidence of cash
                </span>
                , backed by the{" "}
                <span className="text-gray-900 font-bold">
                  precision of data.
                </span>
              </p>
            </div>

            {/* Feature list for extra clarity */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Fast Approvals
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Data Precision
                </span>
              </div>
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-xl transform transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Get Pre-Approved Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
