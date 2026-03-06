"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative bg-card pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.h1
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.05 * 0, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl font-headline"
            >
              Simplify Your Finances, Amplify Your Success
            </motion.h1>
            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.05 * 1, duration: 0.5 }}
              className="mt-6 text-lg leading-8 text-foreground/80"
            >
              Numera offers expert bookkeeping, tax, and financial consulting services tailored for small and medium-sized businesses. Let us handle the numbers, so you can focus on growth.
            </motion.p>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.05 * 2, duration: 0.5 }}
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://calendly.com/victordebelu/consultation-with-numera-finance" target="_blank" rel="noopener noreferrer">Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </motion.div>
          </div>
          <div className="relative h-64 w-full lg:h-auto lg:aspect-square">
            <Image
              src="https://picsum.photos/800/800"
              alt="Business growth illustrated by financial charts and graphs"
              data-ai-hint="financial analytics"
              fill
              className="rounded-xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
