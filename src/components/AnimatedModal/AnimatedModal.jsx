import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function AnimatedModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset Data:", data);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm " />

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl dark:text-black"
        >
          <div className="flex float-end pr-3">
            <Link to={"/"}>
              <IoClose className="text-xl" />
            </Link>
          </div>
          <div className="flex-1 w-full justify-center items-center max-w-md text-center mx-auto my-28">
            <h2 className="text-4xl mb-8 text-center">Forgot password?</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-sm space-y-4 mx-auto"
            >
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="w-full p-5 rounded-lg bg-secondary placeholder-placeholder pr-10"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", { required: true })}
                  className="w-full p-5 rounded-lg bg-secondary placeholder-placeholder pr-10"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-yellow-500 py-6 px-20 rounded-full"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
