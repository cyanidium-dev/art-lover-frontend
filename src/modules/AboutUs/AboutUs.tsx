import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"
import TextTitle from "@/shared/components/TextTitle/TextTitle"
import aboutUs from "@/assets/aboutUs.png"
import aboutUs2 from "@/assets/aboutUs2.png"
import Image from "next/image"
import Counter from "@/shared/components/Counter/Counter"
import counterItems from "./counterItems"


const AboutUs = () => {
  return (
      <div className="py-8 flex flex-col gap-4 lg:flex-row">
          <div>
              <div >

                  <div className="flex gap-6 ">
                      <div className="">
                          <TextTitle text="Про" className="uppercase font-medium lg:text-[48px]" />
                          <TextTitle text="нас" className="uppercase font-medium lg:text-[48px]" />

                      </div>



                      <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[482px]">
                          <div>
                              <p className=" font-light text-balance  text-[14px] text-justify lg:text-[20px] lg:leading-[30px]">
                  Ми – команда, закохана в мистецтво, яка створила цей магазин для всіх, хто прагне творити без меж! Нашою місією є надихати художників, ілюстраторів, дизайнерів і всіх, хто не уявляє життя без творчості.
                              </p>
                          </div>
                          <TextSubtitle text="Твори. Натхняйся!" className="font-normal text-[14px] text-end lg:text-[24px] " color="var(--main-orange)" />
                      </div>

                  </div>
              </div>


              <div className="py-4 ">
              <Image
                  src={aboutUs}
                    alt="aboutUs"
                  priority
                      width={663}
                      height={361}
                  sizes="100vw"
                />
              
          </div>
          </div>

          <div className="flex flex-col gap-4">

              <div className="hidden lg:block">
                  <Image
                      src={aboutUs2}
                      alt="aboutUs"
                      priority
                      width={447}
                      height={445}
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
    </div>
  )
}
export default AboutUs