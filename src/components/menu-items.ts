export const menuItems = {
  beranda: {
    label: null,
    mainLink: "/",
    dropdown: null,
  },


  // revisi menu

tentangKami: {
  label: "Tentang Kami",
  mainLink: "/tentang-kami",
  dropdown: [
    { name: "Profil", href: "/tentang-kami/profil" },
    { name: "Maklumat Pelayanan", href: "/tentang-kami/maklumat-pelayanan" },
    { name: "Standar Layanan", href: "/tentang-kami/standar-layanan" },
    { name: "Pengaduan", href: "/tentang-kami/pengaduan" },
    { name: "Survei Kepuasan", href: "/tentang-kami/survei-kepuasan" },
    { name: "Informasi Lain", href: "/tentang-kami/informasi-lain" },
  ],
},
bkl: {
  label: "BKL",
  mainLink: "/bkl",
  dropdown: [
    { name: "Sekolah Lansia", href: "/bkl/sekolah-lansia" },
    { name: "Lansia Enterpreneur", href: "/bkl/lansia-enterpreneur" },
    { name: "KARTU LANSIA", href: "/bkl/kartu-lansia" },
    { name: "Pemeriksaan kesehatan", href: "/bkl/pemeriksaan-kesehatan" },
    { name: "Pendampingan pjp", href: "/bkl/pendampingan-pjp" },
  ],
},
kalkulatorKesehatan: {
  label: "Kalkulator Kesehatan",
  mainLink: "/kalkulator-kesehatan",
  dropdown: [
    { name: "ADL", href: "/kalkulator-kesehatan/adl" },
    { name: "IADL", href: "/kalkulator-kesehatan/iadl" },
    { name: "GDS", href: "/kalkulator-kesehatan/gds" },
    { name: "Demensia", href: "/kalkulator-kesehatan/demensia" },
    { name: "Indeks kebahagiaan", href: "/kalkulator-kesehatan/indeks-kebahagiaan" },
    { name: "Resiko jatuh", href: "/kalkulator-kesehatan/resiko-jatuh" },
    { name: "Difabel", href: "/kalkulator-kesehatan/difabel" },
    { name: "BMI", href: "/kalkulator-kesehatan/bmi" },
  ],
},
temukanLokasi: {
  label: "Temukan Lokasi",
  mainLink: "/temukan-lokasi",
  dropdown: [
    { name: "Bina Keluarga Lansia (BKL)", href: "/temukan-lokasi/bkl" },
    { name: "Sekolah Lansia", href: "/temukan-lokasi/sekolah-lansia" },
    { name: "Panti Wreda", href: "/temukan-lokasi/panti-wreda" },
  ],
},
sidaya: {
  label: "Sidaya",
  mainLink: "/sidaya",
  dropdown: [
    { name: "Pencatatan dan pelaporan", href: "/sidaya/pencatatan-dan-pelaporan" },
    { name: "Dashboard", href: "/sidaya/dashboard" },
  ],
},
}


export const menuItems2 = {
  beranda: {
    mainLink: "/",
    dropdown: null,
  },
  artikel: {
    mainLink: "/artikel",
    dropdown: [
      { name: "Artikel", href: "/artikel/artikel" },
      { name: "Tips Kesehatan Lansia", href: "/artikel/tips-kesehatan" },
      { name: "Info Penyakit Lansia", href: "/artikel/info-penyakit" },
      { name: "Info Kegiatan Lansia", href: "/artikel/info-kegiatan" },
      { name: "Lansia Tangguh / Kreatif", href: "/artikel/lansia-tangguh" },
      { name: "Regulasi & Program Lansia", href: "/artikel/regulasi-program" },
      { name: "Program Kelansiaan Lembaga & Mitra", href: "/artikel/program-lembaga" },
      { name: "Publikasi", href: "/artikel/publikasi" },
      { name: "Materi", href: "/artikel/materi" },
    ],
  },
  dimensiLantang: {
    mainLink: "/dimensi-lantang",
    dropdown: [
      { name: "Spiritual", href: "/dimensi/spiritual" },
      { name: "Intelektual", href: "/dimensi/intelektual" },
      { name: "Fisik", href: "/dimensi/fisik" },
      { name: "Emosional", href: "/dimensi/emosional" },
      { name: "Sosial Kemasyarakatan", href: "/dimensi/sosial" },
      { name: "Profesional Vokasional", href: "/dimensi/profesional" },
      { name: "Lingkungan", href: "/dimensi/lingkungan" },
    ],
  },
  informasi: {
    mainLink: "/informasi",
    dropdown: [
      { name: "Data Lansia Memiliki JKN", href: "/informasi/data-jkn" },
      { name: "Data Keluarga Lansia", href: "/informasi/data-keluarga" },
      { name: "Lomba 1000 Artikel", href: "/informasi/lomba-artikel" },
      { name: "Infografis", href: "/informasi/infografis" },
      { name: "Kontak Kami", href: "/informasi/kontak" },
    ],
  },
  pencatatan: {
    mainLink: "/pencatatan",
    dropdown: [
      { name: "Formulir Pendaftaran", href: "/pencatatan/pendaftaran" },
      { name: "Laporan Kegiatan", href: "/pencatatan/laporan" },
      { name: "Statistik", href: "/pencatatan/statistik" },
      { name: "Arsip", href: "/pencatatan/arsip" },
    ],
  },
}
