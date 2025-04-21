'use client'
import { useState } from "react"
import { ChevronDown, ChevronRight, Clipboard, Globe } from "lucide-react"
type Props = {
    itemDescription: string
}

const FullProducAccordion = (props:Props) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="flex flex-col gap-4">
        
            <div className="border rounded-lg overflow-hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-3 text-left text-[16px] font-medium"
                >
                    <span className="flex items-center gap-2">
                    <Clipboard/>Повний опис товару
                    </span>
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isOpen && (
                    <div className="px-4 pb-4 text-[12px] text-gray-600">
                      {props.itemDescription}
                    </div>
                )}
            </div>

            <div className="border rounded-lg overflow-hidden">
                <button className="w-full flex justify-between items-center p-3 text-left font-medium text-[16px]">
                    <span className="flex items-center gap-2">
                        <Globe/> Доставка та повернення
                    </span>
                    <ChevronRight size={16} />
                </button>
            </div>

        
        </div>
    )
}

export default FullProducAccordion
