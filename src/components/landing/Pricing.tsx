"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, BookOpenCheck, ReceiptText, Lightbulb, GraduationCap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import LedgerFigure from "@/components/landing/LedgerFigure";
import Reveal from "@/components/landing/Reveal";

interface PricingPlan {
  icon: LucideIcon;
  title: string;
  price: string;
  description: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    icon: BookOpenCheck,
    title: "Bookkeeping",
    price: "$249",
    description: "Keep your finances organized and your business running smoothly.",
    features: [
      "Monthly transaction categorization",
      "Bank & credit card reconciliations",
      "Profit & Loss Statement",
      "Balance Sheet preparation",
      "Financial records review and cleanup",
      "Email support throughout the month",
    ],
  },
  {
    icon: ReceiptText,
    title: "Tax Preparation",
    price: "$149",
    description: "Professional tax filing prepared accurately and on time.",
    features: [
      "Preparation of your federal tax return",
      "Review for eligible deductions and credits",
      "Accuracy check before filing",
      "Electronic filing (where applicable)",
      "Answering your tax-related questions",
      "Copy of your completed return for your records",
    ],
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    price: "$199",
    description: "Get expert financial guidance to help your business grow.",
    features: [
      "One-on-one consultation",
      "Financial performance review",
      "Cash flow guidance",
      "Budgeting recommendations",
      "Business strategy discussion",
      "Action plan tailored to your business",
    ],
  },
  {
    icon: GraduationCap,
    title: "Student Loan Forgiveness Assistance",
    price: "$239",
    description: "Professional assistance throughout your student loan forgiveness application process.",
    features: [
      "Eligibility review",
      "Loan forgiveness options assessment",
      "Application preparation",
      "Employment certification assistance (if applicable)",
      "Document review before submission",
      "Guidance until your application is successfully approved",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Credit Repair",
    price: "$279",
    description: "Improve your credit profile with expert dispute and repair services.",
    features: [
      "Full credit report review (all 3 bureaus)",
      "Identification of inaccurate or unfair items",
      "Dispute letters prepared and filed on your behalf",
      "Bureau correspondence tracking",
      "Ongoing guidance throughout the repair process",
      "Personalized credit improvement recommendations",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Our Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-ink">
              Professional Financial Services at Simple, Transparent Pricing
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate/80">
              Whether you need ongoing bookkeeping, tax preparation, business consulting, or student loan forgiveness assistance, we provide expert services with no hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.title}
              delay={index * 0.05}
              className="h-full"
            >
              <Card
                className="flex h-full flex-col border border-ink/10"
              >
                <div className="flex h-full flex-col p-6 sm:p-7">
                  <div className="flex flex-1 flex-col">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-ink/5">
                      <plan.icon className="h-5 w-5 text-ink/70" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{plan.title}</h3>
                    <div className="mt-3">
                      <LedgerFigure
                        value={plan.price}
                        tone="navy"
                        className="text-3xl"
                      />
                    </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate/70">
                        {plan.description}
                      </p>
                      <div className="mt-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink/60">
                          What&apos;s Included:
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-sm text-slate-700/80"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-ledger" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="mt-8 w-full bg-ledger text-white hover:bg-ledger/90"
                    >
                      <Link href="/#contact">Get Started</Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-slate/70">
            Need something different? Every client is unique. If your situation requires additional services or ongoing support,{" "}
            <Link href="/#contact" className="font-semibold text-ledger hover:underline">
              contact us
            </Link>{" "}
            for a customized quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
