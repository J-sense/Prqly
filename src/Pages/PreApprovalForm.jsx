"use client";

import { jsPDF } from "jspdf"; // Import jsPDF
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Download,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosBaseApi from "../axiosApi/baseApi";
import Logo from "../ui/Logo";

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
  ];

  const onSubmit = async (data) => {
    console.log(data);
    setStatus(null);

    try {
      const res = await axiosBaseApi.post("/loan-application/", {
        full_name: data?.fullName,
        email: data?.email,
        phone_number: data?.phoneNumber,
        property_zip_code: data?.propertyZipCode,
        property_address: data?.propertyAddress,
        annual_income: data?.annualIncome,
        purchase_price: data?.purchasePrice,
        down_payment: data?.downPayment,
        loan_purpose: data?.loanPurpose,
        cash_out_amount: data?.cashOutAmount,
      });
      console.log(res);
      const { plaid_link_token, id } = res.data;
      navigate(`/plaid-link-page?token=${plaid_link_token}&loan_id=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const loanPurpose = watch("loanPurpose");

  const handleDownloadPdf = () => {
    const data = getValues();

    // Create new PDF instance
    const doc = new jsPDF();

    // Add content to PDF
    doc.setFontSize(16);
    doc.text("Pre-Approval Form", 20, 20);

    doc.setFontSize(12);
    doc.text(`Full Name: ${data.fullName}`, 20, 30);
    doc.text(`Email: ${data.email}`, 20, 40);
    doc.text(`Phone Number: ${data.phoneNumber}`, 20, 50);
    doc.text(`Property Zip Code: ${data.propertyZipCode}`, 20, 60);
    doc.text(`Property Address: ${data.propertyAddress}`, 20, 70);
    doc.text(`Annual Income: $${data.annualIncome}`, 20, 80);
    doc.text(`Purchase Price: $${data.purchasePrice}`, 20, 90);
    doc.text(`Down Payment: $${data.downPayment}`, 20, 100);
    doc.text(`Loan Purpose: ${data.loanPurpose}`, 20, 110);
    doc.text(`Cash-Out Amount: $${data.cashOutAmount}`, 20, 120);

    // Save the PDF
    doc.save("pre-approval-form.pdf");
  };

  return (
    <div className="">
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

      {/* Back to Home Button */}

      <div className="min-h-screen font-popins border border-gray-300 rounded-sm p-6 mx-auto max-w-md">
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

              {/* Form Fields */}
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
                className="w-full bg-[#203954] hover:bg-slate-900 disabled:bg-slate-400 text-white font-medium py-4 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-8"
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
