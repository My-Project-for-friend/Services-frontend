"use client";
import { ApiResponse } from "@/interfaces/apiResponse.interface";
import { User } from "@/interfaces/user.interface";
import { useRegisterMutation } from "@/redux/api/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [values, setValues] = useState<User>({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const router = useRouter();
  const [registerUser] = useRegisterMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!values.email || !values.password || !values.name || !values.phone) {
        toast.error("All fields are required.");
        return;
      }

      const res: ApiResponse<{ user: User; token: string }> =
        await registerUser(values);

      if (!res.data.success) {
        toast.error(res.message || "Something went wrong");
        return;
      }

      toast.success("Registration successful!");
      localStorage.setItem("token", res.data.token);

      // Use router.push to redirect
      router.push("/");
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Image Section */}
      <div
        className="hidden w-1/2 bg-cover bg-center bg-no-repeat md:block"
        style={{ backgroundImage: "url('/images/login.jpg')" }}
      ></div>
      {/* Form Section */}
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                placeholder="Enter your name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
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
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                placeholder="Enter Your Phone No"
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
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
                placeholder="Create a password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-purple-700 dark:hover:bg-purple-800"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <span className="text-purple-600 hover:underline dark:text-purple-400">
              <Link href="/login">Login here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
