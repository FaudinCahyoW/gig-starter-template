"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";

const items = [
  {
    value: "item-1",
    trigger: "Berapa lama durasi pengerjaan proyek landing page? ",
    content:
      "Secara standar industri, waktu pengerjaan memakan waktu antara 5 hingga 14 hari kerja tergantung pada cakupan modul, kompleksitas integrasi kustom, serta kelengkapan materi brand Anda.",
  },
  {
    value: "item-2",
    trigger: "Apakah konten dan teks di landing page dapat saya ubah sendiri?",
    content:
      "Ya, seluruh platform yang kami serah terimakan telah terintegrasi dengan Content Management System (CMS) modular yang sangat bersahabat sehingga tim internal Anda dapat memperbarui copywriting, aset gambar, dan penawaran secara mandiri kapan saja.",
  },
  {
    value: "item-3",
    trigger: "Bagaimana performa tampilan pada perangkat mobile dan tablet?",
    content:
      "Kami menerapkan pendekatan mobile-first. Tampilan halaman diuji menyeluruh di berbagai resolusi layar smartphone iOS & Android terkini demi memastikan kecepatan respon sentuhan, hierarki tipografi optimal, dan kenyamanan interaksi penuh.",
  },
  {
    value: "item-4",
    trigger: "Apakah landing page sudah langsung teroptimasi SEO?",
    content:
      "Pasti. Kami menyertakan pengaturan on-page SEO komprehensif: meta tags dinamis, Open Graph media sosial, struktur skema data JSON-LD terstruktur, hingga konfigurasi robots.txt dan automated XML sitemaps siap indeks Google.",
  },
  {
    value: "item-5",
    trigger:
      "Bisakah dihubungkan dengan WhatsApp, payment gateway, dan form CRM kami?",
    content:
      "Tentu. Kami menyediakan integrasi langsung dengan WhatsApp direct checkout, payment gateway lokal (Midtrans, Xendit), hingga webhook otomatis menuju CRM populer seperti HubSpot, Google Sheets, maupun platform email marketing pilihan Anda.",
  },
];

export function FrequentlyQuestion() {
  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <Badge className=" bg-gray-800 text-purple-200/70">FAQ</Badge>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-background rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
