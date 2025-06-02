"use client"

import type React from "react"

import { HandHeart } from "lucide-react"
import { motion } from "framer-motion"
import { services } from "./services"
import Link from "next/link"


interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link href={href}>
        <div className="flex flex-col items-center h-full p-6 text-center transition-all duration-300 bg-white border border-transparent shadow-sm cursor-pointer service-card hover:border-amber-200 hover:border-2 rounded-xl">
          <div className="text-[#FFB200] mb-4 p-4 bg-orange-50 rounded-full shadow">
            <div className="flex items-center justify-center w-16 h-16">{icon}</div>
          </div>
          <h3 className="font-bold text-2xl mb-3 text-[#8B4513]">{title}</h3>
          <p className="flex-grow text-base leading-relaxed text-gray-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

const ServicesSection: React.FC = () => {
  // Split services into two groups
  const mainServices = services.slice(0, 6) // First 6 services
  const bottomServices = services.slice(6) // Last 2 services

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container px-4 mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-[#8B4513]">Apa Itu Sidaya?</h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg text-center text-gray-600">
SIDAYA (Lanjut Usia Berdaya) adalah aplikasi
yang memberikan pelayanan publik kepada
masyarakat dalam mewujudkan lansia berdaya
(lansia tangguh yang sehat, merasa aman dan
mampu berpartisipasi dalam kegiatan sesuai
dengan minat dan potensinya).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="px-6 py-8 mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-[#FFB200] text-center mb-6 font-handwritten italic">
            Tangguh dan Sehati <br /> &quot;Sehat Aman dan Berpartisipasi&quot;
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center h-full p-6 py-20 mb-16 text-center transition-all duration-300 bg-white border border-transparent shadow-sm cursor-pointer service-card hover:border-amber-200 hover:border-2 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#8B4513]">
            <HandHeart color="#FFB200" size={46} />
          </h3>
          <p className="text-[#8B4513] text-3xl font-bold">APA YANG KAMI TAWARKAN??</p>
        </motion.div>

        {/* Main services grid (6 items) */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href="#"
            />
          ))}
        </div>

        {/* Bottom services (2 items) with title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {bottomServices.map((service, index) => (
              <ServiceCard
                key={index + mainServices.length}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href="#"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
