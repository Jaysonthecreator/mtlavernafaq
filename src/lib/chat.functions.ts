import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SCHOOL_CONTEXT = `You are "Laverna Assistant", the friendly AI helper for Mount Laverna School.
Answer parent, student, and visitor questions clearly and warmly. Keep replies concise (2-5 sentences) unless detail is requested. Use markdown when helpful.

SCHOOL INFORMATION (use this as your source of truth):

• About: Mount Laverna School is a co-educational K-12 institution founded in 1985, rooted in Franciscan values of compassion, integrity, and curiosity. Approx. 1,200 students. Motto: "Learn. Lead. Serve."

• Curriculum: Cambridge-aligned curriculum from Kindergarten to Grade 12. Streams in Grades 11-12: Science, Commerce, Humanities. STEM labs, robotics, debate, music, and visual arts.

• Admissions: Applications open Sept 1 to Jan 31 each year for the August intake. Steps: (1) online application form, (2) entrance assessment for Grades 1+, (3) parent interview, (4) offer letter. Required docs: birth certificate, last 2 years' report cards, transfer certificate, 2 passport photos.

• Fees (annual, indicative): Kindergarten ₹85,000 • Primary (Gr 1-5) ₹110,000 • Middle (Gr 6-8) ₹135,000 • Secondary (Gr 9-10) ₹160,000 • Senior Secondary (Gr 11-12) ₹185,000. One-time admission fee ₹25,000. Sibling discount 10%.

• Uniform: Navy blazer with school crest, white shirt, grey trousers/skirt, navy-and-gold tie. PE kit: white tee, navy shorts/track pants, white sneakers. Available at the school store and partner outlets.

• Transport: School buses cover 18 routes across the city. Annual fee ₹22,000-₹38,000 by zone. GPS tracking via the Laverna Parent app. Routes published in July.

• School hours: Mon-Fri 8:00 AM - 3:15 PM. Sat (Gr 9-12) 8:00 AM - 12:30 PM. Office hours 8 AM - 5 PM.

• Activities: 30+ clubs — robotics, MUN, choir, theatre, eco club, chess. Sports: cricket, football, basketball, swimming, athletics, badminton. Annual events: Founder's Day (Oct), Sports Day (Dec), Cultural Fest "Lavernalia" (Feb).

• Contact: Address — P.O. Box 6514-00300 Nairobi. Phone — 0725500584. Email — mtlaverna@yahoo.com. Admissions — admissions@mountlaverna.edu.

RULES:
- If asked something not covered above, say you'll have the office follow up and share the contact email.
- Never invent fees, dates, or policies that aren't listed.
- Be warm, professional, and use the school's name naturally.`;

const messageSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(20),
});

export const chatWithLaverna = createServerFn({ method: "POST" })
  .inputValidator((data) => messageSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { error: "AI service is not configured. Please contact the office.", reply: "" };
    }

    try {
      const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SCHOOL_CONTEXT },
            ...data.messages,
          ],
        }),
      });

      if (res.status === 429) {
        return { error: "Too many questions right now — please try again in a moment.", reply: "" };
      }
      if (res.status === 402) {
        return { error: "The assistant is temporarily unavailable. Please email mtlaverna@yahoo.com.", reply: "" };
      }
      if (!res.ok) {
        const text = await res.text();
        console.error("AI gateway error", res.status, text);
        return { error: "Sorry, something went wrong reaching the assistant.", reply: "" };
      }

      const json = await res.json();
      const reply: string = json?.choices?.[0]?.message?.content ?? "";
      return { error: null, reply };
    } catch (e) {
      console.error("chat error", e);
      return { error: "Network error. Please try again.", reply: "" };
    }
  });