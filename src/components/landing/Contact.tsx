"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Calendar, MapPin } from "lucide-react";
import { sendContactMessage } from "@/ai/flows/contact-flow";
import type { ContactMessageInput } from "@/ai/flows/contact-flow";
import Reveal from "@/components/landing/Reveal";
import React from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Reach out to us directly.",
    value: (
      <a
        href="mailto:numeraservices@outlook.com"
        className="font-medium text-ledger hover:underline underline-offset-4"
      >
        numeraservices@outlook.com
      </a>
    ),
  },
  {
    icon: Calendar,
    title: "Schedule A Meeting",
    description: "Let&apos;s connect! Book a time that works for you.",
    value: (
      <a
        href="https://calendly.com/victordebelu/consultation-with-numera-finance"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-ledger hover:underline underline-offset-4"
      >
        Book a meeting
      </a>
    ),
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactMessageInput) {
    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. We'll get back to you shortly.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({
        title: "Oh no! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate">
            Ready to take control of your finances? Contact us for a free, no-obligation consultation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05}>
            <Card className="border border-ink/10">
              <CardHeader>
                <CardTitle className="text-ink">Contact Us</CardTitle>
                <CardDescription className="text-slate">
                  Fill out the form and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="border-ink/15 focus:border-ledger focus:ring-ledger/30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" className="border-ink/15 focus:border-ledger focus:ring-ledger/30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" className="border-ink/15 focus:border-ledger focus:ring-ledger/30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you?" className="min-h-[120px] border-ink/15 focus:border-ledger focus:ring-ledger/30" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-ledger text-white hover:bg-ledger/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>

          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <Reveal key={method.title} delay={0.1 + i * 0.08}>
                <Card className="border border-ink/10">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ink/10">
                      <method.icon className="h-5 w-5 text-ledger" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-ink">{method.title}</h3>
                      <p className="mt-1 text-sm text-slate">{method.description}</p>
                      <div className="mt-2 text-sm">{method.value}</div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}

            <Reveal delay={0.34}>
              <Card className="border border-ink/10">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-ink/10">
                    <MapPin className="h-5 w-5 text-ledger" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-ink">Office</h3>
                    <p className="mt-1 text-sm text-slate">
                      <span className="ledger-figure font-numerals">274</span> Lynn Braxton St.
                    </p>
                    <p className="mt-0.5 text-sm text-slate">
                      San Francisco, CA <span className="ledger-figure font-numerals">94159</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}