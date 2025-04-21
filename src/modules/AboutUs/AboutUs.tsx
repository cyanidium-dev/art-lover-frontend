import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import aboutUs from "@/assets/aboutUs.png"
import Image from "next/image"
import Counter from "@/shared/components/Counter/Counter"
import counterItems from "./counterItems"


const AboutUs = () => {
  return (
      <div className="py-8">
          
          <div className="flex gap-4 ">
          <div className="w-[58px] h-[58px]">
                  <TextTitle text="Про нас" className="uppercase font-medium" />
          </div>
          <div>
                  <p className=" font-light text-balance  text-[14px] text-justify">
                  Ми – команда, закохана в мистецтво, яка створила цей магазин для всіх, хто прагне творити без меж! Нашою місією є надихати художників, ілюстраторів, дизайнерів і всіх, хто не уявляє життя без творчості.
              </p>
              </div>
          </div>
          <TextSubtitle text="Твори. Натхняйся!" className="font-normal text-[14px] text-end " color="var(--main-orange)" />
          <div className="py-4">
              <Image
                  src={aboutUs}
                    alt="aboutUs"
                  priority
              width={0}
                  height={0}
                  sizes="100vw"
                />
              
          </div>
          
          <div>
              <ul className="flex gap-4 justify-center items-center ">
                  {counterItems.map((item) => (
                      <Counter key={item.id} number={item.number} text={item.text} />
                  ))}
                    
          
              </ul>
              
          </div>
    </div>
  )
}
export default AboutUs