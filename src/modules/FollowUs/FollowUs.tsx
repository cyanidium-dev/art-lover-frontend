import TextTitle from "@/shared/components/TextTitle/TextTitle"
import followUsItems from "./followUsItems"

const FollowUs = () => {
  return (
      <div className="py-8">
          
          <TextTitle text="Стежте за нами в соціальних мережах" className="uppercase text-[20px] font-medium mb-[32px] text-center" />
          <ul className="flex flex-wrap gap-3 justify-center items-center text-white ">
              {followUsItems.map((item, index) => (
                  <li
                      key={item.id}
                      className={`w-[140px] h-[141px] p-4 shadow-lg rounded-md flex justify-center items-center ${index===1 ||index===2 ? "bg-white text-[var(--main-dark-color)]" : "bg-[var(--main-orange)]"
                          }`}
                  >

                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-center w-full h-full">

                          
                            <span>{item.icon}</span>
                          
                          <p className="text-[14px] font-normal">{item.social}</p>
                          <p className="text-[12px] font-light">{item.text}</p>
                          </a>
                  </li>
              ))}
                      
            
                      
      </ul>
      
      </div>
  )
}
export default FollowUs