"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    subject: "",
    referral: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, referral: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Terima kasih! Pesan Anda telah dikirim.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      subject: "",
      referral: "",
      message: "",
    })
  }

  return (
    <section className="py-24 bg-yellow-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Layanan Pengaduan</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Semua komunikasi akan diarahkan ke perwakilan SIDAYA lokal Anda dan kami berusaha untuk merespons dalam
            waktu 24 jam.
          </p>
        </div>

        <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                  Nama
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                  Telepon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="08123456789"
                  required
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block mb-1 text-sm font-medium text-gray-700">
                  Kode Pos
                </label>
                <Input
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="12345"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-700">
                  Subjek
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subjek pesan Anda"
                  required
                />
              </div>
              <div>
                <label htmlFor="referral" className="block mb-1 text-sm font-medium text-gray-700">
                  Bagaimana Anda menemukan kami?
                </label>
                <Select onValueChange={handleSelectChange} value={formData.referral}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih sumber" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="recommendation">Rekomendasi</SelectItem>
                    <SelectItem value="other">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                Pesan
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                rows={6}
                required
              />
            </div>

            <div className="text-center">
              <Button type="submit" className="px-8 py-3 font-medium text-gray-900 bg-[#d08700] hover:bg-[#d4b273]">
                Kirim Pesan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
