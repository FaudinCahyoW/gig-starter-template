"use client";

import { SocialIcon } from "react-social-icons";

const footerLinks = {
  navigasi: [
    { label: "Fitur", href: "#features" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Testimoni", href: "#testimonial" },
    { label: "FAQ", href: "#faq" },
  ],
};

const socials = [
  { icon: "facebook", href: "#" },
  { icon: "instagram", href: "#" },
  { icon: "twitter", href: "#" },
  { icon: "linkedin", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card/80">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 text-purple-50">
        {/* SISI KIRI: Brand Info */}
        <div className="max-w-sm">
          <span className="text-xl font-bold text-purple-50">Logo</span>
          <p className="text-sm mt-3 text-purple-200/90 leading-relaxed">
            Membantu bisnis Anda tumbuh lewat solusi digital yang scalable dan
            mudah dikelola.
          </p>
          <div className="flex gap-5 mt-5">
              {socials.map((item, index) => (
                <SocialIcon
                  key={index}
                  url={item.href}
                  network={item.icon}
                  className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/70 transition-colors"
                  style={{ height: 30, width: 30 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
          </div>
        </div>

        {/* SISI KANAN: Navigasi, Kontak, dan Lokasi */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Navigasi */}
          <div className="min-w-30">
            <h6 className="font-semibold mb-4 text-sm">Navigasi</h6>
            <div className="flex flex-col gap-2">
              {footerLinks.navigasi.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-sm text-purple-200/90 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Kontak */}
          <div className="min-w-35">
            <h6 className="font-semibold mb-4 text-sm">Kontak</h6>
            <p className="text-sm text-purple-200/90 mb-2">hello@bisnis.com</p>
            <p className="text-sm text-purple-200/90">+62 812-3456-7890</p>
          </div>

          {/* Lokasi */}
          <div className="w-full sm:w-64">
            <h6 className="font-semibold mb-4 text-sm">Lokasi Kami</h6>
            <div className="rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                title="Lokasi Kami"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-purple-200/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Logo. Semua hak dilindungi.</div>
        <div>Jakarta, Indonesia</div>
      </div>
    </footer>
  );
}
