'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImagePickerProps {
  currentProduct: Product;
}

export default function ImagePicker({ currentProduct }: ImagePickerProps) {
  const { images } = currentProduct;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setActiveIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div className="mb-8">
      {/* Основне велике зображення */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
        <Image
          src={images[activeIndex].url}
          alt={images[activeIndex].alt || ''}
          fill
          className="object-cover"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Галерея з мініатюрами */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-16 h-16 min-w-16 rounded-md overflow-hidden border-2 ${
              activeIndex === idx ? 'border-orange-500' : 'border-transparent'
            }`}
          >
            <Image
              src={img.url}
              alt={img.alt || ''}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
