// src/pages/PlaidLinkPage.jsx
import { Key, Link2 } from "lucide-react";
import { useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { useNavigate, useSearchParams } from "react-router-dom";

// Mock mode toggle - set to true to test without Plaid
const MOCK_MODE = false;

export default function PlaidLinkPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [linkToken, setLinkToken] = useState(searchParams.get("token") || "");
  const [loanId, setLoanId] = useState(searchParams.get("loan_id") || "");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMockPlaidConnect = async () => {
    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockPublicToken = `public-sandbox-${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    setIsProcessing(false);

    navigate(
      `/pre-approval/bank?public_token=${mockPublicToken}&loan_id=${loanId}`
    );
  };

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      console.log("Plaid Success!", { public_token, metadata });

      navigate(
        `/pre-approval/bank?public_token=${public_token}&loan_id=${loanId}`
      );
    },
    onExit: (err, metadata) => {
      console.log("Plaid Exit:", { err, metadata });
      if (err) {
        alert("Plaid connection failed or was cancelled.");
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <Key className="w-10 h-10 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Connect Your Bank Account
          </h1>
          <p className="text-gray-600 mt-2">
            Securely link your bank with Plaid
          </p>
        </div>

        {/* Instructions Box */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-2xl mt-1">📋</div>
            <div className="text-lg font-semibold text-gray-900">
              {MOCK_MODE
                ? "🧪 Mock Mode - Testing Instructions:"
                : "Instructions:"}
            </div>
          </div>
          {MOCK_MODE ? (
            <ol className="mt-4 space-y-2 text-gray-800 text-base leading-relaxed list-decimal list-inside">
              <li>Click the button below to simulate Plaid connection</li>
              <li>No real credentials needed - this is a mock flow</li>
              <li>A fake public token will be generated automatically</li>
              <li>
                You'll be redirected to{" "}
                <code className="bg-gray-200 px-1 rounded">
                  /pre-approval/bank
                </code>{" "}
                page
              </li>
              <li>
                From there, you can call your backend API with the public token
              </li>
              <li>
                <strong>To use real Plaid:</strong> Set{" "}
                <code className="bg-gray-200 px-1 rounded">
                  MOCK_MODE = false
                </code>{" "}
                and get Plaid Sandbox keys from{" "}
                <a
                  href="https://dashboard.plaid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  dashboard.plaid.com
                </a>
              </li>
            </ol>
          ) : (
            <ol className="mt-4 space-y-2 text-gray-800 text-base leading-relaxed list-decimal list-inside">
              <li>
                Your link token has been loaded automatically from the previous
                step
              </li>
              <li>Click "Open Plaid & Connect Bank" to start</li>
              <li>Select your bank and login with your credentials</li>
              
            </ol>
          )}
        </div>

        {/* Link Token Display */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 mb-6">
          <label
            htmlFor="linkToken"
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Link Token:
          </label>

          <input
            id="linkToken"
            type="text"
            value={linkToken}
            onChange={(e) => setLinkToken(e.target.value)}
            className="w-full px-5 py-4 border border-gray-300 rounded-xl text-sm font-mono focus:ring-4 focus:ring-green-500 focus:border-green-500 outline-none transition"
            placeholder="link-production-xxxxxxxxxxxxxxxxxxxx"
          />

          <button
            onClick={MOCK_MODE ? handleMockPlaidConnect : () => open()}
            disabled={
              (!MOCK_MODE && !ready) ||
              (!MOCK_MODE && !linkToken) ||
              isProcessing
            }
            className="mt-6 w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-xl py-6 rounded-xl flex items-center justify-center gap-3 transition shadow-lg hover:shadow-xl"
          >
            <Link2 className="w-7 h-7" />
            {isProcessing
              ? "Processing..."
              : MOCK_MODE
              ? "🧪 Simulate Bank Connection (Mock)"
              : ready
              ? "Open Plaid & Connect Bank"
              : "Loading Plaid..."}
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          🔒 Your data is encrypted and secure with Plaid
        </p>
      </div>
    </div>
  );
}
