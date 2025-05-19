interface PublicContractBlockProps {
  title: string;
  list: string[];
}

export default function PublicContractBlock({
  title,
  list,
}: PublicContractBlockProps) {
  return (
    <div>
      <h3 className="mb-2 xl:mb-3 text-[16px] xl:text-[20px] font-semibold leading-[160%] uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {list.map((listItem, idx) => (
          <li
            key={idx}
            className="text-[14px] xl:text-[16px] font-normal leading-[160%]"
          >
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
