"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from "framer-motion";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-paper pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2 lg:gap-8">
          <div className="flex items-center bg-ink p-8 sm:p-12 lg:p-16">
            <div>
              <motion.h1
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? false : { opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.1, duration: reduce ? 0 : 0.5, ease: cubicEase }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-display"
              >
                Simplify Your Finances, Amplify Your Success
              </motion.h1>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={reduce ? false : { opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.22, duration: reduce ? 0 : 0.45, ease: cubicEase }}
                className="mt-6 text-lg leading-8 text-white/80"
              >
                Numera offers expert bookkeeping, tax, and financial consulting services tailored for small and medium-sized businesses. Let us handle the numbers, so you can focus on growth.
              </motion.p>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={reduce ? false : { opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.34, duration: reduce ? 0 : 0.4, ease: cubicEase }}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                <Button asChild size="lg" className="bg-ledger text-white hover:bg-ledger/90">
                  <a href="https://calendly.com/victordebelu/consultation-with-numera-finance" target="_blank" rel="noopener noreferrer">Free Consultation</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border border-white/60 bg-white/5 text-white hover:bg-white hover:text-ink">
                  <Link href="/#services">Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.1, duration: reduce ? 0 : 0.6, ease: "easeOut" }}
            className="relative h-72 sm:h-96 lg:h-auto w-full"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=1400&fit=crop&crop=entropy&auto=format&q=70"
                alt="Business financial documents and calculator on a desk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}