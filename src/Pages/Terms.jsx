import terms from "../assets/terms.png";
export default function Terms() {
  return (
    <section className="py-16 font-popins px-4 md:px-0">
      <div className="max-w-[1640px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Terms of Service
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Terms content */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Acceptance of Terms
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Preqly's services, you accept and agree
                to be bound by the terms and provisions of this agreement. If
                you do not agree to abide by the above, please do not use this
                service.
              </p>
            </div>

            {/* Service Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Description
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Preqly provides AI-powered mortgage pre-approval services. Our
                platform:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Analyzes your financial information using artificial
                  intelligence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provides instant pre-approval estimates
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Connects with licensed mortgage professionals
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Facilitates secure data sharing through our platform
                </li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                User Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Provide accurate and complete information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Maintain the confidentiality of your account
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Use the service only for lawful purposes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Not attempt to circumvent security measures
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Preqly provides preliminary estimates only. Final loan approval
                is subject to underwriting by licensed lenders. We are not
                liable for any decisions made based on our AI analysis or
                pre-approval estimates.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For questions regarding these Terms of Service, contact us at{" "}
                <a
                  href="mailto:legal@preqly.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  legal@preqly.com
                </a>
              </p>
            </div>
          </div>

          {/* Right side - Illustration (hidden on small screens) */}
          <div className="lg:sticky lg:top-2 hidden sm:block">
            <div>
              <img
                src={terms}
                alt="Team working with financial documents and analytics"
                className="w-full h-3/4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
