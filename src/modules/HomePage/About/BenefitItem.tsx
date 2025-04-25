interface BenefitItemProps {
  benefit: { value: string; description: string };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  return (
    <li className="flex flex-col items-center justify-center w-[calc(33.3%-10.67px)] h-[88px] py-4 px-2 rounded-[8px] bg-orange text-white">
      <p className="mb-1 text-[16px] font-semibold leading-[120%] text-center">
        {value}
      </p>
      <p className="text-[10px] font-normal leading-[120%] text-center">
        {description}
      </p>
    </li>
  );
}
