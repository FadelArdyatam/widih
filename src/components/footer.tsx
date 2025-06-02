import { Mail, Phone, MapPin } from "lucide-react"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">SIDAYA</h3>
            <p className="text-gray-300 mb-4">Layanan perawatan dan dukungan untuk lansia di atas 65 tahun.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  BERANDA
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  ARTIKEL
                </Link>
              </li>
              <li>
                <Link href="/dimensi-lantang" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  7DIMENSI LANTANG
                </Link>
              </li>
              <li>
                <Link href="/informasi" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  INFORMASI
                </Link>
              </li>
              <li>
                <Link href="/pencatatan" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  PENCATATAN DAN PELAPORAN
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  REGISTRASI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Jl. Permata No.1, Halim Perdanakusuma Jakarta Timur, 13650</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-yellow-500" />
                <div>
                  <p className="text-gray-300">0218098018 ext: 491</p>
                  <p className="text-gray-300">081299986001</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-yellow-500" />
                <div>
                  <p className="text-gray-300">dithanlan@bkkbn.go.id</p>
                  <p className="text-gray-300">sidaya@kemendukbangga.go.id</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Website</h3>
            <ul className="space-y-2">
              <li>
                <Link href="www.sidaya.kemendukbangga.go.id" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  www.sidaya.kemendukbangga.go.id
                </Link>
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">Fax</h3>
            <p className="text-gray-300">021-800855</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>Hak Cipta © Kemendukbangga - Kementerian Kependudukan dan Pembangunan Keluarga/Badan Kependudukan dan Keluarga Berencana Nasional</p>
        </div>
      </div>
    </footer>
  )
}