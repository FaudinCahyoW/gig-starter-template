import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp, Layers, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    badge: "Kecepatan",
    title: "Performa Super Cepat",
    description: "Arsitektur teroptimasi dengan pemuatan halaman instan.",
    link: "Pelajari optimasi latensi",
    color_icon: "#e7dfef",
    bg_icon: "#111625",
  },
  {
    icon: Shield,
    badge: null,
    title: "Keamanan Enterprise",
    description:
      "Enkripsi end-to-end berstandar perbankan, perlindungan otomatis terhadap serangan DDoS.",
    link: "Standar audit kepatuhan",
    color_icon: "#38BDF8",
    bg_icon: "#111625",
  },
  {
    icon: TrendingUp,
    badge: "Unggulan",
    title: "Skalabilitas Tanpa Batas",
    description:
      "Infrastruktur cloud elastis yang siap mengakomodasi lonjakan traffic.",
    link: "Detail kapabilitas server",
    color_icon: "#e7dfef",
    bg_icon: "#111625",
  },
  {
    icon: Layers,
    badge: null,
    title: "Modular & Kustomisasi Mudah",
    description:
      "Komponen sistem yang dapat dirakit sesuai kebutuhan spesifik industri Anda.",
    link: "Eksplorasi ekosistem modul",
    color_icon: "#38BDF8",
    bg_icon: "#111625",
  },
  {
    icon: Sparkles,
    badge: null,
    title: "Optimasi SEO Otomatis",
    description:
      "Struktur semantic HTML5, integrasi schema markup komprehensif.",
    link: "Metrik indeks pencarian",
    color_icon: "#e7dfef",
    bg_icon: "#111625",
  },
  {
    icon: Users,
    badge: null,
    title: "Desain Berorientasi Pengguna",
    description:
      "Riset antarmuka berbasis data nyata untuk pengalaman yang memukau.",
    link: "Metodologi riset UX",
    color_icon: "#38BDF8",
    bg_icon: "#111625",
  },
];

export function Feature() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex justify-center mb-4">
            <Badge className=" bg-gray-800 text-purple-200/70">
              FITUR UNGGULAN
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Semua yang Dibutuhkan untuk Mengembangkan Bisnis
          </h2>
          <p className="text-[#bcb8c0]">
            Solusi komprehensif yang dirancang untuk meningkatkan efisiensi
            operasional dan melipatgandakan omset Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <CardHeader className="flex flex-row items-center justify-between p-0 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: feature.bg_icon }}
                >
                  <feature.icon
                    className="h-5 w-5"
                    style={{ color: feature.color_icon }}
                  />
                </div>
                {feature.badge && <Badge>{feature.badge}</Badge>}
              </CardHeader>
              <CardContent className="p-0">
                <h3 className="font-semibold mb-2 text-[#e7dfef]">{feature.title}</h3>
                <p className="text-sm text-[#f2f2f2] mb-4">
                  {feature.description}
                </p>
                <a href="#" className="text-sm text-primary hover:underline" style={{color: feature.color_icon}}>
                  {feature.link} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
