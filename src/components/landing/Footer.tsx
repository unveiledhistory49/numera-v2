import Link from 'next/link';
import Image from 'next/image';
import Reveal from "@/components/landing/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-12 sm:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/numera.svg"
                  alt="Numera Logo"
                  width={244}
                  height={70}
                  className="h-12 w-auto sm:h-16"
                />
              </Link>
              <p className="mt-4 max-w-xs text-sm text-paper/70">
                Your partner in financial success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-paper">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="#services" className="text-paper/70 transition-colors hover:text-white">
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-paper/70 transition-colors hover:text-white">
                    Tax Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-paper/70 transition-colors hover:text-white">
                    Payroll
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-paper/70 transition-colors hover:text-white">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-paper">Company</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="#about" className="text-paper/70 transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-paper/70 transition-colors hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-paper/70 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 border-t border-paper/15 pt-8 text-center text-sm text-paper/60">
          <p>
            &copy; <span className="ledger-figure font-numerals">{year}</span>{" "}
            Numera Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}