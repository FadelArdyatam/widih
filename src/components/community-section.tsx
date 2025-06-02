
import { Button } from "@/components/ui/button"
import { UserCircle, Zap } from "lucide-react"
import Link from "next/link"


export default function CommunitySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/Sidaya/bergabung.png"
              alt="Komunitas SIDAYA"
              width={600}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Bergabunglah dengan Komunitas SIDAYA!</h2>
            <p className="text-lg text-gray-700">
              Dapatkan informasi terbaru dan manfaatkan sumber daya kami untuk menjadi lansia berdaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-[#FFB200] hover:bg-[#E6A100] text-black font-medium px-6 py-6">
                <Link href="/register">
                  <Zap className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-300 text-gray-700 font-medium px-6 py-6">
                <Link href="/informasi/kontak">
                  <UserCircle className="mr-2 h-5 w-5" />
                  Hubungi Tim Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
