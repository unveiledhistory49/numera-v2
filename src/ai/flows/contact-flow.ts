'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that handles sending the contact message.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 * - ContactMessageOutput - The return type for the sendContactMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { Resend } from 'resend';

const ContactMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  phone: z.string().optional().describe('The phone number of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;

const ContactMessageOutputSchema = z.object({
  success: z.boolean(),
});
export type ContactMessageOutput = z.infer<typeof ContactMessageOutputSchema>;

export async function sendContactMessage(input: ContactMessageInput): Promise<ContactMessageOutput> {
  return contactFlow(input);
}

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactMessageInputSchema,
    outputSchema: ContactMessageOutputSchema,
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'numeraservices@outlook.com',
        subject: `New message from ${input.name}`,
        html: `
          <p>You received a new message from your website contact form.</p>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          ${input.phone ? `<p><strong>Phone:</strong> ${input.phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false };
    }
  }
);
