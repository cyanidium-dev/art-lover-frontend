interface ConditionItemProps {
  condition: string;
}

export default function ConditionItem({ condition }: ConditionItemProps) {
  return (
    <li className="flex gap-3 xl:gap-x-6 md:w-[calc(50%-40px)] last:mt-auto">
      <div className="size-3 xl:size-5 mt-1.5 rounded-full bg-orange-light shrink-0"></div>
      <p className="text-[12px] xl:text-[18px] font-normal leading-[140%] text-justify">
        {condition}
      </p>
    </li>
  );
}
