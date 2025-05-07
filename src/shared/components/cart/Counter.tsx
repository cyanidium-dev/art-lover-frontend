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
    <div
      className={`flex items-center justify-between py-[7px] lg:py-[9px] border-[1.5px] border-black rounded-full ${className}`}
    >
      <button
        className="group flex items-center justify-center size-5"
        onClick={onMinusClick}
        disabled={count === 0}
        aria-label="minus"
      >
        <MinusIcon />
      </button>
      <span className="">{count}</span>
      <button
        className="flex items-center justify-center size-5"
        onClick={onPlusClick}
        aria-label="plus"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
