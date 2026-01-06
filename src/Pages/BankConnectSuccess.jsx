// BankConnectSuccess.jsx
import { Check } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";

export default function BankConnectSuccess({
  step = 3,
  totalSteps = 4,
  onBack, 
  onContinue, 
}) {
  const navigate = useNavigate();
  const percent = Math.round((step / totalSteps) * 100);
  const { state } = useLocation();
  console.log(state);

  const handleBack = () => {
    if (typeof onBack === "function") return onBack();
    navigate("/pre-approval/bank");
  };

  const handleContinue = () => {
    if (typeof onContinue === "function") return onContinue();
    navigate("/pre-approval/approved", { state: state });
  };
  console.log(state);
  return (
    <div className="font-popins">
      <div className="relative bg-white p-6">
        {/* Back Button */}
        <div className="absolute top-12 left-6 font-popins">
          <Link to="/">
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Logo centered */}
        <div className="flex justify-center items-center py-8">
          <Logo height="100" width="100" />
        </div>

        {/* Divider */}
        <div className="py-2">
          <hr className="border-gray-300" />
        </div>
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
          </div>

          <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{percent}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
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
              className="flex-1 rounded-md bg-blue-300 px-4 py-3 text-sm font-medium text-white hover:bg-slate-200"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="flex-1 rounded-md bg-[#304f71] px-4 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
