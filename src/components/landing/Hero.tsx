import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 xl:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-14">
          <div className="flex items-center bg-ink p-8 sm:p-12 lg:p-12 xl:p-16">
            <div>
              <h1
                className="animate-hero-rise font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
                style={{ animationDelay: '0.1s' }}
              >
                Simplify Your Finances, Amplify Your Success
              </h1>
              <p
                className="animate-hero-rise mt-6 text-lg leading-8 text-white/80"
                style={{ animationDelay: '0.22s' }}
              >
                Numera offers expert bookkeeping, tax, and financial consulting services tailored for small and medium-sized businesses. Let us handle the numbers, so you can focus on growth.
              </p>
              <div
                className="animate-hero-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: '0.34s' }}
              >
                <Button asChild size="lg" className="bg-ledger text-white hover:bg-ledger/90">
                  <a href="https://calendly.com/victordebelu/consultation-with-numera-finance" target="_blank" rel="noopener noreferrer">Free Consultation</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border border-white/60 bg-white/5 text-white hover:bg-white hover:text-ink">
                  <Link href="/#services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="animate-hero-fade relative h-72 w-full overflow-hidden bg-ink/10 sm:h-96 lg:h-auto lg:min-h-[420px] xl:min-h-[480px]"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=1400&fit=crop&crop=entropy&auto=format&q=70"
                alt="Business financial documents and calculator on a desk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
