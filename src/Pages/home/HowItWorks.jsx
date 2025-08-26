// HowItWorks.jsx
import React from "react";
import TitleSubtitle from "../../ui/TitleSubtitle";

// Replace with your actual image imports/paths
import step1 from "../../assets/work1.png";
import step2 from "../../assets/work2.png";
import step3 from "../../assets/work3.png";
import step4 from "../../assets/work4.png";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      step: "Step-1",
      img: step1,
      title: "Enter Your Info",
      desc: "Fill out a quick, secure form with your details.",
    },
    {
      id: 2,
      step: "Step-2",
      img: step2,
      title: "Verify Finances",
      desc: "Connect your bank or upload documents for instant verification.",
    },
    {
      id: 3,
      step: "Step-3",
      img: step3,
      title: "Get Pre-Approval",
      desc: "Receive your mortgage pre-approval letter in seconds.",
    },
    {
      id: 4,
      step: "Step-4",
      img: step4,
      title: "Move Forward",
      desc: "Use your pre-approval to shop confidently for your home.",
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
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
