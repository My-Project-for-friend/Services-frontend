// pages/login.tsx
"use client";
import React, { FormEvent, useState } from "react";
import { useLoginMutation } from "@/redux/api/authApi";
import { User } from "@/interfaces/user.interface";
import Link from "next/link";
import { toast } from "react-toastify";
import { ApiResponse } from "@/interfaces/apiResponse.interface";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

const LoginPage = () => {
  const [values, setValues] = useState<User>({ email: "", password: "" });
  const router = useRouter(); // Ensure the component is in pages/ or rendered correctly.
  const dispatch = useDispatch();
  const [loginUser] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Validate input values
      if (!values.email.trim() || !values.password.trim()) {
        toast.error("Email and password are required.");
        return;
      }

      // Call the login API
      const res = (await loginUser(values)) as ApiResponse<{
        user: User;
        token: string;
      }>;

      console.log(res);

      if ("error" in res) {
        const errorMessage =
          (res.error as { message: string }).message || "Something went wrong";
        toast.error(errorMessage);
        return;
      }

      // console.log(res.data.success);
      // Check if response is unsuccessful
      if (!res.data.data.user || !res.data.data.token) {
        toast.error("Invalid login response");
        return;
      }

      // Display success toast
      toast.success("Login successful!");

      // Log the API response data for debugging
      console.log("Response Data:", res.data);

      localStorage.setItem("token", res.data.data.token);
      dispatch(setUser(res.data.data.user));

      router.push("/");
    } catch (error: unknown) {
      // Enhanced error handling
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      console.error("Login Error:", errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Image Section */}
      <div
        className="hidden w-1/2 bg-cover bg-center md:block"
        style={{ backgroundImage: "url('/images/login.jpg')" }}
      ></div>
      {/* Form Section */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
            Login to Your Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                placeholder="Enter your email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                placeholder="Enter your password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-purple-700 dark:hover:bg-purple-800"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <span className="text-purple-600 hover:underline dark:text-purple-400">
              <Link href="/register">Register here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

LoginPage.isAuth = true;

export default LoginPage;
