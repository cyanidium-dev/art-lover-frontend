const FilterLayout = ({title, children}) => {
  return (
    <div className="mb-[36px]">
      {title && <p className="text-[14px] font-bold mb-[16px] text-center">{title}</p>}
      {children}
    </div>
  )
}

export default FilterLayout;
