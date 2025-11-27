// PlaidConnectForm.jsx
import { Loader2, Shield } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axiosBaseApi from "../axiosApi/baseApi";
import Logo from "../ui/Logo";
export default function PlaidConnectForm() {
  const [searchParams] = useSearchParams();

  const publicToken = searchParams.get("public_token");
  const loanId = searchParams.get("loan_id");
  console.log(publicToken);

  const navigate = useNavigate();

  const verificationItems = [
    "Account balances",
    "Income deposits",
    "Employment verification",
    "Asset verification",
  ];

  const percent = 50;
  const [loading, setLoading] = useState(false);
  const handleBack = () => navigate("/pre-approval");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const connectWithPlaid = async () => {
    setLoading(true);
    try {
      const res = await axiosBaseApi.post("/plaid/connect/", {
        public_token: publicToken,
        loan_application_id: loanId,
      });
      console.log(res);
      if (res.status == 200) {
        navigate("/pre-approval/connected", { state: res?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-popins">
      <div className="relative bg-white p-6">
        <div className="absolute top-12 left-6 font-popins">
          <Link to="/">
            <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out">
              Back to Home
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center py-8">
          <Logo height="100" width="100" />
        </div>

        <div className="py-2">
          <hr className="border-gray-300" />
        </div>
      </div>
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-sm font-poppins">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-center mb-2">
            <h2 className="text-lg font-semibold text-gray-900">Preedy</h2>
          </div>
          <div className="mb-2">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
              <span>Step 2 of 4</span>
              <span>{percent}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* Title and Description */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Connect Your Bank Account
            </h1>
            <p className="text-gray-600">
              Securely verify your income and assets with Plaid
            </p>
          </div>

          {/* Bank-Level Security */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">
                Bank-Level Security
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Plaid uses 256-bit encryption and never stores your login
              credentials. Your data is read-only and secure.
            </p>
          </div>

          {/* What we'll verify */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">What we'll verify</h3>
            <div className="space-y-2">
              {verificationItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sign in form */}
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-[#304f71] hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
              >
                Back
              </button>

              <button
                onClick={connectWithPlaid}
                type="button"
                disabled={loading}
                className={`flex-1 bg-[#00583b] hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-wait" : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect With Plaid"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
