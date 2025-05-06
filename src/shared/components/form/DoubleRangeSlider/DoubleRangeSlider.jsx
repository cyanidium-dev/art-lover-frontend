"use client";

import React, { useRef, useState } from "react";

const CustomDoubleSlider = ({ min = 0, max = 100 }) => {
  const trackRef = useRef(null);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [dragging, setDragging] = useState(null); // "min" or "max"

  const getPercent = (val) => ((val - min) / (max - min)) * 100;

  const handleMouseDown = (target) => () => setDragging(target);

  const handleMouseMove = (e) => {
    if (!dragging || !trackRef.current) return;

    const { left, width } = trackRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max((e.clientX - left) / width, 0), 1);
    const value = Math.round(min + percent * (max - min));

    if (dragging === "min") {
      if (value < maxVal) setMinVal(value);
    } else if (dragging === "max") {
      if (value > minVal) setMaxVal(value);
    }
  };

  const handleMouseUp = () => setDragging(null);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div className="w-full pt-12 pb-[14px] relative">
      {/* Метки */}
      <div className="absolute w-full top-0 flex justify-between text-[14px] font-semibold text-black px-1">
        <div >Від</div>
        <div >До</div>
      </div>


      {/* Трек */}
      <div
        ref={trackRef}
        className="relative h-[2px] bg-[#3A3A3A] rounded mt-[5px]"
      >
        {/* Активный диапазон */}
        <div
          className="absolute h-[2px] bg-[#3A3A3A] rounded"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${getPercent(maxVal - minVal)}%`,
          }}
        ></div>

        {/* Минимальный ползунок + цифра */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${getPercent(minVal)}%`,  }}
        >
          <div
            className=" h-[23px] text-[12px] px-[4px] text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer"
            onMouseDown={handleMouseDown("min")}
          >{minVal}</div>
        </div>

        {/* Максимальный ползунок + цифра */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${getPercent(maxVal)}%`, transform: "translateX(-100%)" }}
        >
          <div
            className="h-[23px] text-[12px] px-[4px] text-white flex items-center justify-center bg-orange rounded-[4px] shadow cursor-pointer"
            onMouseDown={handleMouseDown("max")}
          >{maxVal}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomDoubleSlider;
