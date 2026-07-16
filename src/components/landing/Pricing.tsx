"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, BookOpenCheck, ReceiptText, Users, Lightbulb, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PricingPlan {
  icon: LucideIcon;
  title: string;
  price: string;
  period?: string;
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg font-medium text-foreground">
            Professional Financial Services at Simple, Transparent Pricing
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-base leading-8 text-foreground/80">
            Whether you need ongoing bookkeeping, tax preparation, payroll support, business consulting, or student loan forgiveness assistance, we provide expert services with no hidden fees.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              className="h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-xl border-border">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold">{plan.title}</CardTitle>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold tracking-tight text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm font-medium text-foreground/60">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="mt-3 text-sm text-foreground/70">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                  <p className="mb-3 text-sm font-semibold text-foreground">What&apos;s Included:</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl mx-auto text-center text-sm text-foreground/70">
          Need something different? Every client is unique. If your situation requires additional services or ongoing support,{" "}
          <Link href="#contact" className="font-medium text-primary hover:underline">
            contact us
          </Link>{" "}
          for a customized quote.
        </p>
      </div>
    </section>
  );
}
