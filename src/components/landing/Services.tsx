"use client";
import { BookOpenCheck, ReceiptText, Users, Lightbulb, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: BookOpenCheck,
    title: "Bookkeeping & Financial Reporting",
    description: "We provide meticulous bookkeeping and insightful financial reports to give you a clear picture of your business's financial health. Stay compliant and make data-driven decisions."
  },
  {
    icon: ReceiptText,
    title: "Tax Preparation & Advisory",
    description: "Navigate the complexities of tax season with ease. Our experts ensure accurate tax preparation and provide strategic advice to minimize liabilities and maximize returns."
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Streamline your payroll process with our reliable services. We handle everything from salary processing to tax filings, ensuring your team is paid accurately and on time."
  },
  {
    icon: Lightbulb,
    title: "Financial Consulting",
    description: "Gain a strategic partner to guide your financial future. We offer expert consulting on budgeting, forecasting, and financial planning to help your business achieve its goals."
  },
  {
    icon: GraduationCap,
    title: "Student Loan Forgiveness Assistance",
    description: "Navigate the complex landscape of federal and private student loan forgiveness options. We help identify qualifying programs, organize documentation, and manage applications to reduce or eliminate your educational debt."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate">
            Comprehensive financial solutions designed for your peace of mind.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              className="h-full"
              delay={index * 0.06}
            >
              <div className="flex h-full flex-col rounded-lg border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-ink/10">
                  <service.icon className="h-5 w-5 text-ledger" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate/70">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}