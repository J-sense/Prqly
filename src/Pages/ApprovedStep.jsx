// ApprovedStep.jsx
import React from "react";
import { Check, Download } from "lucide-react";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

export default function ApprovedStep({
  step = 4,
  totalSteps = 4,
  pdfUrl, // e.g. "/docs/preapproval.pdf" or a signed URL
  fileName = "Preqly-Preapproval.pdf",
  onDownload, // optional: custom download logic
}) {
  const percent = Math.round((step / totalSteps) * 100); // 100 at step 4

  const handleDownload = async () => {
    if (typeof onDownload === "function") return onDownload();

    if (!pdfUrl) {
      console.warn("No pdfUrl or onDownload provided.");
      return;
    }
    // simple client-side download for same-origin or CORS-enabled URLs
    const res = await fetch(pdfUrl);
    const blob = await res.blob();
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(href);
  };

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
        {/* Header / Progress */}
        <div className="px-6 pt-4">
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

        {/* Success card */}
        <div className="px-6 py-8">
          <div
            className="mx-auto w-full rounded-xl bg-gray-100 p-10 text-center shadow-sm ring-1 ring-black/5"
            role="status"
            aria-live="polite"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 shadow-sm">
              <Check className="h-9 w-9 text-emerald-600" />
            </div>
            <p className="text-xl font-semibold text-primary">Approved</p>
          </div>

          {/* Download button */}
          <button
            type="button"
            onClick={handleDownload}
            className="mt-8 w-full rounded-xl bg-[#304f71] px-5 py-4 text-base font-semibold text-white hover:bg-"
          >
            <div className="flex items-center justify-center gap-2">
              <Download className="h-5 w-5" />
              <span>Download PDF File</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
