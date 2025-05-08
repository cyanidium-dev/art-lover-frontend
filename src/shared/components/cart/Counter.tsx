'use client';
import { useState, useEffect } from 'react';
import PlusIcon from '../icons/PlusIcon';
import MinusIcon from '../icons/MinusIcon';

interface CounterProps {
  className?: string;
}

export default function Counter({ className = '' }: CounterProps) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, []);

  const onMinusClick = () => {
    setCount(count - 1);
  };

  const onPlusClick = () => {
    setCount(count + 1);
  };

  return (
    <div className={`flex items-center gap-x-[14px] text-white ${className}`}>
      <button
        className="group flex items-center justify-center size-3 text-white"
        onClick={onMinusClick}
        disabled={count === 1}
        aria-label="minus"
      >
        <MinusIcon />
      </button>
      <div className="flex items-center justify-center w-[29px] xl:w-[38px] h-[23px] xl:h-7 border border-white rounded-[4px] text-[12px] xl:text-[]14px font-semibold leading-[120%]">
        {count}
      </div>
      <button
        className="flex items-center justify-center size-3 xl:size-4"
        onClick={onPlusClick}
        aria-label="plus"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
