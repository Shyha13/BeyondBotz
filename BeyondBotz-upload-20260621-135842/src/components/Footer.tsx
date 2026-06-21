import Link from "next/link";
import { Code2, Mail, MoveUpRight } from "lucide-react";
import {
  credibilityNotes,
  footerResearchLinks,
  navigation,
  siteConfig
} from "@/data/site";

export function Footer() {
  const initiativeLinks = navigation.filter((item) =>
    ["/", "/about", "/contact"].includes(item.href)
  );

  return (
    <footer className="border-t border-white/10 bg-carbon-950">
      <div className="content-shell grid gap-10 py-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-signal-cyan/35 bg-white/[0.03]">
              <span className="h-3 w-3 rounded-sm bg-signal-cyan" />
            </span>
            <span>
              <span className="block text-base font-semibold text-white">
                {siteConfig.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">
                {siteConfig.domain}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            {siteConfig.description}
          </p>
          <p className="mt-4 max-w-md text-xs leading-5 text-slate-500">
            Built as a static, accessible place to collect FTC notes, trial
            formats, and resources that can be checked by another student.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Research</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-400">
            {footerResearchLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Initiative</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-400">
            {initiativeLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a
              className="inline-flex items-center gap-2 transition hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail aria-hidden="true" size={16} />
              {siteConfig.email}
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-white"
              href="https://github.com/Shyha13/beyondbots"
              rel="noreferrer"
              target="_blank"
            >
              <Code2 aria-hidden="true" size={16} />
              GitHub repository
              <MoveUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[0.018]">
        <div className="content-shell grid gap-3 py-5 text-xs leading-5 text-slate-500 md:grid-cols-3">
          {credibilityNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}. Student-led
        research initiative.
      </div>
    </footer>
  );
}
