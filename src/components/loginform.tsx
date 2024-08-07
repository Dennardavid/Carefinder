"use client";
import Link from "next/link";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("All fields required");
      return;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[70%]">
        <h1 className="text-left mb-2 font-bold text-lg">Login</h1>
        <form className=" flex flex-col gap-3" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <span className="text-red-500">{error}</span>
          <button
            type="submit"
            className="bg-zinc-400/40 text-white p-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <div className="text-right mt-3">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
