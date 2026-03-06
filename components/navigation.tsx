"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/landing-data";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-ink/90 py-4 backdrop-blur-2xl"
            : "py-6"
        }`}
      >
        <div className="container-shell">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center">
              <Image
                src="/logo.png"
                alt="ChanneX AI"
                width={120}
                height={30}
                className="h-[30px] w-auto"
                priority
              />
            </Link>

            <div className="hidden items-center gap-12 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/45 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link href="mailto:hello@channexai.com" className="btn-ghost px-4 py-2 text-xs">
                Contacto
              </Link>
              <Link href="#precios" className="btn-primary px-4 py-2 text-xs">
                Ver planes
              </Link>
            </div>

            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] md:hidden"
            >
              <span className="sr-only">Menú</span>
              <div className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded bg-white/80" />
                <span className="block h-0.5 w-5 rounded bg-white/80" />
                <span className="block h-0.5 w-5 rounded bg-white/80" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[70] flex flex-col items-center justify-center gap-8 bg-ink/95 px-6 backdrop-blur-xl transition ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-3xl text-white/70"
          aria-label="Cerrar menú"
        >
          ×
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-heading text-4xl font-bold text-white/80 transition hover:text-white"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="#precios"
          onClick={() => setOpen(false)}
          className="btn-primary mt-2 w-full max-w-xs"
        >
          Ver planes
        </Link>
      </div>
    </>
  );
}
