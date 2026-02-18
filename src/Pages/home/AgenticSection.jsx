const RealEstateAgents = () => {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Close Faster with{" "}
          <span className="text-blue-600">Preqly-Certified</span> Buyers
        </h2>

        {/* Body Text */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Stop wondering if your clients' financing will hold up. Preqly
          provides a transparent, real-time look at buyer purchasing power,
          reducing fall-out rates and speeding up the journey to the closing
          table.
        </p>

        {/* Simple CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition duration-300">
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default RealEstateAgents;
