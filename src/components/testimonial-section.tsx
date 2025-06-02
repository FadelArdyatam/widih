"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ibu Siti Aminah",
    age: 68,
    location: "Jakarta Selatan",
    image: "/images/Sidaya/aisyah.png",
    quote:
      "Program SIDAYA sangat membantu saya untuk tetap aktif di usia senja. Saya belajar banyak tentang kesehatan dan mendapat teman-teman baru yang saling mendukung.",
    role: "Peserta Sekolah Lansia",
  },
  {
    id: 2,
    name: "Bapak Hadi Supriyanto",
    age: 72,
    location: "Bandung",
    image: "/images/Sidaya/ahmad fauzi.jpg",
    quote:
      "Berkat program Bina Keluarga Lansia, keluarga saya jadi lebih memahami kebutuhan saya sebagai lansia. Komunikasi kami jadi lebih baik dan saya merasa lebih dihargai.",
    role: "Anggota Bina Keluarga Lansia",
  },
  {
    id: 3,
    name: "Ibu Rahayu Widodo",
    age: 65,
    location: "Yogyakarta",
    image: "/images/Sidaya/aisyah.png",
    quote:
      "Kalkulator Kesehatan SIDAYA membantu saya memantau kondisi kesehatan dengan mudah. Saya jadi lebih sadar akan pentingnya menjaga pola makan dan olahraga teratur.",
    role: "Pengguna Kalkulator Kesehatan",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">Testimoni Lansia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman para lansia yang telah merasakan manfaat program SIDAYA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 rounded-xl shadow-lg p-8 md:p-10 relative"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FFB200] rounded-full p-3 shadow-md">
              <Quote className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 text-center md:text-left"
              >
                <p className="text-gray-700 italic mb-6 text-lg">{`"${currentTestimonial.quote}"`}</p>
                <div>
                  <h4 className="text-xl font-bold text-[#8B4513]">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">
                    {currentTestimonial.age} tahun, {currentTestimonial.location}
                  </p>
                  <p className="text-[#FFB200] font-medium mt-1">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#FFB200] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-[#FFB200] text-[#8B4513] hover:bg-[#FFB200] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-[#FFB200] text-[#8B4513] hover:bg-[#FFB200] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
