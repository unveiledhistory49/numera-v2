"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, ReceiptText, Users, Lightbulb, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Comprehensive financial solutions designed for your peace of mind.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="mt-4 text-lg font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70">{service.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
