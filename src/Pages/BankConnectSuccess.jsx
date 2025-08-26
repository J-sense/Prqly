// BankConnectSuccess.jsx
import React from "react";
import { Check, Download } from "lucide-react";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router-dom";

export default function BankConnectSuccess({
  step = 3,
  totalSteps = 4,
  onBack, // optional: parent controls back
  onContinue, // optional: parent controls continue
}) {
  const navigate = useNavigate();
  const percent = Math.round((step / totalSteps) * 100); // or: const percent = 75;

  const handleBack = () => {
    if (typeof onBack === "function") return onBack();
    navigate("/pre-approval/bank");
  };

  const handleContinue = () => {
    if (typeof onContinue === "function") return onContinue();
    navigate("/pre-approval/approved");
  };

  return (
    <div className="font-popins">
      <div className="text-center flex justify-center items-center py-8">
        <Logo height="100" width="100" />
      </div>
      <div className="py-2">
        <hr />
      </div>

      <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white shadow-sm mt-20">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600">
                <span className="text-xs font-bold text-white">P</span>
              </div>
              <span className="font-semibold text-gray-900">Preqly™</span>
            </div>
            <Download className="h-5 w-5 text-gray-400" />
          </div>

          <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{percent}% Complete</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          <h1 className="text-center text-xl font-bold text-gray-900">
            Connect Your Bank Account
          </h1>
          <p className="mt-2 text-center text-gray-600">
            Securely verify your income and assets with Plaid
          </p>

          {/* Success card */}
          <div
            className="mx-auto mt-6 w-full rounded-xl bg-gray-100 p-6 text-center shadow-sm ring-1 ring-black/5"
            role="status"
            aria-live="polite"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 shadow-sm">
              <Check className="h-7 w-7 text-emerald-600" />
            </div>

            <p className="mt-4 text-lg font-semibold text-emerald-600">
              Successfully Connected!
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Your financial data has been securely verified
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 rounded-md bg-secondary px-4 py-3 text-sm font-medium text-white hover:bg-slate-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="flex-1 rounded-md bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
