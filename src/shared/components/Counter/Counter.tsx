
type Props = {
    number: number
    text: string
}
const Counter = (props: Props) => {
  return (
      <li className="flex flex-col w-[88px] h-[80px] items-center justify-center bg-[var(--main-orange)] rounded-lg text-white p-4 shadow-md 
      
      
      lg:gap-2 lg:w-[136px] lg:h-[124px] lg:p-6 lg:shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
          <p className="text-wrap text-center font-semibold text-[16px]"> {props.number}+</p>
          <p className="text-[10px] font-normal text-wrap text-center">{props.text }</p>
      </li>
  )
}
export default Counter