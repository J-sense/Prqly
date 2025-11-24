"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosBaseApi from "../../axiosApi/baseApi";

export default function ContactMethods() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      console.log(data);
      const res = await axiosBaseApi.post("/contact/", data);
      console.log(res);
      if (res.status === 201) {
        setStatus("success");
      }

      reset(); // clears inputs
    } catch (e) {
      console.log(e);
      setStatus("error");
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      contact: "hello@company.com",
      description: "Get in touch for general inquiries",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      contact: "1-800-PREQLY",
      description: "Mon–Fri 9AM–6PM EST",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Live Chat",
      contact: "Available 24/7",
      description: "Instant support on our website",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Office",
      contact: "San Francisco, CA",
      description: "Headquarters in the heart of fintech",
    },
  ];

  const baseInput =
    "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors";

  return (
    <section className="py-16 px-4 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with Our Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help you every step of your mortgage journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((m, i) => (
              <div
                key={i}
                className="bg-[#43678e] text-white p-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">{m.icon}</div>
                  <div className="items-start">
                    <h3 className="font-semibold text-lg mb-1">{m.title}</h3>
                    <p className="font-medium mb-2">{m.contact}</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm">{m.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form (react-hook-form) */}
          <div className="bg-white p-8 rounded-lg  border bottom-1 border-black h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("full_name", {
                      required: "Full name is required",
                    })}
                    className={`${baseInput} ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={`${baseInput} ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className={`${baseInput} ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`${baseInput} ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2 mt-6">
                  Message
                </label>
                <textarea
                  rows={7}
                  placeholder="Tell us more about your inquiry"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Please provide a few more details",
                    },
                  })}
                  className={`${baseInput} resize-vertical ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  Failed to send message. Please try again or contact us
                  directly.
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 bg-[#43678e] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
              {/* Submit */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
