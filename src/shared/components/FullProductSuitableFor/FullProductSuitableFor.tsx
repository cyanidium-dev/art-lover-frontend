import TextTitle from "../TextTitle/TextTitle";

type Props = {
    suitableFor: string[];
}
const FullProductSuitableFor = (props: Props) => {
  return (
      <div className="text-left mx-auto">
          <h3 className="text-[14px] font-medium mb-4 uppercase"></h3>
          <TextTitle text="Ідеально підходить для:" className="text-[10px] font-light mb-2" />
          
          
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 max-w-full mx-auto ">
              {props.suitableFor.map((text, i) => (
                  <li
                      key={i}
                      className="border border-[var(--main-orange)] text-[10px] text-[var(--main-orange)] rounded-full px-3 py-1 text-center"
                  >
                      {text}
                  </li>
              ))}
          </ul>
      </div>
  )
}
export default FullProductSuitableFor