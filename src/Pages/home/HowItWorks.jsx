// HowItWorks.jsx
import TitleSubtitle from "../../ui/TitleSubtitle";

// Replace with your actual image imports/paths
import step1 from "../../assets/work1.png";
import step2 from "../../assets/work2.png";
import step3 from "../../assets/work3.png";


export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      step: "Step",
      img: step1,
      title: "Connect Data",
      desc: "Securely link your financial accounts in seconds.",
    },
    {
      id: 2,
      step: "Action",
      img: step2,
      title: "AI Analysis",
      desc: "Our engine verifies income, assets, and credit instantly.",
    },
    {
      id: 3,
      step: "Results",
      img: step3,
      title: "Preqly Certified",
      desc: "Receive a verified pre-approval letter ready for any offer.",
    },
    
  ];

  return (
    <section className="mt-[134px]" id="how-it-works">
      {/* Heading */}
      <div className="text-center mb-10">
        <TitleSubtitle
          title="How It Works"
          subtitle={`"Your path to homeownership made clear—quick steps, no confusion."`}
        />
      </div>

      {/* Steps Grid */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0">
        {steps.map((s) => (
          <div
            key={s.id}
            className="rounded-xl bg-[#eafff8] p-6 shadow-lg ring-1 ring-black/5 flex items-center justify-center flex-col hover:-translate-y-0.5 transition"
          >
            <img
              src={s.img}
              alt={s.title}
              className="h-12 w-12 object-contain mb-5"
            />

            <p className="text-xs font-medium text-gray-500">{s.step}</p>

            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {s.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-center text-gray-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
