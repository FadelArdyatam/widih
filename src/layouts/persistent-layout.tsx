// resources/js/Layouts/PersistentLayout.tsx
import { ReactNode } from 'react';
import Header from './app/header';
import Footer from './app/footer';

export default function PersistentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header /> {/* Navbar akan muncul di semua halaman */}
      <main>{children}</main> {/* Konten halaman */}
      <Footer/>
    </div>
  );
}