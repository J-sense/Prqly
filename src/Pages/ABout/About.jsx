import img from "../../assets/house.png";
import PreApprovalCTA from "../home/PreApprovalCTA";
export const About = () => {
 
  const stats = [
    { value: "90s", note: "Average approval time" },
    { value: "0", note: "Documents required" },
    { value: "100%", note: "Digital process" },
    { value: "24/7", note: "Available online" },
  ];
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-popins">
        <section className="bg-white">
          <div className=" px-4 sm:px-6 py-12 sm:py-16">
            {/* Top: About + Stats */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* About text */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                  ABOUT PREQLY
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed max-w-prose">
                  We’re revolutionizing the mortgage industry with AI-powered
                  pre-approvals that give homebuyers the speed and certainty
                  they need in today’s competitive market. Pre-approvals that
                  give buyers the power of an immediate 'yes' and the confidence
                  to close without compromise.
                </p>
              </div>

              {/* Stats 2×2 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((s, i) => (
                  <div
                    key={s.note}
                    className={[
                      // base tile
                      "relative  bg-white ring-1 ring-black/10",
                      "flex flex-col items-center justify-center text-center",
                      "h-[140px] sm:h-[160px] px-6",
                      // only the first card pops a bit
                      i === 0
                        ? "shadow-xl shadow-black/10 -translate-y-0.5"
                        : "shadow-none",
                    ].join(" ")}
                  >
                    <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                      {s.value}
                    </div>
                    <p className="mt-2 text-[13px] sm:text-sm leading-snug text-gray-500">
                      {s.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Card */}
            <div className="mt-10 sm:mt-12 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-5 sm:p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
                {/* Copy */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    OUR MISSION
                  </h3>
                  <p className="mt-3 text-gray-600  tracking-wider leading-loose">
                    Traditional mortgage pre-approvals are slow, require
                    mountains of paperwork, and often leave buyers uncertain
                    about their purchasing power. Preqly changes that. Our
                    AI-powered platform delivers real, actionable pre-approval
                    letters in under 90 seconds, giving you the confidence to
                    make competitive offers.
                  </p>
                </div>

                {/* Image + caption */}
                <div className="md:pl-4">
                  <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5">
                    <img
                      src={img}
                      alt="Modern home exterior"
                      className="h-40 w-full object-cover sm:h-44 md:h-48"
                    />
                  </div>
                  <p className="mt-2 text-xs text-black font-semibold ">
                    Making home-ownership Accessible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-16 px-4 bg-white">
          <div className="">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-left">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-6xl mb-4">{member.avatar}</div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-gray-600 font-medium mb-4">
                    {member.title}
                  </p>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
      <div className="mb-5">
        <PreApprovalCTA />
      </div>
    </>
  );
};
