'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

type DragTarget = 'min' | 'max' | null;

interface CustomDoubleSliderProps {
  min?: number;
  max?: number;
  maxSuffix?: string; // новий пропс для додаткового суфікса (наприклад "+")
}

const CustomDoubleSlider: React.FC<CustomDoubleSliderProps> = ({
  min = 0,
  max = 100,
  maxSuffix = '', // за замовчуванням пусто
}) => {
  const t = useTranslations('catalogPage.filter');

  const trackRef = useRef<HTMLDivElement | null>(null);
  const minHandleRef = useRef<HTMLDivElement | null>(null);
  const maxHandleRef = useRef<HTMLDivElement | null>(null);

  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const [dragging, setDragging] = useState<DragTarget>(null);

  const getPercent = (val: number): number => ((val - min) / (max - min)) * 100;

  const getValueFromPercent = (percent: number): number =>
    Math.round(min + percent * (max - min));

  const handleMouseDown = (target: DragTarget) => () => setDragging(target);

  const handleMouseMove = (e: MouseEvent): void => {
    if (!dragging || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const trackLeft = trackRect.left;
    const trackWidth = trackRect.width;

    const handleWidth =
      minHandleRef.current?.offsetWidth ||
      maxHandleRef.current?.offsetWidth ||
      0;

    const handlePercentWidth = (handleWidth / trackWidth) * 100;

    let relativeX = e.clientX - trackLeft;
    if (relativeX < 0) relativeX = 0;
    if (relativeX > trackWidth) relativeX = trackWidth;

    const percent = relativeX / trackWidth;
    let value = getValueFromPercent(percent);

    if (dragging === 'min') {
      const maxPercent = getPercent(maxVal) / 100 - handlePercentWidth / 100;
      const clampedPercent = Math.min(percent, maxPercent);

      value = getValueFromPercent(clampedPercent);
      value = Math.max(value, min);

      setMinVal(value);
    } else if (dragging === 'max') {
      const minPercent = getPercent(minVal) / 100 + handlePercentWidth / 100;
      const clampedPercent = Math.max(percent, minPercent);

      value = getValueFromPercent(clampedPercent);
      value = Math.min(value, max);

      setMaxVal(value);
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
    <div className="w-full relative select-none">
      {/* Метки */}
      <div className="w-full mb-8 flex justify-between text-[14px] font-semibold text-dark px-1">
        <div>{t('from')}</div>
        <div>{t('to')}</div>
      </div>

      {/* Трек */}
      <div ref={trackRef} className="relative h-[2px] bg-dark rounded mt-[5px]">
        {/* Активний діапазон */}
        <div
          className="absolute h-[2px] bg-dark rounded"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal - minVal)}%`,
          }}
        ></div>

        {/* Мінімальний повзунок + цифра */}
        <div
          ref={minHandleRef}
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${getPercent(minVal)}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown('min')}
        >
          <div className="px-2 py-1 text-[12px] text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none">
            {minVal}
          </div>
        </div>

        {/* Максимальний повзунок + цифра */}
        <div
          ref={maxHandleRef}
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${getPercent(maxVal)}%`,
            transform: 'translateX(-50%)',
          }}
          onMouseDown={handleMouseDown('max')}
        >
          <div className="text-[12px] px-2 py-1 text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer select-none">
            {maxVal}
          </div>
        </div>
      </div>

      {/* Мінімальне та максимальне значення під треком з суфіксом для max */}
      <div className="w-full mt-6 flex justify-between text-[14px] font-semibold text-black px-1">
        <p className="text-[16px] font-normal">{min}</p>
        <p className="text-[16px] font-normal">
          {max}
          {maxSuffix}
        </p>
      </div>
    </div>
  );
};

export default CustomDoubleSlider;
