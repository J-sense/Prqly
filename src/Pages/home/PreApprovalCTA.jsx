// PreApprovalCTA.jsx
import { Link } from "react-router-dom";

export default function PreApprovalCTA({
  title = "Ready to Get Pre-Approved?",
  subtitle = "Join thousands who've streamlined their home buying journey with Preqly",
  ctaText = "Start Your Pre-Approval Today",
  ctaTo = "/get-pre-approved",
}) {
  return (
    <section className="w-full bg-[#bdffe9] font-popins">
      {" "}
      {/* soft mint background */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 sm:py-16 text-center">
          <h2 className="font-popins text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            {title}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">{subtitle}</p>

          <div className="mt-7">
            <Link
              to={ctaTo}
              className="inline-flex items-center justify-center rounded-2xl bg-[#1D2D60] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-md shadow-slate-900/10 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
