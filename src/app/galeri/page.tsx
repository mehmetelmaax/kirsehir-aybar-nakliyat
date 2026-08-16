import React from 'react';
import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { Camera } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Hizmet Faaliyet Galerimiz',
  description: "Kırşehir Aybar Nakliyat asansörlü taşıma araçları, paketleme işlemleri ve ekip çalışmalarına ait gerçek operasyon fotoğrafları galerisi.",
  alternates: {
    canonical: '/galeri',
  },
};

interface GalleryItem {
  src: string;
  title: string;
  desc: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/img/kirsehir-nakliyat-faaliyet-1.jpeg',
    title: 'Eşya Yükleme ve İstifleme',
    desc: 'Kapalı kasa nakliyat tırımıza eşyaların hasar görmeyecek şekilde düzenli istiflenmesi.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait eşya yükleme ve i̇stifleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-2.jpeg',
    title: 'Profesyonel Ambalajlama İşlemi',
    desc: 'Eşyaların taşınma esnasında çizilmesini önleyen kalın balonlu patpat naylon sarımı.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait profesyonel ambalajlama i̇şlemi gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-3.jpeg',
    title: 'Asansörlü Nakliye Kurulumu',
    desc: 'Yüksek katlı binalarda güvenli taşıma sağlayan mobil asansör sistemimiz.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait asansörlü nakliye kurulumu gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-4.jpeg',
    title: 'Marangozlu De-montaj Hizmeti',
    desc: 'Mobilyalarınızın taşınma öncesinde uzman marangozumuzca sökülmesi ve numaralandırılması.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait marangozlu de-montaj hizmeti gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-5.jpeg',
    title: 'Hassas Eşya Paketleme',
    desc: 'Kırılacak cam ve mutfak eşyalarının Kraft kağıtlarla sarılıp kolilere yerleştirilmesi.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait hassas eşya paketleme gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-6.jpeg',
    title: 'Şehirlerarası Nakliye Sevk',
    desc: 'Kırşehir Merkez merkezimizden diğer illere yola çıkmaya hazır kapalı kasa taşıma aracımız.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait şehirlerarası nakliye sevk gerçek faaliyet fotoğrafı",
  },
  {
    src: '/img/kirsehir-nakliyat-faaliyet-7.jpeg',
    title: 'Güvenli Taşımacılık Ekibi',
    desc: 'Kırşehir Aybar Nakliyat güvencesiyle uzman kadromuz iş başında.',
    alt: "Kırşehir Aybar Evden Eve Nakliyat firmasına ait güvenli taşımacılık ekibi gerçek faaliyet fotoğrafı",
  }
];

export default function GalleryPage() {
  return (
    <>
      
      <main className="pt-24 bg-off-white min-h-screen">
        <Breadcrumb items={[{ name: 'Galeri', url: '/galeri' }]} className="pt-4" />
        {/* Intro */}
        <section className="py-16 bg-navy text-white text-center space-y-4">
          <span className="text-orange font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1">
            <Camera className="w-4 h-4 text-orange" />
            <span>Faaliyetlerimiz</span>
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl tracking-tight leading-tight">
            Hizmet Galerisi
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Eşya paketleme, asansör kurulumu ve taşıma anlarına ait gerçek operasyon fotoğraflarımız.
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Faaliyet Alanlarımız ve Araç Filomuz</h2>
          <GalleryGrid items={galleryItems} />
        </section>
      </main>
    </>
  );
}
