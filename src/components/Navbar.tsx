"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-carbon-950/88 backdrop-blur-xl supports-[backdrop-filter]:bg-carbon-950/72">
      <nav
        className="content-shell flex items-center justify-between py-3.5"
        aria-label="Primary navigation"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-signal-cyan/35 bg-carbon-900 shadow-glow">
            <span className="absolute inset-x-2 top-2 h-px bg-signal-cyan/70" />
            <span className="absolute inset-y-2 right-2 w-px bg-signal-violet/70" />
            <span className="h-3 w-3 rounded-sm bg-signal-cyan shadow-[0_0_18px_rgba(49,214,255,0.9)]" />
          </span>
          <span>
            <span className="block text-base font-semibold text-white">
              {siteConfig.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-slate-500 group-hover:text-slate-400">
              Research Initiative
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan",
                  active && "bg-carbon-800 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/resources"
          className="hidden items-center gap-2 rounded-md border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:border-signal-cyan/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan xl:inline-flex"
        >
          <Search aria-hidden="true" size={15} />
          Resource index
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 transition hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-carbon-950 px-4 py-4 shadow-[0_24px_70px_rgba(0,0,0,0.45)] lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white",
                    active && "bg-white/[0.08] text-white"
                  )}
                >
                  <span className="block">{item.label}</span>
                  <span className="mt-0.5 block text-xs font-normal text-slate-500">
                    {item.description}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
