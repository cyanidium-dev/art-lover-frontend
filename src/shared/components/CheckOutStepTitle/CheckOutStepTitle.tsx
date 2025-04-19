type Props = {
    title: string;
    text: string;
    icon: React.ReactNode;
}
const CheckOutStepTitle = (props: Props) => {
    return (
      
        <>
      <div className="font-medium mb-4 text-[14px] flex items-center justify-between">
            
                <div className="flex gap-1"><span className="">{props.icon}</span><h3>{props.title}</h3></div>
                <p className="">{ props.text}</p>
            </div>
        </>
  )
}
export default CheckOutStepTitle