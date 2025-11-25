// ApprovedStep.jsx
import { Check, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import axiosBaseApi from "../axiosApi/baseApi";
import Logo from "../ui/Logo";

export default function ApprovedStep({ step = 4, totalSteps = 4 }) {
  const { state } = useLocation();
  const percent = Math.round((step / totalSteps) * 100);
  console.log(state);

  const dawonLoadpdf = async () => {
    try {
      const payload = {
        loan_application_id: state?.loan_application?.id,
        loan_application: {
          id: state?.loan_application?.id,
          full_name: state?.loan_application?.full_name,
          email: state?.loan_application?.email,
          phone_number: state?.loan_application?.phone_number,
          property_zip_code: state?.loan_application?.property_zip_code,
          property_address: state?.loan_application?.property_address,
          annual_income: state?.loan_application?.annual_income,
          purchase_price: state?.loan_application?.purchase_price,
          down_payment: state?.loan_application?.down_payment,
          loan_purpose: state?.loan_application?.loan_purpose,
          cash_out_amount: state?.loan_application?.cash_out_amount,
        },
        bank_accounts: [
          {
            account_id: state?.bank_accounts[0].account_id,
            name: state?.bank_accounts[0].name,
            official_name: state?.bank_accounts[0].official_name,
            type: state?.bank_accounts[0].type,
            subtype: state?.bank_accounts[0].subtype,
            current_balance: state?.bank_accounts[0].current_balance,
            available_balance: state?.bank_accounts[0].available_balance,
            currency: state?.bank_accounts[0].currency,
          },
        ],
        total_balance: state?.total_balance,
        plaid_connected: state?.plaid_connected,
        message: state?.message,
      };
      console.log(payload);
      const res = await axiosBaseApi.post("/generate-pdf-from-data/", payload);

      // Check if the response is as expected
      if (res.status === 200) {
        console.log("PDF generated successfully:", res.data);

        // If it's a file download, you can trigger the download here
        const fileBlob = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(fileBlob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "generated-file.pdf"; // Optional: Set file name
        link.click();
      } else {
        console.error("Failed to generate PDF:", res);
      }
    } catch (error) {
      console.log(error);
    }
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
            onClick={dawonLoadpdf}
            className="mt-8 w-full rounded-xl bg-[#304f71] px-5 py-4 text-base font-semibold text-white hover:bg-[#243d57] transition-colors"
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
