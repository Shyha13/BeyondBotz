import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact BeyondBotz about FTC research questions, autonomous testing, mentoring notes, or team resources.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="content-shell section-y">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Send a note about something your team is trying to figure out."
            description="Questions about autonomous testing, scouting notes, mentoring, or resources are welcome. Specific examples are the most useful."
          />
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-signal-cyan transition hover:text-white"
          >
            <Mail aria-hidden="true" size={16} />
            {siteConfig.email}
          </a>
        </div>

        <form className="surface-panel p-6" action="#" method="post">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-carbon-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-signal-cyan focus:ring-2 focus:ring-signal-cyan/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-carbon-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-signal-cyan focus:ring-2 focus:ring-signal-cyan/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                className="mt-2 w-full resize-y rounded-md border border-white/10 bg-carbon-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-signal-cyan focus:ring-2 focus:ring-signal-cyan/20"
                placeholder="Tell me what you want to discuss."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-signal-cyan px-5 py-3 text-sm font-semibold text-carbon-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan"
            >
              Send note
            </button>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Static form placeholder. Messages are not submitted or stored yet;
            use the email link for now.
          </p>
        </form>
      </div>
    </section>
  );
}
