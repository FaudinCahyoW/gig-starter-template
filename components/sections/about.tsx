"use client";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

const checkListPoints = [
  "Peningkatan omzet berkelanjutan hasil dari riset journey konsumen",
  "Proses bisnis mengalami pergerakan spirit terjadwal secara berkala",
  "Didukung arsitektur cloud berkelanjutan pasca-peluncuran sistem",
];

const stats = [
  { value: "98%", label: "Kepuasan Klien", color:"#ad6fec" },
  { value: "120+", label: "Proyek Selesai", color:"#38BDF8" },
  { value: "4x", label: "Rata-rata ROI", color:"#c49eeb" },
  { value: "24/7", label: "Layanan Dukungan", color:"#e1dae9" },
];


const about = [
  {
    phrases: "Kami Membantu Brand Anda Tampil Menonjol di Ranah Digital",
    image: "/work-team.jpg",
    badge: "Tentang Kami",
    description:
      "Didirikan dengan visi merevolusi cara bisnis berskala modern berinteraksi dengan pelanggannya. Kami tidak sekadar membangun antarmuka statis, melainkan mesin pertumbuhan terukur yang mengkatalisasi performa penjualan Anda.",
    desc2:
      "Melalui integrasi metodologi agile dan teknologi terdepan, setiap solusi yang kami deliver didesain kokoh untuk merespons dinamika pasar secara cepat dan presisi.",
    capImage: "Standar Eksekusi Kelas Dunia",
    subCap:
      " Didukung sertifikasi global dan proses kerja yang telah teruji di berbagai skala industri.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="flex justify-center mb-6">
        <Badge className=" bg-gray-800 text-[#38BDF8]">
          TENTANG KAMI
        </Badge>
      </div>
      {about.map((abouts) => (
        <div
          key={abouts.badge}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border aspect-4/3 bg-secondary">
            <div className="w-full h-full flex items-center justify-center text-sm">
              <Image src={abouts.image} alt={abouts.badge} fill />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-card border border-border p-4">
              <p className="text-sm font-semibold mb-1">{abouts.capImage}</p>
              <p className="text-xs text-muted-foreground">{abouts.subCap}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
              {abouts.phrases}
            </h2>

            <p className="text-[#beb5c7] mb-3">{abouts.description}</p>
            <p className="text-[#beb5c7] mb-6">{abouts.desc2}</p>

            <div className="flex flex-col gap-3 mb-8">
              {checkListPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2 text-sm "
                >
                  <CheckCircle2 className="h-4 w-4  text-[#f6edff] mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold" style={{color: stat.color}}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#f6edff]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
