import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/landing/Reveal';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <h2 className="font-display text-3xl text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Your Trusted Partner in Financial Clarity
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              At Numera, we believe that understanding your finances is the key to unlocking your business's potential. Our mission is to provide clear, reliable, and expert accounting services that empower you to make confident decisions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              With a dedicated team of certified professionals, we're committed to your success, offering personalized solutions that fit your unique needs. We're more than just accountants; we're your partners in growth.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-ledger text-white hover:bg-ledger/90">
                <Link href="#contact">Meet The Team</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <Image
              src="/team.jpg"
              alt="The Numera team collaborating in an office meeting"
              width={600}
              height={800}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}