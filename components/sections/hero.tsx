"use client";

import { Button } from "../ui/button";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Zap,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";

const trustPoints = [
  "Implementasi Cepat",
  "Dukungan Penuh 24/7",
  "Garansi Kepuasan",
];

const chartData = [
  { day: "1", value: 400 },
  { day: "5", value: 420 },
  { day: "10", value: 450 },
  { day: "15", value: 650 },
  { day: "20", value: 700 },
  { day: "25", value: 850 },
  { day: "30", value: 920 },
];

const chartConfig = {
  value: {
    label: "Performa",
    color: "#B2BEB5",
  },
} satisfies ChartConfig;

export function Hero() {
  return (
    <section className="pt-24 md:pt-27 pb-16 md:pb-20 px-4 md:px-6 bg-[linear-gradient(to_bottom_right,#e7dfef_0%,var(--card)_15%,var(--card)_85%,var(--primary)_100%)] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Kolom kiri - teks */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-[#38BDF8] mb-6 bg-gray-800">
            <Sparkles className="h-4 w-4" /> Solusi Bisnis Modern Terdepan
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-foreground">
              Akselerasi Pertumbuhan Bisnis Anda dengan{" "}
            </span>
            <span className="text-primary">Teknologi Digital Terbaik</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Tingkatkan konversi, otomatisasi alur kerja, dan perluas jangkauan
            pasar Anda dengan sistem web dan operasional yang scalable dan
            mudah dikelola.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button size="lg">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Solusi
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#38BDF8]" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111625] p-4 md:p-6 sm:flex-row shadow-2xl w-full max-w-full">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="rounded-lg bg-card border border-slate-800 p-4 flex-1 min-w-0">
              <span className="text-xs text-[#e7dfef]">Pertumbuhan Omset</span>
              <div className="flex items-center gap-2 mt-3 text-[#e7dfef] flex-wrap">
                <h3 className="font-bold text-2xl md:text-4xl">+342%</h3>
                <div className="flex items-center gap-1 rounded-full bg-primary/10 text-primary text-xs px-2 py-0.5 shrink-0">
                  <ArrowUpRight className="h-3 w-3" />
                  MoM
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card border border-slate-800 p-4 flex-1 min-w-0">
              <span className="text-xs text-[#e7dfef]">Total Konversi</span>
              <div className="flex items-center gap-2 mt-3 flex-wrap">
                <h3 className="font-bold text-2xl md:text-4xl text-[#e7dfef]">
                  18.4%
                </h3>
                <div className="flex items-center gap-1 rounded-full bg-primary/10 text-primary text-xs px-2 py-0.5 shrink-0">
                  <Zap className="h-3 w-3" />
                  Optimal
                </div>
              </div>
            </div>
          </div>

          {/* Grafik Chart */}
          <div className="bg-card p-3 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-6">
              <span className="text-xs font-semibold text-[#aca6b3] tracking-wider uppercase">
                PERFORMA TRAFIK AKUISISI
              </span>
              <span className="text-xs font-medium text-[#e7dfef]">
                30 Hari Terakhir
              </span>
            </div>

            <ChartContainer config={chartConfig} className="h-48 md:h-64 w-full">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={chartConfig.value.color}
                      stopOpacity={0.5}
                    />
                    <stop
                      offset="95%"
                      stopColor={chartConfig.value.color}
                      stopOpacity={0.0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={true}
                  horizontal={true}
                  stroke="#1e293b"
                  strokeDasharray="3 3"
                  opacity={0.4}
                />

                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#CF9FFF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#fillValue)"
                  dot={{
                    r: 4,
                    fill: "#38bdf8",
                    stroke: "#ffffff",
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 6,
                    fill: "#38bdf8",
                    stroke: "#ffffff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ChartContainer>
          </div>

          {/* Feedback persentase */}
          <div className="flex items-center gap-3 mt-3 p-3 bg-[#151c2f] rounded-lg">
            <div className="rounded-full bg-primary/10 p-2 shrink-0">
              <BadgeCheck className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#e7dfef]">
                99% Tingkat Retensi
              </p>
              <p className="text-xs text-slate-400">
                Klien Puas & Aktif Berkelanjutan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}