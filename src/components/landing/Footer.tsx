import Link from 'next/link';
import Image from 'next/image';
import Reveal from "@/components/landing/Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper py-12 sm:py-16">
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
              <p className="mt-4 max-w-xs text-sm text-slate">
                Your partner in financial success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-ink">Services</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="#services" className="text-slate/70 transition-colors hover:text-ledger">
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate/70 transition-colors hover:text-ledger">
                    Tax Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-slate/70 transition-colors hover:text-ledger">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-ink">Company</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="#about" className="text-slate/70 transition-colors hover:text-ledger">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-slate/70 transition-colors hover:text-ledger">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate/70 transition-colors hover:text-ledger">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 border-t border-ink/10 pt-8 text-center text-sm text-slate/60">
          <p>
            &copy; <span className="ledger-figure text-ink font-numerals">{year}</span>{" "}
            Numera Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}