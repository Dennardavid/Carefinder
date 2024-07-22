"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (password && confirm) {
      if (password !== confirm) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    }
  }, [password, confirm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password || !confirm || !email || !name) {
      setError("All fields required");
      return;
    }

    try {
      const result = await fetch("api/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (result.ok) {
        const form = event.target;
        /* Update state */
        form.reset();
        console.log("user registered successfully");
      }
    } catch (error) {
      console.log("error while registering user", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[70%]">
        <h1 className="text-left mb-2 font-bold text-lg">Sign up</h1>
        <form className=" flex flex-col gap-3"  onSubmit={handleSubmit}>
          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
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
          <label htmlFor="confirmpassword">Confirm Password:</label>

          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          <span className="text-red-500">{error}</span>
          <button
            type="submit"
            className="bg-zinc-400/40 text-white p-2 rounded-lg"
           
          >
            Sign up
          </button>
        </form>
        <div className="text-right mt-3">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
