"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const Welcome = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Personalized B2B Emails
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          A tool that makes B2B emails more personal and persuasive.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <ul className="text-gray-600 text-left space-y-3">
            <li>
              <span className="font-semibold">1.</span> Enter your offer.
            </li>
            <li>
              <span className="font-semibold">2.</span> Provide a link to your
              potential customer’s profile (X, LinkedIn, Facebook).
            </li>
            <li>
              <span className="font-semibold">3.</span> Our service analyzes
              their page and generates a personalized message.
            </li>
            <li>
              <span className="font-semibold">4.</span> Increase sales with a
              targeted approach.
            </li>
          </ul>
        </div>

        <Button
          onClick={() => redirect("/dashboard/generation")}
          className="mt-6 px-6 py-3 font-medium transition"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
