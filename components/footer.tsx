"use client";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { SocialIcon } from "react-social-icons";

const footerLinks = {
  navigasi: [
    { label: "Fitur Solusi", href: "#features" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Testimoni", href: "#testimonial" },
    { label: "FAQ", href: "#faq" },
  ],
  perusahaan: [
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat Layanan", href: "#" },
    { label: "Karir Ekosistem", href: "#" },
    { label: "Pusat Kontak", href: "#" },
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
    <footer className=" py-12 px-6 bg-card/80">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-purple-50">
        <div>
          <span className="text-xl font-bold text-purple-50">Logo</span>
          <p className="text-sm mt-3 text-purple-200/90">
            Akselerator pertumbuhan ekosistem digital dan transformasi venture
            modern terdepan.
          </p>
          <div className="flex gap-3 mt-8 ">
            {socials.map((item, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full  flex items-center justify-center hover:bg-secondary/70 transition-colors"
              >
                <SocialIcon
                  className="h-4 w-4"
                  network={item.icon}
                  url={item.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigasi */}
        <div>
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

        {/* Kontak / Perusahaan */}
        <div>
          <h6 className="font-semibold mb-4 text-sm">Perusahaan</h6>
          <div className="flex flex-col gap-2">
            {footerLinks.perusahaan.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="text-sm text-purple-200/90 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Sosial media */}
        <div>
          <h6 className="font-semibold mb-4 text-sm">Buletin Inovasi</h6>
          <p className="mb-6 text-purple-200/90">Dapatkan wawasan mingguan strategi venture langsung ke email Anda.</p>
          <div className="flex gap-2 mb-4">
            <Input type="email" placeholder="email@domain.com" className="text-sm" />
            <Button size="sm" className="cursor-pointer">Kirim</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Logo. Semua hak dilindungi.</div>
        <div>Jakarta, Indonesia</div>
      </div>
    </footer>
  );
}
