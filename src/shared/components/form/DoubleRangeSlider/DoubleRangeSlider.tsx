'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

type DragTarget = 'min' | 'max' | null;

interface CustomDoubleSliderProps {
  min?: number;
  max?: number;
}

const CustomDoubleSlider: React.FC<CustomDoubleSliderProps> = ({
  min = 0,
  max = 100,
}) => {
  const t = useTranslations('catalogPage.filter');

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const [dragging, setDragging] = useState<DragTarget>(null);

  const getPercent = (val: number): number => ((val - min) / (max - min)) * 100;

  const handleMouseDown = (target: DragTarget) => () => setDragging(target);

  const handleMouseMove = (e: MouseEvent): void => {
    if (!dragging || !trackRef.current) return;

    const { left, width } = trackRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max((e.clientX - left) / width, 0), 1);
    const value = Math.round(min + percent * (max - min));

    if (dragging === 'min') {
      if (value < maxVal) setMinVal(value);
    } else if (dragging === 'max') {
      if (value > minVal) setMaxVal(value);
    }
  };

  const handleMouseUp = (): void => setDragging(null);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div className="w-full relative">
      {/* Метки */}
      <div className="w-full mb-8 flex justify-between text-[14px] font-semibold text-dark px-1">
        <div>{t('from')}</div>
        <div>{t('to')}</div>
      </div>

      {/* Трек */}
      <div ref={trackRef} className="relative h-[2px] bg-dark rounded mt-[5px]">
        {/* Активный диапазон */}
        <div
          className="absolute h-[2px] bg-dark rounded"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal - minVal)}%`,
          }}
        ></div>

        {/* Минимальный ползунок + цифра */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${getPercent(minVal)}%` }}
        >
          <div
            className="px-2 py-1 text-[12px] text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none"
            onMouseDown={handleMouseDown('min')}
          >
            {minVal}
          </div>
        </div>

        {/* Максимальный ползунок + цифра */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${getPercent(maxVal)}%`,
            transform: 'translateX(-100%)',
          }}
        >
          <div
            className="text-[12px] px-2 py-1 text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none"
            onMouseDown={handleMouseDown('max')}
          >
            {maxVal}
          </div>
        </div>
      </div>
      <div className="w-full mt-6 flex justify-between text-[14px] font-semibold text-black px-1">
        <p className="text-[16px] font-normal">{min}</p>
        <p className="text-[16px] font-normal">{max}</p>
      </div>
    </div>
  );
};

export default CustomDoubleSlider;
