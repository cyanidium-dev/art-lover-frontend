
type Props = {
    number: number
    text: string
}
const Counter = (props: Props) => {
  return (
      <li className="flex flex-col w-[88px] h-[80px] items-center justify-center bg-[var(--main-orange)] rounded-[8px] text-white shadow-md p-[8px] 
      
      
      lg:gap-2 lg:w-[136px] lg:h-[124px] lg:p-6 lg:shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          <p className="text-center font-semibold text-[16px] mb-[1px]"> {props.number}+</p>
          <p className="text-[10px] w-[63px] font-normal text-center">{props.text}</p>
      </li>
  )
}
export default Counter