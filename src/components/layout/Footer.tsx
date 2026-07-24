export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020B18]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="mb-6 text-5xl font-bold text-white">
              SPEDO
            </h2>

            <p className="leading-8 text-slate-400">
              Premium real estate opportunities across
              Hurghada, El Gouna, Sahl Hasheesh,
              Makadi Bay and Soma Bay.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="https://www.facebook.com/share/192ggywwVe/?mibextid=wwXIfr"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Facebook
              </a>

              <a
                href="https://t.me/SpedoHurghada"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Telegram
              </a>

              <a
                href="https://youtube.com/@spedorealestate"
                target="_blank"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                YouTube
              </a>

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/properties" className="hover:text-white">
                  Properties
                </a>
              </li>

              <li>
                <a href="/projects" className="hover:text-white">
                  Projects
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Offices */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
              Offices
            </h3>

            <div className="space-y-6 text-slate-400">

              <div>
                <p className="mb-2 font-semibold text-white">
                  🇪🇬 Egypt Office
                </p>

                <p>
                  Old Kawthar,
                  Behind Tourist Police,
                  Near Ahmed Nageh Pharmacy,
                  Hurghada, Egypt
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-white">
                  🇩🇪 Germany Office
                </p>

                <p>
                  Günzburger Straße 18
                  <br />
                  89347 Bubesheim
                  <br />
                  Bavaria, Germany
                </p>
              </div>

              <div>
                <p className="mb-2 font-semibold text-white">
                  🇸🇰 Slovakia Office
                </p>

                <p>
                  Baštová 4
                  <br />
                  Košice 04001
                </p>
              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <a
                href="tel:+201158070998"
                className="block hover:text-[#D4AF37]"
              >
                +20 115 580 7098
              </a>

              <a
                href="tel:+201505906559"
                className="block hover:text-[#D4AF37]"
              >
                +20 150 590 6559
              </a>

              <a
                href="tel:+201599909283"
                className="block hover:text-[#D4AF37]"
              >
                +20 159 990 9283
              </a>

              <a
                href="tel:+421949519800"
                className="block hover:text-[#D4AF37]"
              >
                +421 949 519 800
              </a>

              <a
                href="tel:+491628333610"
                className="block hover:text-[#D4AF37]"
              >
                +49 162 833 3610
              </a>

              <a
                href="mailto:info@spedorealestate.com"
                className="block hover:text-[#D4AF37]"
              >
                info@spedorealestate.com
              </a>

              <a
                href="https://wa.me/201158070998"
                target="_blank"
                className="mt-4 inline-block rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                WhatsApp Advisor
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} SPEDO Real Estate.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}