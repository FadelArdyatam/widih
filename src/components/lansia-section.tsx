import Image from "next/image";

export default function LansiaSection() {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-white md:py-24 lg:py-32">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1024 409"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="965.264" width="78.2948" height="42" transform="rotate(24.271 965.264 0)" fill="#BB9D4D" />
          <rect x="4.2642" y="339" width="77.7599" height="41.7246" transform="rotate(24.271 4.2642 339)" fill="#BB9D4D" />
          <rect x="14.0804" y="208.5" width="974.404" height="205.254" transform="rotate(-12.3555 14.0804 208.5)" fill="#BB9D4D" />
          <rect y="90" width="1024" height="278" fill="url(#paint0_linear_8_2)" />
          <rect width="1024" height="278" transform="matrix(1 0 0 -1 0 313)" fill="url(#paint1_linear_8_2)" />
          <rect y="66" width="1024" height="278" fill="url(#paint2_linear_8_2)" />
          <defs>
            <linearGradient id="paint0_linear_8_2" x1="512" y1="90" x2="512" y2="368" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC745" />
              <stop offset="1" stopColor="#D2AC47" />
            </linearGradient>
            <linearGradient id="paint1_linear_8_2" x1="512" y1="0" x2="512" y2="278" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFC745" />
              <stop offset="1" stopColor="#D2AC47" />
            </linearGradient>
            <linearGradient id="paint2_linear_8_2" x1="0" y1="205" x2="1024" y2="205" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8E180" />
              <stop offset="0.485632" stopColor="#D2AC47" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Abstract Image - Hidden on mobile */}
          <div className="hidden md:block md:w-1/4 opacity-30 lg:opacity-100">
            <Image
              src="/images/geometry-left.png"
              width={300}
              height={300}
              alt="Abstract geometric pattern"
              className="w-full max-w-[200px] lg:max-w-[300px] object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="w-full px-4 text-center md:w-1/2 lg:w-2/4">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl md:mb-6">
              Lansia Berdaya, Lansia Berkarya!
            </h2>
            <div className="flex flex-col justify-center gap-3 mt-6 md:mt-8 sm:flex-row sm:gap-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-900 transition-colors bg-[#9b6603] border-2 border-gray-900 rounded-full sm:px-6 sm:py-3 hover:bg-yellow-600 sm:text-base">
                Pelajari Lebih Lanjut
              </button>
              <button className="px-4 py-2 text-sm text-gray-900 transition-colors border-2 border-gray-900 rounded-full sm:px-6 sm:py-3 hover:bg-white/50 sm:text-base">
                Bergabung Sekarang
              </button>
            </div>
          </div>

          {/* Right Abstract Image - Hidden on mobile */}
          <div className="hidden md:block md:w-1/4 opacity-30 lg:opacity-100">
            <Image
              src="/images/geometry.png"
              width={300}
              height={300}
              alt="Abstract geometric pattern"
              className="w-full max-w-[200px] lg:max-w-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}