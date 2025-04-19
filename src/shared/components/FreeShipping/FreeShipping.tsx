type Props = {
    totalPrice: number;
}
const FreeShipping = (props: Props) => {
    const freeShippingThreshold = 200;
    const lengthLineToFreeShipping = (freeShippingThreshold - props.totalPrice).toFixed(0);
    
  return (
    
          <div className="w-full px-8 mb-4 ">
                <div className="flex items-center justify-between mb-2  text-[12px]">
                  <span className="text-[12px] font-light w-1/2 text-white">До безкоштовної доставки додайте на </span>
              <span className="text-[12px] font-normal text-white">{lengthLineToFreeShipping} USD</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
                    <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${(props.totalPrice / freeShippingThreshold) * 100}%` }}></div>
                </div>
      </div>
          
        
    )
}
export default FreeShipping