import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="container-shell pt-16 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative overflow-hidden rounded-[2rem] bg-coal p-8 text-fog shadow-plate md:p-12"
      >
        <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-rust/30 blur-3xl" />
        <div className="absolute bottom-6 left-12 h-44 w-44 rounded-full bg-harbor/25 blur-3xl" />
        <div className="flex items-center align-middle gap-2">
          <p className="section-eyebrow text-sand">Burak Kantarci •</p>
          <img
            src="https://cdn.prod.website-files.com/64887138ea0f1ecbd3a86038/648c4338e0058c138df60362_beacon-logo-full-colour.svg"
            alt="Beacon logo"
            className="h-3 w-auto -mt-0.5"
            loading="eager"
          />
          <p className="section-eyebrow text-sand">Case Study</p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
          Supply chain runs on coordination. <br />I designed the collaboration
          layer.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-fog/90 md:text-lg">
          A single-page case study showing how I framed messy stakeholder
          workflows, mapped clearer user flows, and delivered product outcomes
          for Beacon&apos;s customers.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-fog/20 px-3 py-1">
            London • B2B SaaS
          </span>
          <a
            className="rounded-full bg-signal px-4 py-1.5 font-semibold text-ink transition hover:translate-y-[-1px]"
            href="https://burakkantarci.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit main portfolio
          </a>
        </div>
      </motion.div>
    </header>
  );
}
