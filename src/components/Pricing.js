"use client";
import { useState } from "react";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Personal",
      price: 11.99,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Organization",
      price: 49.99,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Choose Your Plan
        </h2>
        <p className="text-center text-sm mb-12 px-40">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 px-20">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-md p-6 cursor-pointer ${
              selectedPlan === plan.name ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handlePlanSelect(plan.name)}
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-2xl font-bold mb-4">
              ${plan.price.toFixed(2)}
            </p>
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700 pb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-[#588ff5] text-white py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
