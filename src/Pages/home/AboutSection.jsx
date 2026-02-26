import aboutPicture from "../../assets/home.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              About Us
            </h2>
            <p className="text-lg text-gray-500">
              Revolutionizing the Path to Homeownership.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Preqly, we believe the traditional mortgage process is broken.
              Waiting days for a loan officer to review paperwork can mean the
              difference between winning your dream home and losing out to a
              faster bidder.We've built a bridge between sophisticated AI
              technology and the real estate market. By automating the heavy
              lifting of financial verification, we empower buyers to move with
              confidence of cash, backed by the precision of data.You can now
              copy-paste it directly wherever you need it.
            </p>
          </div>
        </div>

        {/* For Real Estate Agents Section */}
        <div className="border-t pt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              For Real Estate Agents
            </h2>
            <p className="text-lg text-gray-500">
              Close Faster with Preqly-Certified Buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Stop wondering if your clients' financing will hold up. Preqly
                provides a transparent, real-time look at buyer purchasing
                power, reducing fall-out rates and speeding up the journey to
                the closing table.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Feel free to copy it directly! Let me know if you need any
                adjustments.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={aboutPicture}
                alt="Real Estate Agents with Preqly"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
