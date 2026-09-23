"use client"

import { Badge } from "../ui/badge"
import { Button } from "@/components/ui/button"
import {Rocket, Calendar, Lock } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-linear-to-br from-primary/80 via-primary/40 to-card p-12 md:p-16 text-center">
         <div className="inline-flex justify-center mb-4">
          <Badge className=" bg-gray-800 text-purple-200/70 flex">
            <Rocket />
            Langkah Awal Sukses Anda
          </Badge>
        </div>

        <h2 className="text-3xl text-purple-200/90 md:text-4xl font-bold mb-4">
          Wujudkan Landing Page Impian Bisnis Anda Hari Ini
        </h2>

        <p className="text-purple-200/70 mb-8 max-w-xl mx-auto">
          Tingkatkan kredibilitas merek, konversi prospek potensial menjadi transaksi riil, dan unggul kompetisi dengan fondasi teknologi mutakhir.
        </p>

        <Button size="lg" className="rounded-full mb-8">
          Jadwalkan Konsultasi Gratis
          <Calendar className="ml-2 h-4 w-4" />
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          Tanpa komitmen awal • Diskusi langsung dengan spesialis
        </div>
      </div>
    </section>
  )
}









