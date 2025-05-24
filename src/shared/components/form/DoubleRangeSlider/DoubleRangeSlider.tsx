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
  const minHandleRef = useRef<HTMLDivElement | null>(null);
  const maxHandleRef = useRef<HTMLDivElement | null>(null);

  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const [dragging, setDragging] = useState<DragTarget>(null);

  // Відсоток позиції повзунка по треку
  const getPercent = (val: number): number => ((val - min) / (max - min)) * 100;

  // Значення по відсотку позиції повзунка
  const getValueFromPercent = (percent: number): number =>
    Math.round(min + percent * (max - min));

  const handleMouseDown = (target: DragTarget) => () => setDragging(target);

  const handleMouseMove = (e: MouseEvent): void => {
    if (!dragging || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const trackLeft = trackRect.left;
    const trackWidth = trackRect.width;

    // Визначаємо ширину повзунка (вважаємо ширину одного повзунка)
    const handleWidth =
      minHandleRef.current?.offsetWidth ||
      maxHandleRef.current?.offsetWidth ||
      0;

    // Відповідний відсоток ширини повзунка від треку
    const handlePercentWidth = (handleWidth / trackWidth) * 100;

    // Відносна позиція курсора (пікселі)
    let relativeX = e.clientX - trackLeft;

    // Обмежуємо в межах треку
    if (relativeX < 0) relativeX = 0;
    if (relativeX > trackWidth) relativeX = trackWidth;

    // Відсоток від треку
    const percent = relativeX / trackWidth;

    // Відповідне значення
    let value = getValueFromPercent(percent);

    if (dragging === 'min') {
      // Максимально можна рухатися до maxVal в відсотках мінус ширина повзунка
      const maxPercent = getPercent(maxVal) / 100 - handlePercentWidth / 100;
      const clampedPercent = Math.min(percent, maxPercent);

      // Перерахунок value з урахуванням clampedPercent
      value = getValueFromPercent(clampedPercent);

      // Обмеження по мінімуму
      value = Math.max(value, min);

      setMinVal(value);
    } else if (dragging === 'max') {
      // Мінімально можна рухатися до minVal в відсотках плюс ширина повзунка
      const minPercent = getPercent(minVal) / 100 + handlePercentWidth / 100;
      const clampedPercent = Math.max(percent, minPercent);

      // Перерахунок value з урахуванням clampedPercent
      value = getValueFromPercent(clampedPercent);

      // Обмеження по максимуму
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

      {/* Мінімальне та максимальне значення під треком */}
      <div className="w-full mt-6 flex justify-between text-[14px] font-semibold text-black px-1">
        <p className="text-[16px] font-normal">{min}</p>
        <p className="text-[16px] font-normal">{max}</p>
      </div>
    </div>
  );
};

export default CustomDoubleSlider;
