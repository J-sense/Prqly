import benefit1 from "../../assets/benefitOne.png";
import benefit3 from "../../assets/benefitThree.png";
import benefit2 from "../../assets/benefitTwo.png";
import TitleSubtitle from "../../ui/TitleSubtitle";

export const Benefits = () => {
  const benefits = [
    {
      id: 1,
      img: benefit1,
      title: "Instant Decisions",
      subtitle: "Get approved in minutes, not days.",
    },
    {
      id: 2,
      img: benefit2,
      title: "No Paperwork Hassles",
      subtitle: "Complete everything from home, at your convenience.",
    },
    {
      id: 3,
      img: benefit3,
      title: "Bank-Level Security",
      subtitle: "Your data is safe with industry-standard encryption.",
    },
  ];

  return (
    <div className="mt-[60px]">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <TitleSubtitle
          title="What are the benefits?"
          subtitle="Pre-approval makes the process faster"
        />
      </div>

      {/* Benefits Grid */}
      <section className="mt-[100px] ">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-3 text-center">
          {benefits.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.title}
                className="mb-6 h-[80px] w-auto object-contain"
              />
              <h3 className="text-[22px] font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[260px] text-[15px] leading-relaxed text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
