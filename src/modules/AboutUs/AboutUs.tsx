import TextSubtitle from "@/shared/components/TextSubtitle.tsx/TextSubtitle"

import aboutUs2 from "@/assets/aboutUs2.png"
import Image from "next/image"
import Counter from "@/shared/components/Counter/Counter"
import counterItems from "./counterItems"


const AboutUs = () => {
  return (
      <section className="py-8 flex flex-col justify-center lg:flex-row">
          <div className="mb-[12px]">
              <div className="mb-[20px]">

                  <div className="flex gap-[16px] items-start justify-center ">
                      <div className="w-[58px] h-[58px] lg:w-[100px] lg:h-[100px]">
                          <p className="uppercase leading-6 text-[24px] lg:text-[40px] font-medium text-balance">
                              Про нас
                          </p>
                      </div>
                      <div className="flex flex-col ">
                          <div className="mb-[2px] w-[222px]">
                              <p className="font-light
                              leading-3.5
                              text-balance  text-[14px] text-justify lg:text-[20px] lg:leading-[20px]">
                  Ми – команда, закохана в мистецтво, яка створила цей магазин для всіх, хто прагне творити без меж! Нашою місією є надихати художників, ілюстраторів, дизайнерів і всіх, хто не уявляє життя без творчості.
                              </p>
                          </div>
                          <TextSubtitle text="Твори. Натхняйся!" className=" font-normal text-[14px] text-end lg:text-[24px] text-[var(--main-orange)]" color="var(--main-orange)" />
                      </div>
                  </div>
              </div>


              <div className="relative w-[296px] h-[169px] rounded-[10px] overflow-hidden mx-auto">
                  <Image
                      src="/aboutUs.png"
                      alt="aboutUs"
                      priority
                      width={447}
                      height={445}
                      className="object-cover"
                  />
              </div>
          </div>
              <div className="hidden lg:block">
                  <Image
                      src={aboutUs2}
                      alt="aboutUs"
                      priority
                      width={447}
                      height={445}

                  />
              </div>

          <ul className="flex gap-[16px] justify-center items-center ">
                  {counterItems.map((item) => (
                      <Counter key={item.id} number={item.number} text={item.text} />
                  ))}
          </ul>


      </section>
  )
}
export default AboutUs