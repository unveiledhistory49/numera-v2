"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Reveal from "@/components/landing/Reveal";

const testimonials = [
  {
    quote: "As a small business owner, I was overwhelmed with managing my accounts. Numera stepped in and took the stress off my shoulders. They organized my books, provided clear monthly reports, and helped me understand my cash flow. Now I can focus on growing my business knowing my finances are in good hands.",
    name: "Alexander Hayes",
    title: "Small Business Owner",
    avatar: "AH"
  },
  {
    quote: "I was spending too much time trying to handle payroll and taxes on my own. Numera not only streamlined the process but also identified cost-saving opportunities I hadn't considered. Their expertise saved me money and gave me back precious time to focus on my team and operations.",
    name: "Sophia Bennett",
    title: "Restaurant Owner",
    avatar: "SB"
  },
  {
    quote: "Tax season used to be a nightmare for me. Numera made it so simple. They ensured everything was accurate and filed on time, which saved me from penalties. Their team is professional, approachable, and always ready to answer my questions. I can’t imagine going through another tax season without them.",
    name: "Nathaniel Reed",
    title: "Freelance Designer",
    avatar: "NR"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-ink text-3xl font-semibold sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-8 text-slate">
              We're proud to have earned the trust of businesses across various industries.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.06} className="h-full">
              <figure className="flex h-full flex-col border border-ink/10 bg-white p-6">
                <blockquote className="flex-grow text-slate leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 flex items-center">
                  <Avatar className="h-10 w-10 bg-ink">
                    <AvatarFallback className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-slate">{testimonial.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}