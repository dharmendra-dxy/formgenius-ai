import { SubscriptionPlansTypes, SuggestionTextType } from "./types";

// suggestionText:
export const suggestionText :SuggestionTextType[] = [
    {
      label: "Job Application",
      description: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
    },
    {
      label: "Registration Form",
      description: "Create a course registration form suitable form any scheool or instituition.",
    },
    {
      label: "Feedback Form",
      description: "Create a client feedback form to gather valuable insights from any clients.",
    },
];

// subscriptionPlans:
export const subscriptionPlans:SubscriptionPlansTypes[] = [
    {
      plan: "Basic",
      price: "$0/month",
      services: [
        "3 Free Credits",
        "Basic Supports",
        "Limited Features",
        "Community Access",
      ],
    },
    {
      plan: "Pro",
      price: "$9/month",
      services: [
        "Unlimited Credits",
        "Advance Supports",
        "Limited Features",
        "Community Access",
      ],
    },
    {
      plan: "Enterprise",
      price: "$49/month",
      services: [
        "Unlimited Credits",
        "Basic Supports",
        "Unlimited Features",
        "Community Access",
        "Monthly Updates",
      ],
    },
];