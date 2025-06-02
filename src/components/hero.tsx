import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1024 545"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M3.05176e-05 427.424V92H512V510L3.05176e-05 427.424Z" fill="#DFC07B" fillOpacity="0.95" />
          <path d="M1024 427.424V92H512V510L1024 427.424Z" fill="#DFC07B" fillOpacity="0.95" />
          <path d="M3.05176e-05 376.653V-165H512V510L3.05176e-05 376.653Z" fill="url(#paint0_linear_1_253)" />
          <path d="M1024 376.653V-165H512V510L1024 376.653Z" fill="url(#paint1_linear_1_253)" />
          <g filter="url(#filter0_f_1_253)">
            <circle cx="722" cy="120" r="10" fill="#E1BF71" />
            <circle cx="722" cy="151" r="10" fill="#E1BF71" />
            <circle cx="722" cy="182" r="10" fill="#E1BF71" />
            <circle cx="722" cy="213" r="10" fill="#E1BF71" />
            <circle cx="722" cy="244" r="10" fill="#E1BF71" />
            <circle cx="753" cy="120" r="10" fill="#E1BF71" />
            <circle cx="753" cy="151" r="10" fill="#E1BF71" />
            <circle cx="753" cy="182" r="10" fill="#E1BF71" />
            <circle cx="753" cy="213" r="10" fill="#E1BF71" />
            <circle cx="753" cy="244" r="10" fill="#E1BF71" />
            <circle cx="784" cy="120" r="10" fill="#E1BF71" />
            <circle cx="784" cy="151" r="10" fill="#E1BF71" />
            <circle cx="784" cy="182" r="10" fill="#E1BF71" />
            <circle cx="784" cy="213" r="10" fill="#E1BF71" />
            <circle cx="784" cy="244" r="10" fill="#E1BF71" />
            <circle cx="815" cy="120" r="10" fill="#E1BF71" />
            <circle cx="815" cy="151" r="10" fill="#E1BF71" />
            <circle cx="815" cy="182" r="10" fill="#E1BF71" />
            <circle cx="815" cy="213" r="10" fill="#E1BF71" />
            <circle cx="815" cy="244" r="10" fill="#E1BF71" />
            <circle cx="784" cy="213" r="10" fill="#E1BF71" />
            <circle cx="784" cy="244" r="10" fill="#E1BF71" />
            <circle cx="784" cy="275" r="10" fill="#E1BF71" />
            <circle cx="784" cy="306" r="10" fill="#E1BF71" />
            <circle cx="784" cy="337" r="10" fill="#E1BF71" />
            <circle cx="815" cy="213" r="10" fill="#E1BF71" />
            <circle cx="815" cy="244" r="10" fill="#E1BF71" />
            <circle cx="815" cy="275" r="10" fill="#E1BF71" />
            <circle cx="815" cy="306" r="10" fill="#E1BF71" />
            <circle cx="815" cy="337" r="10" fill="#E1BF71" />
            <circle cx="846" cy="213" r="10" fill="#E1BF71" />
            <circle cx="846" cy="244" r="10" fill="#E1BF71" />
            <circle cx="846" cy="275" r="10" fill="#E1BF71" />
            <circle cx="846" cy="306" r="10" fill="#E1BF71" />
            <circle cx="846" cy="337" r="10" fill="#E1BF71" />
            <circle cx="877" cy="213" r="10" fill="#E1BF71" />
            <circle cx="877" cy="244" r="10" fill="#E1BF71" />
            <circle cx="877" cy="275" r="10" fill="#E1BF71" />
            <circle cx="877" cy="306" r="10" fill="#E1BF71" />
            <circle cx="877" cy="337" r="10" fill="#E1BF71" />
          </g>
          <g filter="url(#filter1_f_1_253)">
            <circle cx="147" cy="120" r="10" fill="#E1BF71" />
            <circle cx="147" cy="151" r="10" fill="#E1BF71" />
            <circle cx="147" cy="182" r="10" fill="#E1BF71" />
            <circle cx="147" cy="213" r="10" fill="#E1BF71" />
            <circle cx="147" cy="244" r="10" fill="#E1BF71" />
            <circle cx="178" cy="120" r="10" fill="#E1BF71" />
            <circle cx="178" cy="151" r="10" fill="#E1BF71" />
            <circle cx="178" cy="182" r="10" fill="#E1BF71" />
            <circle cx="178" cy="213" r="10" fill="#E1BF71" />
            <circle cx="178" cy="244" r="10" fill="#E1BF71" />
            <circle cx="209" cy="120" r="10" fill="#E1BF71" />
            <circle cx="209" cy="151" r="10" fill="#E1BF71" />
            <circle cx="209" cy="182" r="10" fill="#E1BF71" />
            <circle cx="209" cy="213" r="10" fill="#E1BF71" />
            <circle cx="209" cy="244" r="10" fill="#E1BF71" />
            <circle cx="240" cy="120" r="10" fill="#E1BF71" />
            <circle cx="240" cy="151" r="10" fill="#E1BF71" />
            <circle cx="240" cy="182" r="10" fill="#E1BF71" />
            <circle cx="240" cy="213" r="10" fill="#E1BF71" />
            <circle cx="240" cy="244" r="10" fill="#E1BF71" />
            <circle cx="209" cy="213" r="10" fill="#E1BF71" />
            <circle cx="209" cy="244" r="10" fill="#E1BF71" />
            <circle cx="209" cy="275" r="10" fill="#E1BF71" />
            <circle cx="209" cy="306" r="10" fill="#E1BF71" />
            <circle cx="209" cy="337" r="10" fill="#E1BF71" />
            <circle cx="240" cy="213" r="10" fill="#E1BF71" />
            <circle cx="240" cy="244" r="10" fill="#E1BF71" />
            <circle cx="240" cy="275" r="10" fill="#E1BF71" />
            <circle cx="240" cy="306" r="10" fill="#E1BF71" />
            <circle cx="240" cy="337" r="10" fill="#E1BF71" />
            <circle cx="271" cy="213" r="10" fill="#E1BF71" />
            <circle cx="271" cy="244" r="10" fill="#E1BF71" />
            <circle cx="271" cy="275" r="10" fill="#E1BF71" />
            <circle cx="271" cy="306" r="10" fill="#E1BF71" />
            <circle cx="271" cy="337" r="10" fill="#E1BF71" />
            <circle cx="302" cy="213" r="10" fill="#E1BF71" />
            <circle cx="302" cy="244" r="10" fill="#E1BF71" />
            <circle cx="302" cy="275" r="10" fill="#E1BF71" />
            <circle cx="302" cy="306" r="10" fill="#E1BF71" />
            <circle cx="302" cy="337" r="10" fill="#E1BF71" />
          </g>
          <g filter="url(#filter2_f_1_253)">
            <rect x="479" y="-96" width="65" height="586" fill="url(#paint2_linear_1_253)" />
          </g>
          <defs>
            <filter id="filter0_f_1_253" x="702" y="100" width="195" height="257" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1_253" />
            </filter>
            <filter id="filter1_f_1_253" x="127" y="100" width="195" height="257" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_1_253" />
            </filter>
            <filter id="filter2_f_1_253" x="449" y="-126" width="125" height="646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1_253" />
            </filter>
            <linearGradient id="paint0_linear_1_253" x1="256" y1="-165" x2="256" y2="510" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F7EF8A" />
              <stop offset="0.365433" stopColor="#BF9118" />
            </linearGradient>
            <linearGradient id="paint1_linear_1_253" x1="768" y1="-165" x2="768" y2="510" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F7EF8A" />
              <stop offset="0.365433" stopColor="#BF9118" />
            </linearGradient>
            <linearGradient id="paint2_linear_1_253" x1="511.5" y1="-96" x2="511.5" y2="490" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F7EF8A" />
              <stop offset="0.293314" stopColor="#BF9118" />
            </linearGradient>
          </defs>
        </svg>

      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Selamat Datang di <span className="text-white">SIDAYA</span>
            </h1>
            <p className="max-w-lg text-lg text-gray-700 md:text-xl">
              Menghargai setiap langkah perjalanan hidup lansia.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="text-white transition-all shadow-lg bg-gradient-to-r from-[#ae862e] to-[#d2ac47] hover:from-[#d2ac47] hover:to-[#ae862e]">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50/70 hover:border-amber-600 hover:text-amber-700 group">
                <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text group-hover:from-amber-600 group-hover:to-amber-700">
                  Learn More
                </span>
              </Button>
            </div>
          </div>

          {/* Image Section - Replaced the placeholder */}
          <div className="relative">
            <div className="relative w-full overflow-hidden border-2 shadow-xl aspect-video rounded-xl border-amber-200/50">
              <img
                src="/images/senior-citizens.jpg"
                alt="Lansia bahagia bersama keluarga"
                className="object-cover w-full h-full rounded-lg"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-24 h-24 rounded-full opacity-30 -bottom-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 blur-xl"></div>
            <div className="absolute w-24 h-24 rounded-full opacity-30 -left-4 -top-4 bg-gradient-to-br from-amber-300 to-amber-500 blur-xl"></div>
            <div className="absolute -z-10 inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
