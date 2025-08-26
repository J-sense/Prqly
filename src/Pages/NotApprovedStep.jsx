// NotApprovedStep.jsx
import React from "react";
import { X } from "lucide-react";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router-dom";

export default function NotApprovedStep({
  step = 4,
  totalSteps = 4,
  reason = "Consider improving debt-to-income ratio or increasing down payment.",
  onNewApplication, // optional: parent handles reset/navigation
}) {
  const navigate = useNavigate();
  const percent = Math.round((step / totalSteps) * 100); // 100%

  const handleNew = () => {
    if (typeof onNewApplication === "function") return onNewApplication();
    // default behavior: clear any saved form and go back to Step 1
    try {
      sessionStorage.removeItem("preapproval_step1");
    } catch {}
    navigate("/pre-approval");
  };

  return (
    <div className="font-poppins">
      {/* Brand */}
      <div className="text-center flex justify-center items-center py-8">
        <Logo height="100" width="100" />
      </div>

      <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Progress */}
        <div className="px-6 pt-4">
          <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{percent}% Complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-emerald-500 transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Result card */}
        <div className="px-6 py-8">
          <div
            className="mx-auto w-full rounded-xl bg-gray-100 p-10 text-center shadow-sm ring-1 ring-black/5"
            role="status"
            aria-live="polite"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 shadow-sm">
              <X className="h-9 w-9 text-rose-600" />
            </div>
            <p className="text-xl font-semibold text-rose-600">Not Approved</p>
            <p className="mt-3 text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
              {reason}
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleNew}
            className="mt-8 w-full rounded-xl bg-slate-700 px-5 py-4 text-base font-semibold text-white hover:bg-slate-800"
          >
            New Application
          </button>
        </div>
      </div>
    </div>
  );
}
