import { jsPDF } from "jspdf";
import { AlertCircle, ChevronDown, Loader2 } from "lucide-react";
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
    setValue, // Added setValue to handle manual formatting
    formState: { errors, isSubmitting },
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
  const [progress, setProgress] = useState(25);
  const navigate = useNavigate();

  const loanPurposeOptions = [
    { value: "Purchase", label: "Purchase" },
    { value: "Refinance", label: "Refinance" },
    { value: "HELOC", label: "HELOC" },
  ];

  // Helper to format as commas while typing
  const handleInputFormatting = (e, fieldName) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = rawValue ? Number(rawValue).toLocaleString() : "";
    setValue(fieldName, formattedValue);
  };

  const onSubmit = async (data) => {
    setStatus(null);

    // API-তে পাঠানোর আগে কমা সরিয়ে ফেলুন (Clean data for backend)
    const cleanData = {
      ...data,
      annual_income: Number(data.annualIncome.replace(/,/g, "")),
      purchase_price: Number(data.purchasePrice.replace(/,/g, "")),
      down_payment: Number(data.downPayment.replace(/,/g, "")),
      cash_out_amount: Number(data.cashOutAmount.replace(/,/g, "")),
    };

    try {
      const res = await axiosBaseApi.post("/loan-application/", {
        full_name: cleanData.fullName,
        email: cleanData.email,
        phone_number: cleanData.phoneNumber,
        property_zip_code: cleanData.propertyZipCode,
        property_address: cleanData.propertyAddress,
        annual_income: cleanData.annual_income,
        purchase_price: cleanData.purchase_price,
        down_payment: cleanData.down_payment,
        loan_purpose: cleanData.loanPurpose,
        cash_out_amount: cleanData.cash_out_amount,
      });
      const { plaid_link_token, id } = res.data;
      navigate(`/plaid-link-page?token=${plaid_link_token}&loan_id=${id}`);
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  const loanPurpose = watch("loanPurpose");

  const handleDownloadPdf = () => {
    const data = getValues();
    const doc = new jsPDF();
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
    doc.save("pre-approval-form.pdf");
  };

  // Reusable Currency Input Component (to keep JSX clean)
  const CurrencyInput = ({
    id,
    label,
    fieldName,
    requiredMsg,
    validation = {},
  }) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          $
        </span>
        <input
          id={id}
          type="text"
          {...register(fieldName, {
            required: requiredMsg,
            onChange: (e) => handleInputFormatting(e, fieldName),
            ...validation,
          })}
          className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      {errors?.[fieldName] && (
        <p className="text-red-500 text-sm mt-1">{errors[fieldName].message}</p>
      )}
    </div>
  );

  return (
    <div className="">
      {/* Header section remains same */}
      <div className="relative bg-white p-1 border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center relative">
          <div className="md:absolute md:left-0">
            <Link to="/">
              <button className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600 text-white font-semibold text-xs sm:text-sm md:text-base py-1.5 px-3 sm:py-2 sm:px-12 rounded-full shadow-md transition-all">
                <span className="xs:hidden">Back</span>
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Logo height="80" width="80" />
          </div>
          <div className="md:hidden w-[60px] sm:w-[100px]"></div>
        </div>
      </div>

      <div className="min-h-screen font-popins border my-7 rounded-md border-gray-300 p-6 mx-4 md:mx-auto max-w-md">
        <div className="max-w-md mx-auto bg-white my-6">
          <div className="px-2 pt-6 pb-4">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span>Step 1 of 4</span>
              <span>25% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-teal-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="px-2 pb-6">
            <h1 className="text-md md:text-xl font-semibold text-gray-900 mb-6">
              Get Pre-Approved in 90 Seconds!
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 text-sm">
                    There was an error. Please try again.
                  </span>
                </div>
              )}

              {/* Standard Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors?.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Valid email required",
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors?.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Zip Code
                </label>
                <input
                  type="number"
                  {...register("propertyZipCode", {
                    required: "Zip code is required",
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors?.propertyZipCode && (
                  <p className="text-red-500 text-sm">
                    {errors.propertyZipCode.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Address
                </label>
                <input
                  {...register("propertyAddress", {
                    required: "Property address is required",
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                {errors?.propertyAddress && (
                  <p className="text-red-500 text-sm">
                    {errors.propertyAddress.message}
                  </p>
                )}
              </div>

              {/* Currency Fields (Formatted) */}
              <CurrencyInput
                id="annualIncome"
                label="Annual Income"
                fieldName="annualIncome"
                requiredMsg="Annual income is required"
              />
              <CurrencyInput
                id="purchasePrice"
                label="Purchase Price"
                fieldName="purchasePrice"
                requiredMsg="Purchase price is required"
              />
              <CurrencyInput
                id="downPayment"
                label="Down Payment"
                fieldName="downPayment"
                requiredMsg="Down payment is required"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Purpose
                </label>
                <div className="relative">
                  <select
                    {...register("loanPurpose")}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                  >
                    {loanPurposeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <CurrencyInput
                id="cashOutAmount"
                label="How much cash out are you looking for"
                fieldName="cashOutAmount"
                validation={{
                  validate: (val) =>
                    loanPurpose === "HELOC"
                      ? (val !== "" && val !== undefined) ||
                        "Required for HELOC"
                      : true,
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#203954] hover:bg-slate-900 disabled:bg-slate-400 text-white font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-8"
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
