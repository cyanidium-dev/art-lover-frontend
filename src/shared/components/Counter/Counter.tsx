import { number } from "yup"
import TextTitle from "../TextTitle/TextTitle"

type Props = {
    number: number
    text: string
}
const Counter = (props: Props) => {
  return (
      <li className="flex flex-col w-[88px] h-[80px] items-center justify-center bg-[var(--main-orange)] rounded-lg text-white p-4 shadow-md">
          <TextTitle text={`${props.number}+`} fontSize="16px" className="font-semibold" />
          <p className="text-[10px] font-normal text-wrap text-center">{props.text }</p>
      </li>
  )
}
export default Counter