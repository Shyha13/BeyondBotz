import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="content-shell grid min-h-[70vh] place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal-cyan">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The page you opened is not part of the BeyondBotz research site.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-signal-cyan px-5 py-3 text-sm font-semibold text-carbon-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-cyan"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}
