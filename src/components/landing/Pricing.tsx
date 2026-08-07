"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, BookOpenCheck, ReceiptText, Users, Lightbulb, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import LedgerFigure from "@/components/landing/LedgerFigure";
import Reveal from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

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
    icon: Users,
    title: "Payroll Services",
    price: "$179",
    description: "Reliable payroll management so you can focus on your business.",
    features: [
      "Payroll processing",
      "Employee payment calculations",
      "Payroll tax calculations",
      "Pay stub preparation",
      "Payroll reports",
      "Ongoing payroll support",
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
              Whether you need ongoing bookkeeping, tax preparation, payroll support, business consulting, or student loan forgiveness assistance, we provide expert services with no hidden fees.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:snap-none lg:overflow-visible lg:pb-0">
          {plans.map((plan, index) => {
            const isFeatured = plan.title === "Bookkeeping";
            return (
              <Reveal
                key={plan.title}
                delay={index * 0.05}
                className="h-auto w-full shrink-0 basis-full snap-center sm:basis-1/2 lg:h-auto lg:flex-1 lg:shrink lg:basis-auto"
              >
                <Card
                  className={cn(
                    "flex h-full flex-col",
                    isFeatured
                      ? "border-2 border-brass shadow-lg shadow-brass/10"
                      : "border border-ink/10"
                  )}
                >
                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex flex-1 flex-col">
                      {isFeatured && (
                        <span className="mb-4 inline-flex w-fit items-center rounded-sm border border-brass/40 bg-brass/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brass">
                          Most Popular
                        </span>
                      )}
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-ink/5">
                        <plan.icon className="h-5 w-5 text-ink/70" />
                      </div>
                      <h3 className="text-lg font-semibold text-ink">{plan.title}</h3>
                      <div className="mt-3">
                        <LedgerFigure
                          value={plan.price}
                          tone={isFeatured ? "brass" : "navy"}
                          chip
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
            );
          })}
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
