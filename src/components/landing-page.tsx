
import { Button } from "@/components/ui/button";
import { Info, FileText, ShieldCheck, MessageSquare, ClipboardCheck, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from "next/link";

export default function SidayaPage() {
  const serviceStandards = [
    {
      title: "Waktu Respons",
      description: "Maksimal 3 hari kerja untuk menanggapi pengaduan atau permohonan informasi",
      icon: <Clock className="w-8 h-8 text-[#D4AF37]" />
    },
    {
      title: "Kerahasiaan",
      description: "Menjamin kerahasiaan data pribadi lansia sesuai peraturan yang berlaku",
      icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
    },
    {
      title: "Aksesibilitas",
      description: "Layanan dapat diakses secara offline di posko dan online melalui website/aplikasi",
      icon: <Info className="w-8 h-8 text-[#D4AF37]" />
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-[#D4AF37]" />,
      title: "Telepon",
      value: "(021) 1234-5678",
      link: "tel:02112345678"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
      title: "Email",
      value: "sidaya@lansiaberdaya.go.id",
      link: "mailto:sidaya@lansiaberdaya.go.id"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />,
      title: "Alamat Kantor",
      value: "Jl. Lansia Sejahtera No. 123, Jakarta Pusat",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Quick Links */}
      <section className="py-8 mt-4 bg-[#FFFDF6]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-6">
            {[
              { icon: <Info className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Profil", id: "profil" },
              { icon: <FileText className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Maklumat", id: "maklumat" },
              { icon: <ShieldCheck className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Standar", id: "standar" },
              { icon: <MessageSquare className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Pengaduan", id: "pengaduan" },
              { icon: <ClipboardCheck className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Survei", id: "survei" },
              { icon: <Info className="w-8 h-8 mb-2 text-[#D4AF37]" />, label: "Informasi", id: "informasi" }
            ].map((item, index) => (
              <Link 
                key={index} 
                href={`#${item.id}`} 
                className="p-4 transition-all transform rounded-lg hover:bg-[#FAF5E6] hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <span className="text-sm font-medium text-[#5E4C12]">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-16 bg-[#FFFDF6]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#5E4C12]">
              Profil Sidaya
            </h2>
            <div className="w-20 h-1 mx-auto bg-[#D4AF37]"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-[#5E4C12]">
                Sidaya (Sistem Layanan Lansia Berdaya) adalah program terpadu Kementerian Sosial untuk memberikan layanan komprehensif bagi lansia Indonesia, dengan fokus pada peningkatan kesejahteraan dan kemandirian.
              </p>
              
              <div className="p-6 mb-6 bg-[#FAF5E6] rounded-xl border-l-4 border-[#D4AF37]">
                <div className="flex">
                  <div className="mr-4 text-2xl font-bold text-[#B38E2D]">Visi:</div>
                  <div className="text-lg italic text-[#5E4C12]">&quot;Tangguh dan Sehati, TSehat Aman dan Berpartisipasi&quot;</div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-3 text-xl font-semibold text-[#B38E2D]">Misi Kami</h3>
                <ul className="space-y-3">
                  {[
                    "Menyediakan layanan terpadu untuk kebutuhan dasar lansia",
                    "Meningkatkan kapasitas dan kemandirian lansia melalui program pemberdayaan",
                    "Melindungi hak-hak lansia sesuai peraturan perundangan",
                    "Membangun sistem pendataan yang terintegrasi untuk lansia",
                    "Mengembangkan kemitraan dengan berbagai pemangku kepentingan"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex items-center justify-center w-6 h-6 mt-1 mr-3 bg-[#D4AF37] rounded-full text-white text-xs flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-[#5E4C12]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl rounded-xl">
                <img
                  src="/images/profil-sidaya.jpg" 
                  alt="Profil Sidaya" 
                  width={600} 
                  height={450} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5E4C12]/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Layanan Komprehensif untuk Lansia</h3>
                    <p className="text-[#D4AF37]">Program terpadu dari Kementerian Sosial</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { value: "50.000+", label: "Lansia Terdaftar" },
                  { value: "98%", label: "Tingkat Kepuasan" },
                  { value: "150+", label: "Posko Layanan" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 text-center rounded-lg bg-[#FAF5E6] border border-[#D4AF37]/30">
                    <div className="text-2xl font-bold text-[#5E4C12]">{stat.value}</div>
                    <div className="text-sm text-[#5E4C12]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maklumat Pelayanan */}
      <section id="maklumat" className="py-16 bg-[#FAF5E6]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#5E4C12]">
              Maklumat Pelayanan Sidaya
            </h2>
            <div className="w-20 h-1 mx-auto bg-[#D4AF37]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 bg-white shadow-sm rounded-xl border border-[#D4AF37]/30">
                <h3 className="mb-4 text-xl font-semibold text-[#B38E2D]">Hak Penerima Layanan</h3>
                <ul className="space-y-3">
                  {[
                    "Mendapatkan pelayanan yang ramah, cepat, dan profesional",
                    "Memperoleh informasi yang jelas tentang prosedur pelayanan",
                    "Memberikan masukan, kritik, dan saran untuk perbaikan pelayanan",
                    "Mendapatkan pelayanan tanpa diskriminasi",
                    "Data pribadi dijamin kerahasiaannya"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex items-center justify-center w-5 h-5 mt-1 mr-3 bg-[#D4AF37] rounded-full text-white text-xs flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#5E4C12]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-white shadow-sm rounded-xl border border-[#D4AF37]/30">
                <h3 className="mb-4 text-xl font-semibold text-[#B38E2D]">Kewajiban Penerima Layanan</h3>
                <ul className="space-y-3">
                  {[
                    "Mematuhi prosedur dan ketentuan pelayanan yang berlaku",
                    "Memberikan data dan informasi yang benar dan valid",
                    "Menjaga ketertiban dan kenyamanan lingkungan pelayanan",
                    "Menghormati petugas dan penerima layanan lainnya",
                    "Menggunakan fasilitas dengan bertanggung jawab"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex items-center justify-center w-5 h-5 mt-1 mr-3 bg-[#D4AF37] rounded-full text-white text-xs flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#5E4C12]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-6 mt-8 bg-white rounded-xl shadow-md border-l-4 border-[#D4AF37]">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                  <Clock className="w-8 h-8 mr-4 text-[#D4AF37]" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#5E4C12]">Jam Pelayanan</h3>
                    <p className="text-[#5E4C12]">Senin - Jumat (kecuali hari libur nasional)</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:flex-1">
                  <div className="p-3 rounded-lg bg-[#FAF5E6] border border-[#D4AF37]/30">
                    <p className="font-medium text-[#5E4C12]">Senin - Kamis</p>
                    <p className="text-[#5E4C12] font-bold">08.00 - 15.00 WIB</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF5E6] border border-[#D4AF37]/30">
                    <p className="font-medium text-[#5E4C12]">Jumat</p>
                    <p className="text-[#5E4C12] font-bold">08.00 - 14.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standar Layanan */}
      <section id="standar" className="py-16 bg-[#FFFDF6]">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#5E4C12]">
              Standar Layanan Sidaya
            </h2>
            <div className="w-20 h-1 mx-auto bg-[#D4AF37]"></div>
            <p className="max-w-2xl mx-auto mt-4 text-[#5E4C12]">
              Kami berkomitmen memberikan pelayanan terbaik dengan standar yang jelas dan terukur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceStandards.map((standard, index) => (
              <div 
                key={index} 
                className="p-6 transition-all bg-gradient-to-b from-[#FAF5E6] to-white hover:from-[#D4AF37]/10 hover:to-[#FAF5E6] border border-[#D4AF37]/30 rounded-xl hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#D4AF37]/10">
                  {standard.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#5E4C12]">{standard.title}</h3>
                <p className="text-[#5E4C12]">{standard.description}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-semibold text-[#5E4C12]">
                Prosedur Pengajuan Layanan
              </h3>
              <p className="text-[#5E4C12]">Langkah-langkah mudah untuk mendapatkan layanan Sidaya</p>
            </div>
            
            <div className="relative">
              <div className="absolute hidden h-full transform -translate-x-1/2 border-l-2 border-dashed border-[#D4AF37]/50 left-7 top-10 md:block"></div>
              
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Registrasi",
                    description: "Mengisi formulir pendaftaran online atau offline dengan data yang valid",
                    icon: <FileText className="w-6 h-6 text-[#D4AF37]" />
                  },
                  {
                    step: "2",
                    title: "Verifikasi",
                    description: "Petugas akan memverifikasi data dalam waktu 1x24 jam",
                    icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                  },
                  {
                    step: "3",
                    title: "Penjadwalan",
                    description: "Anda akan menerima jadwal pelayanan melalui SMS/email",
                    icon: <Clock className="w-6 h-6 text-[#D4AF37]" />
                  },
                  {
                    step: "4",
                    title: "Pelayanan",
                    description: "Datang ke lokasi sesuai jadwal dengan membawa dokumen yang diperlukan",
                    icon: <Info className="w-6 h-6 text-[#D4AF37]" />
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex">
                    <div className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37] text-white font-bold z-10 md:relative md:mr-6">
                      {item.step}
                    </div>
                    <div className="flex-1 p-6 ml-8 bg-white border border-[#D4AF37]/30 rounded-lg shadow-sm md:ml-0">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center justify-center w-10 h-10 mr-4 rounded-full bg-[#D4AF37]/10">
                          {item.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-[#B38E2D]">{item.title}</h4>
                      </div>
                      <p className="text-[#5E4C12]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 mt-12 text-center bg-[#FAF5E6] rounded-xl border border-[#D4AF37]/30">
              <h3 className="mb-3 text-xl font-semibold text-[#5E4C12]">Butuh Bantuan?</h3>
              <p className="mb-4 text-[#5E4C12]">Tim kami siap membantu Anda melalui berbagai saluran komunikasi</p>
              <Button className="bg-[#D4AF37] hover:bg-[#B38E2D] px-8 py-6 text-lg text-white">
                Hubungi Kami Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Lain */}
      <section id="informasi" className="py-16 bg-[#FAF5E6]">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#5E4C12]">
            Informasi Lainnya
          </h2>
          
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-[#D4AF37]/30">
              <h3 className="mb-4 text-xl font-semibold text-[#B38E2D]">Dokumen dan Formulir</h3>
              <ul className="space-y-3">
                {[
                  "Formulir Pendaftaran Lansia",
                  "Panduan Layanan Sidaya",
                  "Prosedur Operasional Standar",
                  "Laporan Tahunan Sidaya"
                ].map((doc, index) => (
                  <li key={index} className="flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-[#D4AF37]" />
                    <Link href="#" className="text-[#5E4C12] hover:underline hover:text-[#D4AF37]">{doc}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm border border-[#D4AF37]/30">
              <h3 className="mb-4 text-xl font-semibold text-[#B38E2D]">Hubungi Kami</h3>
              <div className="space-y-4">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-[#5E4C12]">{contact.title}</p>
                      {contact.link ? (
                        <Link href={contact.link} className="text-[#5E4C12] hover:underline hover:text-[#D4AF37]">{contact.value}</Link>
                      ) : (
                        <p className="text-[#5E4C12]">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="mb-2 font-semibold text-[#5E4C12]">Media Sosial</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="p-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#B38E2D]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  <Link href="#" className="p-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#B38E2D]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="p-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#B38E2D]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}