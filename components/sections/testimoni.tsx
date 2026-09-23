"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rating } from "next-flex-rating";
import Image from "next/image";

const testimonies = [
  {
    value_rating: 5,
    description:
      "Transformasi platform digital kami oleh VentureCraft meningkatkan konversi pelanggan baru hingga 220% dalam tempo hanya tiga bulan. Kecepatan dan eksekusi arsitekturnya luar biasa rapi.",
    profile: [
      {
        image: "/icon-male-fill.png",
        nama: "Rian Pratama",
        jabatan: "Founder & CEO, Kopi Nusantara Co.",
      },
    ],
  },
  {
    value_rating: 4.5,
    description:
      "Alur konversi pengguna di sistem kami jauh lebih efisien. Pelanggan korporasi kami memuji kecepatan load halaman dan navigasi yang sangat intuitif. Sangat direkomendasikan untuk scale-up enterprise.",
    profile: [
      {
        image: "/icon-female-fill.png",
        nama: "Siti Rahmawati",
        jabatan: "Head of Marketing, Apex Logistic",
      },
    ],
  },
  {
    value_rating: 4,
    description:
      "Respons tim teknis 24/7 sungguh bukan sekadar janji promosi. Setiap tantangan integrasi API pihak ketiga diselesaikan tanpa jeda downtime operasional. Hasil kerja kelas satu.",
    profile: [
      {
        image: "/icon-male-fill.png",
        nama: "Budi Santoso",
        jabatan: "Managing Director, Elevate Consulting",
      },
    ],
  },
];

export function Testimoni() {
  return (
    <section id="testimonial" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Badge className=" bg-gray-800 text-purple-200/70">TESTIMONI KLIEN</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya oleh Para Pemimpin Bisnis
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonies.map((testimoni, index) => (
            <Card key={index} className="p-10">
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
                <Rating value={testimoni.value_rating} color="#388DF8" />
                <div>
                  <Image
                    src="/quote-new.png"
                    alt="Quote"
                    width={24}
                    height={24}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-purple-200/70 mb-4 text-justify">
                  "{testimoni.description}"
                </p>
                <div className="grid md:grid-cols-1 text-sm text-primary">
                  {testimoni.profile.map((prof, profIndex) => (
                    <div
                      key={profIndex}
                      className="flex gap-3 pt-4 border-t border-[#0F172A]"
                    >
                      <Image
                        src={prof.image}
                        width={36}
                        height={36}
                        alt={prof.nama}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {prof.nama}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {prof.jabatan}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}