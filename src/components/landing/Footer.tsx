import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 text-primary">
              <Image src="/numera.svg" alt="Numera Logo" width={244} height={70} className="h-20 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-foreground/70">
              Your partner in financial success.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Bookkeeping</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Tax Advisory</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Payroll</Link></li>
              <li><Link href="#services" className="text-foreground/70 hover:text-primary">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#about" className="text-foreground/70 hover:text-primary">About Us</Link></li>
              <li><Link href="#pricing" className="text-foreground/70 hover:text-primary">Pricing</Link></li>
              <li><Link href="#contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Numera Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
