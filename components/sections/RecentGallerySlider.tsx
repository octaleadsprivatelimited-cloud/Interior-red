'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const recentImages = [
  { src: '/images/project-gallery-01-feature-wall.jpg', alt: 'Illuminated feature wall' },
  { src: '/images/project-gallery-02-kitchen.jpg', alt: 'Classic kitchen cabinetry' },
  { src: '/images/project-gallery-03-lounge.jpg', alt: 'Warm lounge corner' },
  { src: '/images/project-gallery-04-open-kitchen.jpg', alt: 'Open kitchen and dining area' },
  { src: '/images/project-gallery-05-dining.jpg', alt: 'Dining and display area' },
  { src: '/images/project-gallery-06-arched-door.jpg', alt: 'Decorative arched door' },
  { src: '/images/project-gallery-07-feature-panel.jpg', alt: 'Botanical feature panel' },
  { src: '/images/project-gallery-08-bedroom.jpg', alt: 'Contemporary bedroom' },
  { src: '/images/project-gallery-09-wardrobe.jpg', alt: 'Full-height wardrobe' },
  { src: '/images/project-gallery-10-washroom.jpg', alt: 'Vanity niche' },
  { src: '/images/project-gallery-11-prayer-space.jpg', alt: 'Custom prayer space' },
  { src: '/images/project-gallery-12-decorative-wardrobe.jpg', alt: 'Decorative wardrobe' },
];

const existingGalleryImages = [
  { src: '/images/Gallery-1.jpg', alt: 'Living room interior design' },
  { src: '/images/Gallery-2.jpg', alt: 'Bedroom interior design' },
  { src: '/images/Gallery-3.jpg', alt: 'Office interior design' },
  { src: '/images/Gallery-4.JPG', alt: 'Kitchen interior design' },
  { src: '/images/Gallery-5.JPG', alt: 'Hospitality interior design' },
  { src: '/images/Gallery-6.JPG', alt: 'Dining room interior design' },
  { src: '/images/Gallery-7.JPG', alt: 'Penthouse interior design' },
  { src: '/images/Gallery-8.jpg', alt: 'Bathroom interior design' },
  { src: '/images/Gallery-9.jpg', alt: 'Co-working interior design' },
];

const allGalleryImages = [...recentImages, ...existingGalleryImages];

export default function RecentGallerySlider() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollingImages = [...recentImages, ...recentImages];
  const selectedImage = selectedIndex === null ? null : allGalleryImages[selectedIndex];

  const moveImage = (direction: number) => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return (currentIndex + direction + allGalleryImages.length) % allGalleryImages.length;
    });
  };

  return (
    <section className="bg-white py-10 sm:py-14 overflow-hidden" aria-label="Recent interior design projects">
      <div className="container-custom mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-600">Recent projects</p>
      </div>

      <div className="recent-gallery-marquee">
        <div className="recent-gallery-track">
          {scrollingImages.map((image, index) => (
            <button
              type="button"
              key={`${image.src}-${index}`}
              className="recent-gallery-card group"
              aria-label={`Open ${image.alt}`}
              onClick={() => setSelectedIndex(index % recentImages.length)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 62vw, (max-width: 1024px) 34vw, 24vw"
                quality={90}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.alt}, image ${selectedIndex + 1} of ${allGalleryImages.length}`}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelectedIndex(null)} className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35" aria-label="Close image viewer">
              <X className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => moveImage(-1)} className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35 sm:left-4" aria-label="Previous image">
              <ChevronLeft className="h-7 w-7" />
            </button>
            <div className="relative h-full w-full px-12 py-14 sm:px-20">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill sizes="100vw" quality={90} className="object-contain" priority />
            </div>
            <button type="button" onClick={() => moveImage(1)} className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35 sm:right-4" aria-label="Next image">
              <ChevronRight className="h-7 w-7" />
            </button>
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {selectedIndex + 1} / {allGalleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
