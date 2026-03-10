import terms from "../assets/terms.png";

export default function Policy() {
  return (
    <section className="py-28 font-popins px-4 sm:px-0">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Privacy Policy
      </h2>
      <div className="max-w-[1640px] ml-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Terms content */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Information We Collect
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We collect information you provide directly to us, such as when
                you create an account, apply for pre-approval, or contact us for
                support.
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personal identification information (name, email, phone
                  number)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Financial information (income, assets, employment details)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Property information (purchase price, down payment)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Banking data through secure Plaid integration
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How We Use Your Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and
                improve our services:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Process your mortgage pre-approval application
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Perform AI-powered credit and risk analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Communicate with you about your application
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comply with legal and regulatory requirements
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Security
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information, including encryption, secure data
                transmission, and regular security audits.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="mailto:privacy@preqly.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  privacy@preqly.com
                </a>
              </p>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="lg:sticky lg:top-2 hidden sm:block">
            <div>
              <img
                src={terms}
                alt="Privacy Policy Illustration"
                className="w-full h-3/4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
