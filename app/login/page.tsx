// pages/login.tsx
"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useLoginMutation } from "@/redux/api/authApi";
import { User } from "@/interfaces/user.interface";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [values, setValues] = useState<User>({ email: "", password: "" });
  // const router = useRouter(); // Ensure the component is in pages/ or rendered correctly.

  const [loginUser] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("applied");
    try {
      if (!values.email || !values.password) {
        toast.error("Email and password are required.");
        return;
      }
      const res = await loginUser(values);
      if (res.error) {
        toast.error(res.error.message || "Something went wrong");
        return;
      }
      toast.success("Login successful!");
      // router.push("/");
    } catch (error: unknown) {
      console.log(error.message);
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
            Don't have an account?{" "}
            <span className="text-purple-600 hover:underline dark:text-purple-400">
              <Link href="/register">Register here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

LoginPage.isAuth = true;
