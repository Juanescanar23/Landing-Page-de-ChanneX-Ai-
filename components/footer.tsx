import Image from "next/image";
import Link from "next/link";
import { footerCompanyLinks, footerPlatformLinks } from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-16 pb-10">
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-[2.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="ChanneX AI"
              width={120}
              height={26}
              className="mb-3 h-[26px] w-auto"
            />
            <p className="max-w-[280px] text-sm leading-7 text-white/45">
              Centralizamos, automatizamos y gestionamos tu comunicación comercial con IA para
              que puedas enfocarte en lo que realmente importa: crecer.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.08em] text-white">
              Plataforma
            </h3>
            <div className="flex flex-col gap-2">
              {footerPlatformLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.08em] text-white">
              Empresa
            </h3>
            <div className="flex flex-col gap-2">
              {footerCompanyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/45 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <p className="text-xs text-white/35">
            © ChanneX AI 2026 · MEX | COL · Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/35 transition hover:text-white">
              Términos de uso
            </Link>
            <Link href="#" className="text-xs text-white/35 transition hover:text-white">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
