"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChevronDown,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Logo from "../ui/Logo";
import { useNavigate } from "react-router-dom";

export default function PreApprovalForm() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      propertyZipCode: "",
      propertyAddress: "",
      annualIncome: "",
      purchasePrice: "",
      downPayment: "",
      loanPurpose: "HELOC",
      cashOutAmount: "",
    },
  });

  const [status, setStatus] = useState(null);
  const [progress, setProgress] = useState(50);
  const navigate = useNavigate();
  const loanPurposeOptions = [
    { value: "Purchase", label: "Purchase" },
    { value: "Refinance", label: "Refinance" },
    { value: "HELOC", label: "HELOC" },
    { value: "Cash-Out", label: "Cash-Out Refinance" },
  ];

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setProgress(75);
      navigate("/pre-approval/bank");
    } catch {
      setStatus("error");
    }
  };

  const loanPurpose = watch("loanPurpose");

  const handleDownloadPdf = () => {
    const data = getValues();
    console.log("Downloading PDF with data:", data);
  };

  return (
    <div className="">
      <div className="text-center flex justify-center items-center py-8">
        <Logo height="100" width="100" />
      </div>
      <div className="py-2">
        <hr />
      </div>
      <div className="min-h-screen  font-popins border border-gray-300 rounded-sm p-6 mx-auto max-w-md">
        <div className="max-w-md mx-auto bg-white my-6">
          <div className="px-6 pt-6 pb-4">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span>Step 1 of 4</span>
              <span>50% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-900">
                Get Pre-Approved in 90 Second!
              </h1>
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 text-sm">
                    Saved! Moving to the next step…
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 text-sm">
                    There was an error. Please try again.
                  </span>
                </div>
              )}

              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  {...register("fullName")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  {...register("phoneNumber")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyZipCode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Property Zip Code
                </label>
                <input
                  id="propertyZipCode"
                  {...register("propertyZipCode")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Property Address
                </label>
                <input
                  id="propertyAddress"
                  {...register("propertyAddress")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="annualIncome"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Annual Income
                </label>
                <input
                  id="annualIncome"
                  type="number"
                  step="0.01"
                  {...register("annualIncome")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="purchasePrice"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Purchase Price
                </label>
                <input
                  id="purchasePrice"
                  type="number"
                  step="0.01"
                  {...register("purchasePrice")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="downPayment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Down payment
                </label>
                <input
                  id="downPayment"
                  type="number"
                  step="0.01"
                  {...register("downPayment")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="loanPurpose"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Loan Purpose
                </label>
                <div className="relative">
                  <select
                    id="loanPurpose"
                    {...register("loanPurpose")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                  >
                    {loanPurposeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cashOutAmount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  How much cash out are you looking for
                </label>
                <input
                  id="cashOutAmount"
                  type="number"
                  step="0.01"
                  {...register("cashOutAmount")}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white font-medium py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-8"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  "Continue to AI Analysis"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
